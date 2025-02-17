package retribution

import (
	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/proto"
	"github.com/wowsims/wotlk/sim/core/stats"
	"github.com/wowsims/wotlk/sim/paladin"
)

func RegisterRetributionPaladin() {
	core.RegisterAgentFactory(
		proto.Player_RetributionPaladin{},
		proto.Spec_SpecRetributionPaladin,
		func(character core.Character, options proto.Player) core.Agent {
			return NewRetributionPaladin(character, options)
		},
		func(player *proto.Player, spec interface{}) {
			playerSpec, ok := spec.(*proto.Player_RetributionPaladin) // I don't really understand this line
			if !ok {
				panic("Invalid spec value for Retribution Paladin!")
			}
			player.Spec = playerSpec
		},
	)
}

func NewRetributionPaladin(character core.Character, options proto.Player) *RetributionPaladin {
	retOptions := options.GetRetributionPaladin()

	ret := &RetributionPaladin{
		Paladin:              paladin.NewPaladin(character, *retOptions.Talents),
		Rotation:             *retOptions.Rotation,
		Judgement:            retOptions.Options.Judgement,
		Seal:                 retOptions.Options.Seal,
		UseDivinePlea:        retOptions.Options.UseDivinePlea,
		DivinePleaPercentage: retOptions.Rotation.DivinePleaPercentage,
		ExoSlack:             retOptions.Rotation.ExoSlack,
		ConsSlack:            retOptions.Rotation.ConsSlack,
		HolyWrathThreshold:   retOptions.Rotation.HolyWrathThreshold,

		HasLightswornBattlegear2Pc: character.HasSetBonus(paladin.ItemSetLightswornBattlegear, 2),
	}
	ret.PaladinAura = retOptions.Options.Aura

	var rotationInput = retOptions.Rotation.CustomRotation
	if retOptions.Rotation.Type == proto.RetributionPaladin_Rotation_Standard {
		ret.SelectedRotation = ret.mainRotation
	} else if retOptions.Rotation.Type == proto.RetributionPaladin_Rotation_Custom {
		ret.SelectedRotation = ret.customRotation
	} else if retOptions.Rotation.Type == proto.RetributionPaladin_Rotation_CastSequence {
		ret.SelectedRotation = ret.castSequenceRotation
		ret.CastSequenceIndex = 0
		rotationInput = retOptions.Rotation.CustomCastSequence
	} else {
		ret.SelectedRotation = ret.mainRotation
	}

	if rotationInput != nil {
		ret.RotationInput = make([]int32, len(rotationInput.Spells))
		for i, customSpellProto := range rotationInput.Spells {
			ret.RotationInput[i] = customSpellProto.Spell
		}
	}

	// Convert DTPS option to bonus MP5
	spAtt := retOptions.Options.DamageTakenPerSecond * 5.0 / 10.0
	ret.AddStat(stats.MP5, spAtt)

	ret.EnableAutoAttacks(ret, core.AutoAttackOptions{
		MainHand:       ret.WeaponFromMainHand(0), // Set crit multiplier later when we have targets.
		AutoSwingMelee: true,
	})

	ret.EnableResumeAfterManaWait(ret.OnGCDReady)

	return ret
}

type RetributionPaladin struct {
	*paladin.Paladin

	Judgement            proto.PaladinJudgement
	Seal                 proto.PaladinSeal
	UseDivinePlea        bool
	DivinePleaPercentage float64
	ExoSlack             int32
	ConsSlack            int32
	HolyWrathThreshold   int32

	HasLightswornBattlegear2Pc bool

	SelectedRotation  func(*core.Simulation)
	RotationInput     []int32
	CastSequenceIndex int32

	Rotation proto.RetributionPaladin_Rotation
}

func (ret *RetributionPaladin) GetPaladin() *paladin.Paladin {
	return ret.Paladin
}

func (ret *RetributionPaladin) Initialize() {
	ret.Paladin.Initialize()
	ret.RegisterAvengingWrathCD()

	ret.DelayDPSCooldownsForArmorDebuffs()
}

func (ret *RetributionPaladin) Reset(sim *core.Simulation) {
	ret.Paladin.Reset(sim)

	sim.RegisterExecutePhaseCallback(func(sim *core.Simulation, isExecute int) {
		if isExecute == 20 {
			ret.OnGCDReady(sim)
		}
	})

	ret.CastSequenceIndex = 0

	switch ret.Seal {
	case proto.PaladinSeal_Vengeance:
		ret.SealOfVengeanceAura.Activate(sim)
	case proto.PaladinSeal_Command:
		ret.SealOfCommandAura.Activate(sim)
	case proto.PaladinSeal_Righteousness:
		ret.SealOfRighteousnessAura.Activate(sim)
	}

	ret.DivinePleaAura.Activate(sim)
	ret.DivinePlea.CD.Use(sim)

}

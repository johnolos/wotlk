package shaman

import (
	"math"
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/stats"
)

type FireElemental struct {
	core.Pet

	shamanOwner *Shaman

	FireNova  *core.Spell
	FireBlast *core.Spell
}

type AdaptiveRotation struct{}

type Rotation interface {
	DoAction(*FireElemental, *core.Simulation)
	Reset(*FireElemental, *core.Simulation)
}

const growFactor = 2

// Random placeholder fn for likelihood of using fire nova based of num of targets.
// https://www.wolframalpha.com/input?i=f%28x%29+%3D+1.3+-+0.3*x%2C+x+between+1+and+6
func chanceOfFireNova(numOfTargets int32) float64 {
	return 1.3 - (0.3 * float64(numOfTargets))
}

func (rotation *AdaptiveRotation) DoAction(fireElemental *FireElemental, sim *core.Simulation) *core.Spell {
	numOfTargets := sim.GetNumTargets()

	if sim.RandomFloat("FireElemental") < chanceOfFireNova(numOfTargets) {
		if fireElemental.CurrentMana() > fireElemental.FireBlast.CurCast.Cost {
			return fireElemental.FireBlast
		}
	}
	return fireElemental.FireNova
}

var fireElementalBaseStats = stats.Stats{
	stats.Stamina:   534,
	stats.Spirit:    109,
	stats.Intellect: 65,
	stats.Armor:     9616,

	stats.Agility:     113,
	stats.Strength:    331,
	stats.AttackPower: -20,

	// Add 1.8% because pets aren't affected by that component of crit suppression.
	stats.MeleeCrit: (1.1515 + 1.8) * core.CritRatingPerCritChance,
}

func (shaman *Shaman) NewFireElemental() *FireElemental {
	fireElemental := &FireElemental{
		Pet: core.NewPet(
			"Fire Elemental",
			&shaman.Character,
			fireElementalBaseStats,
			shaman.fireElementalStatInheritance(),
			false,
			true,
		),
		shamanOwner: shaman,
	}

	fireElemental.EnableManaBar()

	fireElemental.EnableAutoAttacks(fireElemental, core.AutoAttackOptions{
		MainHand: core.Weapon{
			BaseDamageMin:  233,
			BaseDamageMax:  372,
			SwingSpeed:     2.0,
			SwingDuration:  time.Second * 2,
			CritMultiplier: 2,
		},
		AutoSwingMelee: true,
	})

	// Fire Nova
	fireNovaBaseCost := 940.0
	fireElemental.RegisterSpell(core.SpellConfig{
		ActionID:    core.ActionID{SpellID: 12470},
		SpellSchool: core.SpellSchoolFire,

		ResourceType: stats.Mana,
		BaseCost:     fireNovaBaseCost,

		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				Cost:     fireNovaBaseCost,
				GCD:      core.GCDDefault,
				CastTime: time.Second * 2,
			},
			CD: core.Cooldown{
				Timer:    shaman.NewTimer(),
				Duration: time.Second * 6,
			},
			ModifyCast: func(sim *core.Simulation, spell *core.Spell, cast *core.Cast) {
				shaman.FireElemental.AutoAttacks.DelayMeleeUntil(sim, sim.CurrentTime+3)
			},
		},

		ApplyEffects: core.ApplyEffectFuncAOEDamage(shaman.Env, core.SpellEffect{
			ProcMask:            core.ProcMaskSpellDamage,
			BonusSpellHitRating: float64(shaman.Talents.ElementalPrecision) * 2 * core.SpellHitRatingPerHitChance,

			DamageMultiplier: 1 + float64(shaman.Talents.CallOfFlame)*0.05 + float64(shaman.Talents.ImprovedFireNova)*0.1,
			ThreatMultiplier: 1 - (0.1/3)*float64(shaman.Talents.ElementalPrecision),

			BaseDamage:     core.BaseDamageConfigMagic(1926, 1926, 0.57), // FIXME: double check spell coefficients
			OutcomeApplier: shaman.OutcomeFuncMagicHitAndCrit(shaman.ElementalCritMultiplier()),
		}),
	})

	// Fire Blast

	return fireElemental
}

// const PetExpertiseScale = 3.25

func (shaman *Shaman) fireElementalStatInheritance() core.PetStatInheritance {

	return func(ownerStats stats.Stats) stats.Stats {
		ownerHitChance := ownerStats[stats.MeleeHit] / core.MeleeHitRatingPerHitChance
		hitRatingFromOwner := math.Floor(ownerHitChance) * core.MeleeHitRatingPerHitChance

		return stats.Stats{
			stats.Stamina:     ownerStats[stats.Stamina] * 0.3,
			stats.Armor:       ownerStats[stats.Armor] * 0.35,
			stats.AttackPower: ownerStats[stats.SpellPower] * 0.55,
			stats.SpellPower:  ownerStats[stats.SpellPower] * 0.5,

			stats.MeleeHit:  hitRatingFromOwner,
			stats.Expertise: math.Floor((math.Floor(ownerHitChance) * PetExpertiseScale)) * core.ExpertisePerQuarterPercentReduction,
		}
	}
}

func (fireElemental *FireElemental) GetPet() *core.Pet {
	return &fireElemental.Pet
}

func (fireElemental *FireElemental) Initialize() {
	// Nothing
}

func (fireElemental *FireElemental) OnGCDReady(sim *core.Simulation) {
	fireElemental.DoNothing()
}

func (fireElemental *FireElemental) Reset(sim *core.Simulation) {
	fireElemental.AutoAttacks.CancelAutoSwing(sim)
	if sim.Log != nil {
		//
	}
}

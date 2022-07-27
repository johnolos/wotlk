package shaman

import (
	"strconv"
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/proto"
	"github.com/wowsims/wotlk/sim/core/stats"
)

func (shaman *Shaman) registerFireElementalTotem() {

	actionId := core.ActionID{SpellID: 2894}

	manaCost := 0.23 * shaman.BaseMana

	fireElementalActive := shaman.RegisterAura(core.Aura{
		Label:    "Fire Elemental",
		ActionID: actionId,
		Duration: time.Minute * 2,
	})

	shaman.FireElementalTotem = shaman.RegisterSpell(core.SpellConfig{
		ActionID: actionId,

		ResourceType: stats.Mana,
		BaseCost:     manaCost,

		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				Cost: manaCost,
				GCD:  core.GCDDefault,
			},
			IgnoreHaste: true,
			CD: core.Cooldown{
				Timer:    shaman.NewTimer(),
				Duration: time.Minute * (10 - core.TernaryDuration(shaman.HasMajorGlyph(proto.ShamanMajorGlyph_GlyphOfFireElementalTotem), 5, 0)),
			},
		},

		ApplyEffects: func(sim *core.Simulation, _ *core.Unit, _ *core.Spell) {
			shaman.FireElemental.EnableWithTimeout(sim, shaman.FireElemental, time.Minute*2)
			shaman.FireElemental.CancelGCDTimer(sim)

			// Add a dummy aura to show in metrics
			fireElementalActive.Activate(sim)
		},
	})

	target := shaman.CurrentTarget
	shaman.FireElementalTotemDot = core.NewDot(core.Dot{
		Spell: shaman.FireElementalTotem,
		Aura: target.RegisterAura(core.Aura{
			Label:    "Fire Shield-" + strconv.Itoa(int(shaman.Index)),
			ActionID: actionId,
		}),
		NumberOfTicks: 40,
		TickLength:    time.Minute * 2 / 40,
		TickEffects: core.TickFuncApplyEffects(core.ApplyEffectFuncDirectDamage(core.SpellEffect{
			ProcMask:            core.ProcMaskEmpty,
			BonusSpellHitRating: float64(shaman.Talents.ElementalPrecision) * 2 * core.SpellHitRatingPerHitChance,
			DamageMultiplier:    1 + float64(shaman.Talents.CallOfFlame)*0.05,
			BaseDamage:          core.BaseDamageConfigMagic(50, 66, 0.0162), // FIXME: Rough guestimate
			OutcomeApplier:      shaman.OutcomeFuncMagicHitAndCrit(shaman.ElementalCritMultiplier()),
		})),
	})

	shaman.AddMajorCooldown(core.MajorCooldown{
		Spell:    shaman.FireElementalTotem,
		Priority: core.CooldownPriorityLow,
		Type:     core.CooldownTypeDPS,
	})
}

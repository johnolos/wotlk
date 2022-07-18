import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import { BattleElixir } from '/wotlk/core/proto/common.js';
import { Explosive } from '/wotlk/core/proto/common.js';
import { Flask } from '/wotlk/core/proto/common.js';
import { Food } from '/wotlk/core/proto/common.js';
import { GuardianElixir } from '/wotlk/core/proto/common.js';
import { Conjured } from '/wotlk/core/proto/common.js';
import { PetFood } from '/wotlk/core/proto/common.js';
import { Potions } from '/wotlk/core/proto/common.js';
import { TristateEffect } from '/wotlk/core/proto/common.js';
import { WeaponImbue } from '/wotlk/core/proto/common.js';
import { TypedEvent } from '/wotlk/core/typed_event.js';
// Keep each section in alphabetical order.
// Raid Buffs
export const AllStatsBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(17051), 'giftOfTheWild', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(48470), 'giftOfTheWild', TristateEffect.TristateEffectRegular),
    // drums
]);
export const AllStatsPercentBuff = makeMultiIconInput([
    makeBooleanIndividualBuffInput2(ActionId.fromSpellId(25898), 'blessingOfKings'),
    // blessing of sanctuary
    // drums
]);
export const ArmorBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(20140), 'devotionAura', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(48942), 'devotionAura', TristateEffect.TristateEffectRegular),
    // stoneskin?
    // scroll
]);
export const StaminaBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(14767), 'powerWordFortitude', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(25389), 'powerWordFortitude', TristateEffect.TristateEffectRegular),
    //scroll
]);
export const StrengthAndAgilityBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(52456), 'strengthOfEarthTotem', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(58643), 'strengthOfEarthTotem', TristateEffect.TristateEffectRegular),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(57623), 'hornOfWinter'),
    // scroll
]);
export const IntellectBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(43002), 'arcaneBrilliance'),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(57567), 'felIntelligence'),
    // scroll
]);
export const SpiritBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(48073), 'divineSpirit'),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(57567), 'felIntelligence'),
    // scroll
]);
export const AttackPowerBuff = makeMultiIconInput([
    makeBooleanIndividualBuffInput2(ActionId.fromSpellId(20045), 'blessingOfMight', TristateEffect.TristateEffectImproved),
    makeBooleanIndividualBuffInput2(ActionId.fromSpellId(48934), 'blessingOfMight', TristateEffect.TristateEffectRegular),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(12861), 'battleShout', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(47436), 'battleShout', TristateEffect.TristateEffectRegular),
]);
export const AttackPowerPercentBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(53137), 'abominationsMight'),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(30809), 'unleashedRage'),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(19506), 'trueshotAura'),
]);
export const DamagePercentBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(31869), 'sanctifiedRetribution'),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(31583), 'arcaneEmpowerment'),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(34460), 'ferociousInspiration'),
]);
export const DamageReductionPercentBuff = makeMultiIconInput([
    makeBooleanIndividualBuffInput2(ActionId.fromSpellId(27169), 'blessingOfSanctuary'),
    // vigilance
    // renewed hope
]);
export const HastePercentBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(53648), 'swiftRetribution'),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(48396), 'moonkinAura', TristateEffect.TristateEffectImproved),
]);
export const HealthBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(12861), 'commandingShout', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(47440), 'commandingShout', TristateEffect.TristateEffectRegular),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(18696), 'bloodPact', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(47982), 'bloodPact', TristateEffect.TristateEffectRegular),
]);
export const MP5Buff = makeMultiIconInput([
    makeBooleanIndividualBuffInput2(ActionId.fromSpellId(20245), 'blessingOfWisdom', TristateEffect.TristateEffectImproved),
    makeBooleanIndividualBuffInput2(ActionId.fromSpellId(48938), 'blessingOfWisdom', TristateEffect.TristateEffectRegular),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(16206), 'manaSpringTotem', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(58774), 'manaSpringTotem', TristateEffect.TristateEffectRegular),
]);
export const MeleeCritBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(17007), 'leaderOfThePack', TristateEffect.TristateEffectRegular),
    // rampage
]);
export const MeleeHasteBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(55610), 'icyTalons'),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(29193), 'windfuryTotem', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(65990), 'windfuryTotem', TristateEffect.TristateEffectRegular),
]);
export const ReplenishmentBuff = makeMultiIconInput([
    makeBooleanIndividualBuffInput2(ActionId.fromSpellId(57669), 'replenishment'),
    // hunting party
    // enduring winter
    // judgements of the wise
    // vampiric touch
    // improved soul leech
]);
export const SpellCritBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(24907), 'moonkinAura', TristateEffect.TristateEffectRegular),
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(51470), 'elementalOath'),
]);
export const SpellHasteBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(3738), 'wrathOfAirTotem'),
    // flametongue totem
    // demonic pact
]);
export const SpellPowerBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput2(ActionId.fromSpellId(57722), 'totemOfWrath'),
]);
// Other buffs
export const Bloodlust = makeBooleanRaidBuffInput(ActionId.fromSpellId(2825), 'bloodlust');
export const RetributionAura = makeTristateRaidBuffInput(ActionId.fromSpellId(27150), ActionId.fromSpellId(20092), 'retributionAura');
export const Thorns = makeTristateRaidBuffInput(ActionId.fromSpellId(26992), ActionId.fromSpellId(16840), 'thorns');
export const ShadowProtection = makeBooleanRaidBuffInput(ActionId.fromSpellId(39374), 'shadowProtection');
// Party Buffs
export const BraidedEterniumChain = makeBooleanPartyBuffInput(ActionId.fromSpellId(31025), 'braidedEterniumChain');
export const ChainOfTheTwilightOwl = makeBooleanPartyBuffInput(ActionId.fromSpellId(31035), 'chainOfTheTwilightOwl');
export const HeroicPresence = makeBooleanPartyBuffInput(ActionId.fromSpellId(6562), 'heroicPresence');
export const EyeOfTheNight = makeBooleanPartyBuffInput(ActionId.fromSpellId(31033), 'eyeOfTheNight');
export const ManaTideTotem = makeMultistatePartyBuffInput(ActionId.fromSpellId(16190), 5, 'manaTideTotems');
// Individual Buffs
export const Innervate = makeMultistateIndividualBuffInput(ActionId.fromSpellId(29166), 11, 'innervates');
export const PowerInfusion = makeMultistateIndividualBuffInput(ActionId.fromSpellId(10060), 11, 'powerInfusions');
// Debuffs
export const MajorArmorDebuff = makeMultiIconInput([
    makeBooleanDebuffInput2(ActionId.fromSpellId(7386), 'sunderArmor'),
    makeBooleanDebuffInput2(ActionId.fromSpellId(8647), 'exposeArmor'),
    // acid spit
]);
export const MinorArmorDebuff = makeMultiIconInput([
    makeBooleanDebuffInput2(ActionId.fromSpellId(770), 'faerieFire', TristateEffect.TristateEffectRegular),
    makeBooleanDebuffInput2(ActionId.fromSpellId(50511), 'curseOfWeakness', TristateEffect.TristateEffectRegular),
    // sting
]);
export const AttackPowerDebuff = makeMultiIconInput([
    makeBooleanDebuffInput2(ActionId.fromSpellId(16862), 'demoralizingRoar', TristateEffect.TristateEffectImproved),
    makeBooleanDebuffInput2(ActionId.fromSpellId(12879), 'demoralizingShout', TristateEffect.TristateEffectImproved),
    makeBooleanDebuffInput2(ActionId.fromSpellId(48560), 'demoralizingRoar', TristateEffect.TristateEffectRegular),
    makeBooleanDebuffInput2(ActionId.fromSpellId(18180), 'curseOfWeakness', TristateEffect.TristateEffectImproved),
    makeBooleanDebuffInput2(ActionId.fromSpellId(50511), 'curseOfWeakness', TristateEffect.TristateEffectRegular),
    makeBooleanDebuffInput2(ActionId.fromSpellId(47437), 'demoralizingShout', TristateEffect.TristateEffectRegular),
]);
export const BleedDebuff = makeMultiIconInput([
    makeBooleanDebuffInput2(ActionId.fromSpellId(33876), 'mangle'),
    // trauma
    // stampede
]);
export const CritDebuff = makeMultiIconInput([
    makeBooleanDebuffInput2(ActionId.fromSpellId(30706), 'totemOfWrath'),
    makeBooleanDebuffInput2(ActionId.fromSpellId(20337), 'heartOfTheCrusader'),
    makeBooleanDebuffInput2(ActionId.fromSpellId(58410), 'masterPoisoner'),
]);
export const MeleeAttackSpeedDebuff = makeMultiIconInput([
    makeBooleanDebuffInput2(ActionId.fromSpellId(12666), 'thunderClap', TristateEffect.TristateEffectImproved),
    makeBooleanDebuffInput2(ActionId.fromSpellId(47502), 'thunderClap', TristateEffect.TristateEffectRegular),
    // icy touch
    // imp icy touch
    // infected wounds
    // judgements of the just
]);
export const MeleeHitDebuff = makeMultiIconInput([
    makeBooleanDebuffInput2(ActionId.fromSpellId(48460), 'insectSwarm'),
    makeBooleanDebuffInput2(ActionId.fromSpellId(3043), 'scorpidSting'),
]);
export const PhysicalDamageDebuff = makeMultiIconInput([
    makeBooleanDebuffInput2(ActionId.fromSpellId(29859), 'bloodFrenzy'),
    makeBooleanDebuffInput2(ActionId.fromSpellId(58413), 'savageCombat'),
]);
export const SpellCritDebuff = makeMultiIconInput([
    makeBooleanDebuffInput2(ActionId.fromSpellId(17803), 'improvedShadowBolt'),
    makeBooleanDebuffInput2(ActionId.fromSpellId(12873), 'improvedScorch'),
    makeBooleanDebuffInput2(ActionId.fromSpellId(28593), 'wintersChill'),
]);
export const SpellHitDebuff = makeMultiIconInput([
    makeBooleanDebuffInput2(ActionId.fromSpellId(33198), 'misery'),
    makeBooleanDebuffInput2(ActionId.fromSpellId(33602), 'faerieFire', TristateEffect.TristateEffectImproved),
]);
export const SpellDamageDebuff = makeMultiIconInput([
    makeBooleanDebuffInput2(ActionId.fromSpellId(51161), 'ebonPlaguebringer'),
    makeBooleanDebuffInput2(ActionId.fromSpellId(48511), 'earthAndMoon'),
    makeBooleanDebuffInput2(ActionId.fromSpellId(47865), 'curseOfElements'),
]);
export const JudgementOfWisdom = makeBooleanDebuffInput(ActionId.fromSpellId(53408), 'judgementOfWisdom');
export const JudgementOfLight = makeBooleanDebuffInput(ActionId.fromSpellId(27163), 'judgementOfLight');
export const GiftOfArthas = makeBooleanDebuffInput(ActionId.fromSpellId(11374), 'giftOfArthas');
// Consumes
export const SuperSapper = makeBooleanConsumeInput(ActionId.fromItemId(23827), 'superSapper', [], onSetExplosives);
export const GoblinSapper = makeBooleanConsumeInput(ActionId.fromItemId(10646), 'goblinSapper', [], onSetExplosives);
export const KiblersBits = makeEnumValueConsumeInput(ActionId.fromItemId(33874), 'petFood', PetFood.PetFoodKiblersBits, ['Pet Food']);
export const ScrollOfAgilityV = makeEnumValueConsumeInput(ActionId.fromItemId(27498), 'scrollOfAgility', 5);
export const ScrollOfSpiritV = makeEnumValueConsumeInput(ActionId.fromItemId(27501), 'scrollOfSpirit', 5, ['Spirit']);
export const ScrollOfStrengthV = makeEnumValueConsumeInput(ActionId.fromItemId(27503), 'scrollOfStrength', 5);
export const ScrollOfProtectionV = makeEnumValueConsumeInput(ActionId.fromItemId(27500), 'scrollOfProtection', 5);
export const PetScrollOfAgilityV = makeEnumValueConsumeInput(ActionId.fromItemId(27498), 'petScrollOfAgility', 5);
export const PetScrollOfStrengthV = makeEnumValueConsumeInput(ActionId.fromItemId(27503), 'petScrollOfStrength', 5);
function makeMultiIconInput(inputs) {
    return {
        inputs: inputs,
        numColumns: 1,
        emptyColor: 'grey',
    };
}
function makeBooleanRaidBuffInput2(id, buffsFieldName, value) {
    return makeWrappedIconInput({
        getModObject: (player) => player.getRaid(),
        id: id,
        states: 2,
        changedEvent: (raid) => raid.buffsChangeEmitter,
        getValue: (raid) => value ? raid.getBuffs()[buffsFieldName] == value : raid.getBuffs()[buffsFieldName],
        setValue: (eventID, raid, newValue) => {
            const newBuffs = raid.getBuffs();
            if (value) {
                if (newValue) {
                    newBuffs[buffsFieldName] = value;
                }
                else if (newBuffs[buffsFieldName] == value) {
                    newBuffs[buffsFieldName] = 0;
                }
            }
            else {
                newBuffs[buffsFieldName] = newValue;
            }
            raid.setBuffs(eventID, newBuffs);
        },
    });
}
function makeBooleanIndividualBuffInput2(id, buffsFieldName, value) {
    return makeWrappedIconInput({
        getModObject: (player) => player,
        id: id,
        states: 2,
        changedEvent: (player) => player.buffsChangeEmitter,
        getValue: (player) => value ? player.getBuffs()[buffsFieldName] == value : player.getBuffs()[buffsFieldName],
        setValue: (eventID, player, newValue) => {
            const newBuffs = player.getBuffs();
            if (value) {
                if (newValue) {
                    newBuffs[buffsFieldName] = value;
                }
                else if (newBuffs[buffsFieldName] == value) {
                    newBuffs[buffsFieldName] = 0;
                }
            }
            else {
                newBuffs[buffsFieldName] = newValue;
            }
            player.setBuffs(eventID, newBuffs);
        },
    });
}
function makeBooleanDebuffInput2(id, debuffsFieldName, value) {
    return makeWrappedIconInput({
        getModObject: (player) => player.getRaid(),
        id: id,
        states: 2,
        changedEvent: (raid) => raid.debuffsChangeEmitter,
        getValue: (raid) => value ? raid.getDebuffs()[debuffsFieldName] == value : raid.getDebuffs()[debuffsFieldName],
        setValue: (eventID, raid, newValue) => {
            const newDebuffs = raid.getDebuffs();
            if (value) {
                if (newValue) {
                    newDebuffs[debuffsFieldName] = value;
                }
                else if (newDebuffs[debuffsFieldName] == value) {
                    newDebuffs[debuffsFieldName] = 0;
                }
            }
            else {
                newDebuffs[debuffsFieldName] = newValue;
            }
            raid.setDebuffs(eventID, newDebuffs);
        },
    });
}
function makeWrappedIconInput(config) {
    const getModObject = config.getModObject;
    return {
        id: config.id,
        states: config.states,
        changedEvent: (player) => config.changedEvent(getModObject(player)),
        getValue: (player) => config.getValue(getModObject(player)),
        setValue: (eventID, player, newValue) => config.setValue(eventID, getModObject(player), newValue),
    };
}
function makeBooleanRaidBuffInput(id, buffsFieldName, exclusivityTags) {
    return {
        id: id,
        states: 2,
        exclusivityTags: exclusivityTags,
        changedEvent: (raid) => raid.buffsChangeEmitter,
        getValue: (raid) => raid.getBuffs()[buffsFieldName],
        setValue: (eventID, raid, newValue) => {
            const newBuffs = raid.getBuffs();
            newBuffs[buffsFieldName] = newValue;
            raid.setBuffs(eventID, newBuffs);
        },
    };
}
function makeTristateRaidBuffInput(id, impId, buffsFieldName, exclusivityTags) {
    return {
        id: id,
        states: 3,
        improvedId: impId,
        exclusivityTags: exclusivityTags,
        changedEvent: (raid) => raid.buffsChangeEmitter,
        getValue: (raid) => raid.getBuffs()[buffsFieldName],
        setValue: (eventID, raid, newValue) => {
            const newBuffs = raid.getBuffs();
            newBuffs[buffsFieldName] = newValue;
            raid.setBuffs(eventID, newBuffs);
        },
    };
}
function makeBooleanPartyBuffInput(id, buffsFieldName, exclusivityTags) {
    return {
        id: id,
        states: 2,
        exclusivityTags: exclusivityTags,
        changedEvent: (party) => party.buffsChangeEmitter,
        getValue: (party) => party.getBuffs()[buffsFieldName],
        setValue: (eventID, party, newValue) => {
            const newBuffs = party.getBuffs();
            newBuffs[buffsFieldName] = newValue;
            party.setBuffs(eventID, newBuffs);
        },
    };
}
function makeTristatePartyBuffInput(id, impId, buffsFieldName) {
    return {
        id: id,
        states: 3,
        improvedId: impId,
        changedEvent: (party) => party.buffsChangeEmitter,
        getValue: (party) => party.getBuffs()[buffsFieldName],
        setValue: (eventID, party, newValue) => {
            const newBuffs = party.getBuffs();
            newBuffs[buffsFieldName] = newValue;
            party.setBuffs(eventID, newBuffs);
        },
    };
}
function makeMultistatePartyBuffInput(id, numStates, buffsFieldName) {
    return {
        id: id,
        states: numStates,
        changedEvent: (party) => party.buffsChangeEmitter,
        getValue: (party) => party.getBuffs()[buffsFieldName],
        setValue: (eventID, party, newValue) => {
            const newBuffs = party.getBuffs();
            newBuffs[buffsFieldName] = newValue;
            party.setBuffs(eventID, newBuffs);
        },
    };
}
function makeEnumValuePartyBuffInput(id, buffsFieldName, enumValue, exclusivityTags) {
    return {
        id: id,
        states: 2,
        exclusivityTags: exclusivityTags,
        changedEvent: (party) => party.buffsChangeEmitter,
        getValue: (party) => party.getBuffs()[buffsFieldName] == enumValue,
        setValue: (eventID, party, newValue) => {
            const newBuffs = party.getBuffs();
            newBuffs[buffsFieldName] = newValue ? enumValue : 0;
            party.setBuffs(eventID, newBuffs);
        },
    };
}
function makeBooleanIndividualBuffInput(id, buffsFieldName, exclusivityTags) {
    return {
        id: id,
        states: 2,
        exclusivityTags: exclusivityTags,
        changedEvent: (player) => player.buffsChangeEmitter,
        getValue: (player) => player.getBuffs()[buffsFieldName],
        setValue: (eventID, player, newValue) => {
            const newBuffs = player.getBuffs();
            newBuffs[buffsFieldName] = newValue;
            player.setBuffs(eventID, newBuffs);
        },
    };
}
function makeTristateIndividualBuffInput(id, impId, buffsFieldName) {
    return {
        id: id,
        states: 3,
        improvedId: impId,
        changedEvent: (player) => player.buffsChangeEmitter,
        getValue: (player) => player.getBuffs()[buffsFieldName],
        setValue: (eventID, player, newValue) => {
            const newBuffs = player.getBuffs();
            newBuffs[buffsFieldName] = newValue;
            player.setBuffs(eventID, newBuffs);
        },
    };
}
function makeMultistateIndividualBuffInput(id, numStates, buffsFieldName) {
    return {
        id: id,
        states: numStates,
        changedEvent: (player) => player.buffsChangeEmitter,
        getValue: (player) => player.getBuffs()[buffsFieldName],
        setValue: (eventID, player, newValue) => {
            const newBuffs = player.getBuffs();
            newBuffs[buffsFieldName] = newValue;
            player.setBuffs(eventID, newBuffs);
        },
    };
}
function makeBooleanDebuffInput(id, debuffsFieldName, exclusivityTags) {
    return {
        id: id,
        states: 2,
        exclusivityTags: exclusivityTags,
        changedEvent: (raid) => raid.debuffsChangeEmitter,
        getValue: (raid) => raid.getDebuffs()[debuffsFieldName],
        setValue: (eventID, raid, newValue) => {
            const newDebuffs = raid.getDebuffs();
            newDebuffs[debuffsFieldName] = newValue;
            raid.setDebuffs(eventID, newDebuffs);
        },
    };
}
function makeTristateDebuffInput(id, impId, debuffsFieldName) {
    return {
        id: id,
        states: 3,
        improvedId: impId,
        changedEvent: (raid) => raid.debuffsChangeEmitter,
        getValue: (raid) => raid.getDebuffs()[debuffsFieldName],
        setValue: (eventID, raid, newValue) => {
            const newDebuffs = raid.getDebuffs();
            newDebuffs[debuffsFieldName] = newValue;
            raid.setDebuffs(eventID, newDebuffs);
        },
    };
}
function makeBooleanConsumeInput(id, consumesFieldName, exclusivityTags, onSet) {
    return {
        id: id,
        states: 2,
        exclusivityTags: exclusivityTags,
        changedEvent: (player) => player.consumesChangeEmitter,
        getValue: (player) => player.getConsumes()[consumesFieldName],
        setValue: (eventID, player, newValue) => {
            const newConsumes = player.getConsumes();
            newConsumes[consumesFieldName] = newValue;
            TypedEvent.freezeAllAndDo(() => {
                player.setConsumes(eventID, newConsumes);
                if (onSet) {
                    onSet(eventID, player, newValue);
                }
            });
        },
    };
}
function makeEnumValueConsumeInput(id, consumesFieldName, enumValue, exclusivityTags, onSet, showWhen) {
    return {
        id: id,
        states: 2,
        exclusivityTags: exclusivityTags,
        changedEvent: (player) => player.consumesChangeEmitter,
        getValue: (player) => player.getConsumes()[consumesFieldName] == enumValue,
        setValue: (eventID, player, newValue) => {
            const newConsumes = player.getConsumes();
            newConsumes[consumesFieldName] = newValue ? enumValue : 0;
            TypedEvent.freezeAllAndDo(() => {
                player.setConsumes(eventID, newConsumes);
                if (onSet) {
                    onSet(eventID, player, newValue);
                }
            });
        },
        showWhen: showWhen,
    };
}
//////////////////////////////////////////////////////////////////////
// Custom buffs that don't fit into any of the helper functions above.
//////////////////////////////////////////////////////////////////////
export const makePotionsInput = makeConsumeInputFactory('defaultPotion', [
    { actionId: ActionId.fromItemId(33447), value: Potions.RunicHealingPotion },
    { actionId: ActionId.fromItemId(33448), value: Potions.RunicManaPotion },
    { actionId: ActionId.fromItemId(40093), value: Potions.IndestructiblePotion },
    { actionId: ActionId.fromItemId(40211), value: Potions.PotionOfSpeed },
    { actionId: ActionId.fromItemId(40212), value: Potions.PotionOfWildMagic },
    { actionId: ActionId.fromItemId(22839), value: Potions.DestructionPotion },
    { actionId: ActionId.fromItemId(22838), value: Potions.HastePotion },
    { actionId: ActionId.fromItemId(13442), value: Potions.MightyRagePotion },
    { actionId: ActionId.fromItemId(22832), value: Potions.SuperManaPotion },
    { actionId: ActionId.fromItemId(31677), value: Potions.FelManaPotion },
    { actionId: ActionId.fromItemId(22828), value: Potions.InsaneStrengthPotion },
    { actionId: ActionId.fromItemId(22849), value: Potions.IronshieldPotion },
    { actionId: ActionId.fromItemId(22837), value: Potions.HeroicPotion },
]);
export const makeConjuredInput = makeConsumeInputFactory('defaultConjured', [
    { actionId: ActionId.fromItemId(12662), value: Conjured.ConjuredDarkRune },
    { actionId: ActionId.fromItemId(22788), value: Conjured.ConjuredFlameCap },
    { actionId: ActionId.fromItemId(22105), value: Conjured.ConjuredHealthstone },
    { actionId: ActionId.fromItemId(22044), value: Conjured.ConjuredMageManaEmerald },
    { actionId: ActionId.fromItemId(7676), value: Conjured.ConjuredRogueThistleTea },
]);
export const makeFlasksInput = makeConsumeInputFactory('flask', [
    { actionId: ActionId.fromItemId(46376), value: Flask.FlaskOfTheFrostWyrm },
    { actionId: ActionId.fromItemId(46377), value: Flask.FlaskOfEndlessRage },
    { actionId: ActionId.fromItemId(46378), value: Flask.FlaskOfPureMojo },
    { actionId: ActionId.fromItemId(46379), value: Flask.FlaskOfStoneblood },
    { actionId: ActionId.fromItemId(40079), value: Flask.LesserFlaskOfToughness },
    { actionId: ActionId.fromItemId(44939), value: Flask.LesserFlaskOfResistance },
    { actionId: ActionId.fromItemId(22861), value: Flask.FlaskOfBlindingLight },
    { actionId: ActionId.fromItemId(22853), value: Flask.FlaskOfMightyRestoration },
    { actionId: ActionId.fromItemId(22866), value: Flask.FlaskOfPureDeath },
    { actionId: ActionId.fromItemId(22854), value: Flask.FlaskOfRelentlessAssault },
    { actionId: ActionId.fromItemId(13512), value: Flask.FlaskOfSupremePower },
    { actionId: ActionId.fromItemId(22851), value: Flask.FlaskOfFortification },
    { actionId: ActionId.fromItemId(33208), value: Flask.FlaskOfChromaticWonder },
], (eventID, player, newValue) => {
    if (newValue) {
        const newConsumes = player.getConsumes();
        newConsumes.battleElixir = BattleElixir.BattleElixirUnknown;
        newConsumes.guardianElixir = GuardianElixir.GuardianElixirUnknown;
        player.setConsumes(eventID, newConsumes);
    }
});
export const makeBattleElixirsInput = makeConsumeInputFactory('battleElixir', [
    { actionId: ActionId.fromItemId(44325), value: BattleElixir.ElixirOfAccuracy },
    { actionId: ActionId.fromItemId(44330), value: BattleElixir.ElixirOfArmorPiercing },
    { actionId: ActionId.fromItemId(44327), value: BattleElixir.ElixirOfDeadlyStrikes },
    { actionId: ActionId.fromItemId(44329), value: BattleElixir.ElixirOfExpertise },
    { actionId: ActionId.fromItemId(44331), value: BattleElixir.ElixirOfLightningSpeed },
    { actionId: ActionId.fromItemId(39666), value: BattleElixir.ElixirOfMightyAgility },
    { actionId: ActionId.fromItemId(40073), value: BattleElixir.ElixirOfMightyStrength },
    { actionId: ActionId.fromItemId(40076), value: BattleElixir.GurusElixir },
    { actionId: ActionId.fromItemId(40070), value: BattleElixir.SpellpowerElixir },
    { actionId: ActionId.fromItemId(40068), value: BattleElixir.WrathElixir },
    { actionId: ActionId.fromItemId(28103), value: BattleElixir.AdeptsElixir },
    { actionId: ActionId.fromItemId(9224), value: BattleElixir.ElixirOfDemonslaying },
    { actionId: ActionId.fromItemId(22831), value: BattleElixir.ElixirOfMajorAgility },
    { actionId: ActionId.fromItemId(22833), value: BattleElixir.ElixirOfMajorFirePower },
    { actionId: ActionId.fromItemId(22827), value: BattleElixir.ElixirOfMajorFrostPower },
    { actionId: ActionId.fromItemId(22835), value: BattleElixir.ElixirOfMajorShadowPower },
    { actionId: ActionId.fromItemId(22824), value: BattleElixir.ElixirOfMajorStrength },
    { actionId: ActionId.fromItemId(28104), value: BattleElixir.ElixirOfMastery },
    { actionId: ActionId.fromItemId(13452), value: BattleElixir.ElixirOfTheMongoose },
    { actionId: ActionId.fromItemId(31679), value: BattleElixir.FelStrengthElixir },
    { actionId: ActionId.fromItemId(27155), value: BattleElixir.GreaterArcaneElixir },
], (eventID, player, newValue) => {
    if (newValue) {
        const newConsumes = player.getConsumes();
        newConsumes.flask = Flask.FlaskUnknown;
        player.setConsumes(eventID, newConsumes);
    }
});
export const makeGuardianElixirsInput = makeConsumeInputFactory('guardianElixir', [
    { actionId: ActionId.fromItemId(44328), value: GuardianElixir.ElixirOfMightyDefense },
    { actionId: ActionId.fromItemId(40078), value: GuardianElixir.ElixirOfMightyFortitude },
    { actionId: ActionId.fromItemId(40109), value: GuardianElixir.ElixirOfMightyMageblood },
    { actionId: ActionId.fromItemId(44332), value: GuardianElixir.ElixirOfMightyThoughts },
    { actionId: ActionId.fromItemId(40097), value: GuardianElixir.ElixirOfProtection },
    { actionId: ActionId.fromItemId(40072), value: GuardianElixir.ElixirOfSpirit },
    { actionId: ActionId.fromItemId(9088), value: GuardianElixir.GiftOfArthas },
    { actionId: ActionId.fromItemId(32067), value: GuardianElixir.ElixirOfDraenicWisdom },
    { actionId: ActionId.fromItemId(32068), value: GuardianElixir.ElixirOfIronskin },
    { actionId: ActionId.fromItemId(22834), value: GuardianElixir.ElixirOfMajorDefense },
    { actionId: ActionId.fromItemId(32062), value: GuardianElixir.ElixirOfMajorFortitude },
    { actionId: ActionId.fromItemId(22840), value: GuardianElixir.ElixirOfMajorMageblood },
], (eventID, player, newValue) => {
    if (newValue) {
        const newConsumes = player.getConsumes();
        newConsumes.flask = Flask.FlaskUnknown;
        player.setConsumes(eventID, newConsumes);
    }
});
export const makeFoodInput = makeConsumeInputFactory('food', [
    { actionId: ActionId.fromItemId(43015), value: Food.FoodFishFeast },
    { actionId: ActionId.fromItemId(34753), value: Food.FoodGreatFeast },
    { actionId: ActionId.fromItemId(42999), value: Food.FoodBlackenedDragonfin },
    { actionId: ActionId.fromItemId(42995), value: Food.FoodHeartyRhino },
    { actionId: ActionId.fromItemId(34754), value: Food.FoodMegaMammothMeal },
    { actionId: ActionId.fromItemId(34756), value: Food.FoodSpicedWormBurger },
    { actionId: ActionId.fromItemId(42994), value: Food.FoodRhinoliciousWormsteak },
    { actionId: ActionId.fromItemId(34769), value: Food.FoodImperialMantaSteak },
    { actionId: ActionId.fromItemId(42996), value: Food.FoodSnapperExtreme },
    { actionId: ActionId.fromItemId(34758), value: Food.FoodMightyRhinoDogs },
    { actionId: ActionId.fromItemId(34767), value: Food.FoodFirecrackerSalmon },
    { actionId: ActionId.fromItemId(42998), value: Food.FoodCuttlesteak },
    { actionId: ActionId.fromItemId(43000), value: Food.FoodDragonfinFilet },
    { actionId: ActionId.fromItemId(27657), value: Food.FoodBlackenedBasilisk },
    { actionId: ActionId.fromItemId(27664), value: Food.FoodGrilledMudfish },
    { actionId: ActionId.fromItemId(27655), value: Food.FoodRavagerDog },
    { actionId: ActionId.fromItemId(27658), value: Food.FoodRoastedClefthoof },
    { actionId: ActionId.fromItemId(33872), value: Food.FoodSpicyHotTalbuk },
    { actionId: ActionId.fromItemId(33825), value: Food.FoodSkullfishSoup },
    { actionId: ActionId.fromItemId(33052), value: Food.FoodFishermansFeast },
]);
export const makePetFoodInput = makeConsumeInputFactory('petFood', [
    { actionId: ActionId.fromItemId(33874), value: PetFood.PetFoodKiblersBits },
]);
function onSetExplosives(eventID, player, newValue) {
    if (newValue) {
        const playerConsumes = player.getConsumes();
        player.setConsumes(eventID, playerConsumes);
    }
}
;
export const FillerExplosiveInput = makeConsumeInput('fillerExplosive', [
    { actionId: ActionId.fromItemId(23736), value: Explosive.ExplosiveFelIronBomb },
    { actionId: ActionId.fromItemId(23737), value: Explosive.ExplosiveAdamantiteGrenade },
    { actionId: ActionId.fromItemId(23841), value: Explosive.ExplosiveGnomishFlameTurret },
    { actionId: ActionId.fromItemId(13180), value: Explosive.ExplosiveHolyWater },
], onSetExplosives);
export function makeWeaponImbueInput(isMainHand, options) {
    const allOptions = [
        { actionId: ActionId.fromItemId(18262), value: WeaponImbue.WeaponImbueElementalSharpeningStone },
        { actionId: ActionId.fromItemId(20749), value: WeaponImbue.WeaponImbueBrilliantWizardOil },
        { actionId: ActionId.fromItemId(22522), value: WeaponImbue.WeaponImbueSuperiorWizardOil },
        { actionId: ActionId.fromItemId(34539), value: WeaponImbue.WeaponImbueRighteousWeaponCoating },
        {
            actionId: ActionId.fromItemId(23529), value: WeaponImbue.WeaponImbueAdamantiteSharpeningStone,
            showWhen: (player) => !(isMainHand ? player.getGear().hasBluntMHWeapon() : player.getGear().hasBluntOHWeapon()),
        },
        {
            actionId: ActionId.fromItemId(28421), value: WeaponImbue.WeaponImbueAdamantiteWeightstone,
            showWhen: (player) => (isMainHand ? player.getGear().hasBluntMHWeapon() : player.getGear().hasBluntOHWeapon()),
        },
        { actionId: ActionId.fromSpellId(27186), value: WeaponImbue.WeaponImbueRogueDeadlyPoison },
        { actionId: ActionId.fromSpellId(26891), value: WeaponImbue.WeaponImbueRogueInstantPoison },
        { actionId: ActionId.fromSpellId(25505), value: WeaponImbue.WeaponImbueShamanWindfury },
        { actionId: ActionId.fromSpellId(58790), value: WeaponImbue.WeaponImbueShamanFlametongue },
        { actionId: ActionId.fromSpellId(25500), value: WeaponImbue.WeaponImbueShamanFrostbrand },
    ];
    if (isMainHand) {
        const config = makeConsumeInputFactory('mainHandImbue', allOptions)(options);
        config.changedEvent = (player) => TypedEvent.onAny([player.getRaid()?.changeEmitter || player.consumesChangeEmitter]);
        return config;
    }
    else {
        return makeConsumeInputFactory('offHandImbue', allOptions)(options);
    }
}
function makeConsumeInputFactory(consumesFieldName, allOptions, onSet) {
    return (options) => {
        return {
            numColumns: 1,
            values: [
                { color: 'grey', value: 0 },
            ].concat(options.map(option => allOptions.find(allOption => allOption.value == option))),
            equals: (a, b) => a == b,
            zeroValue: 0,
            changedEvent: (player) => player.consumesChangeEmitter,
            getValue: (player) => player.getConsumes()[consumesFieldName],
            setValue: (eventID, player, newValue) => {
                const newConsumes = player.getConsumes();
                newConsumes[consumesFieldName] = newValue;
                TypedEvent.freezeAllAndDo(() => {
                    player.setConsumes(eventID, newConsumes);
                    if (onSet) {
                        onSet(eventID, player, newValue);
                    }
                });
            },
        };
    };
}
function makeConsumeInput(consumesFieldName, allOptions, onSet) {
    const factory = makeConsumeInputFactory(consumesFieldName, allOptions, onSet);
    return factory(allOptions.map(option => option.value));
}

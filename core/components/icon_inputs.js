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
// Raid Buffs
export const AllStatsBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput(ActionId.fromSpellId(17051), 'giftOfTheWild', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(48470), 'giftOfTheWild', TristateEffect.TristateEffectRegular),
    makeBooleanRaidBuffInput(ActionId.fromItemId(49634), 'drumsOfTheWild'),
], 'Stats');
export const AllStatsPercentBuff = makeMultiIconInput([
    makeBooleanIndividualBuffInput(ActionId.fromSpellId(25898), 'blessingOfKings'),
    makeBooleanRaidBuffInput(ActionId.fromItemId(49633), 'drumsOfForgottenKings'),
    makeBooleanIndividualBuffInput(ActionId.fromSpellId(25889), 'blessingOfSanctuary'),
], 'Stats %');
export const ArmorBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput(ActionId.fromSpellId(20140), 'devotionAura', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(48942), 'devotionAura', TristateEffect.TristateEffectRegular),
    makeBooleanRaidBuffInput(ActionId.fromItemId(43468), 'scrollOfProtection'),
    // stoneskin?
], 'Armor');
export const StaminaBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput(ActionId.fromSpellId(14767), 'powerWordFortitude', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(25389), 'powerWordFortitude', TristateEffect.TristateEffectRegular),
    makeBooleanRaidBuffInput(ActionId.fromItemId(37094), 'scrollOfStamina'),
], 'Stam');
export const StrengthAndAgilityBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput(ActionId.fromSpellId(52456), 'strengthOfEarthTotem', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(58643), 'strengthOfEarthTotem', TristateEffect.TristateEffectRegular),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(57623), 'hornOfWinter'),
    makeBooleanRaidBuffInput(ActionId.fromItemId(43464), 'scrollOfAgility'),
    makeBooleanRaidBuffInput(ActionId.fromItemId(43466), 'scrollOfStrength'),
], 'Str/Agi');
export const IntellectBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput(ActionId.fromSpellId(43002), 'arcaneBrilliance'),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(57567), 'felIntelligence'),
    makeBooleanRaidBuffInput(ActionId.fromItemId(37092), 'scrollOfIntellect'),
], 'Int');
export const SpiritBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput(ActionId.fromSpellId(48073), 'divineSpirit'),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(57567), 'felIntelligence'),
    makeBooleanRaidBuffInput(ActionId.fromItemId(37098), 'scrollOfSpirit'),
], 'Spi');
export const AttackPowerBuff = makeMultiIconInput([
    makeBooleanIndividualBuffInput(ActionId.fromSpellId(20045), 'blessingOfMight', TristateEffect.TristateEffectImproved),
    makeBooleanIndividualBuffInput(ActionId.fromSpellId(48934), 'blessingOfMight', TristateEffect.TristateEffectRegular),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(12861), 'battleShout', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(47436), 'battleShout', TristateEffect.TristateEffectRegular),
], 'AP');
export const AttackPowerPercentBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput(ActionId.fromSpellId(53137), 'abominationsMight'),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(30809), 'unleashedRage'),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(19506), 'trueshotAura'),
], 'AP %');
export const DamagePercentBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput(ActionId.fromSpellId(31869), 'sanctifiedRetribution'),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(31583), 'arcaneEmpowerment'),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(34460), 'ferociousInspiration'),
], 'Dmg %');
export const DamageReductionPercentBuff = makeMultiIconInput([
    makeBooleanIndividualBuffInput(ActionId.fromSpellId(25899), 'blessingOfSanctuary'),
    // vigilance
    // renewed hope
], 'Mit %');
export const HastePercentBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput(ActionId.fromSpellId(53648), 'swiftRetribution'),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(48396), 'moonkinAura', TristateEffect.TristateEffectImproved),
], 'Haste %');
export const HealthBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput(ActionId.fromSpellId(12861), 'commandingShout', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(47440), 'commandingShout', TristateEffect.TristateEffectRegular),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(18696), 'bloodPact', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(47982), 'bloodPact', TristateEffect.TristateEffectRegular),
], 'Health');
export const MP5Buff = makeMultiIconInput([
    makeBooleanIndividualBuffInput(ActionId.fromSpellId(20245), 'blessingOfWisdom', TristateEffect.TristateEffectImproved),
    makeBooleanIndividualBuffInput(ActionId.fromSpellId(48938), 'blessingOfWisdom', TristateEffect.TristateEffectRegular),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(16206), 'manaSpringTotem', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(58774), 'manaSpringTotem', TristateEffect.TristateEffectRegular),
], 'MP5');
export const MeleeCritBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput(ActionId.fromSpellId(17007), 'leaderOfThePack', TristateEffect.TristateEffectRegular),
    // rampage
], 'Melee Crit');
export const MeleeHasteBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput(ActionId.fromSpellId(55610), 'icyTalons'),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(29193), 'windfuryTotem', TristateEffect.TristateEffectImproved),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(65990), 'windfuryTotem', TristateEffect.TristateEffectRegular),
], 'Melee Haste');
export const ReplenishmentBuff = makeMultiIconInput([
    makeBooleanIndividualBuffInput(ActionId.fromSpellId(57669), 'replenishment'),
    // hunting party
    // enduring winter
    // judgements of the wise
    // vampiric touch
    // improved soul leech
], 'Repl');
export const SpellCritBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput(ActionId.fromSpellId(24907), 'moonkinAura', TristateEffect.TristateEffectRegular),
    makeBooleanRaidBuffInput(ActionId.fromSpellId(51470), 'elementalOath'),
], 'Spell Crit');
export const SpellHasteBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput(ActionId.fromSpellId(3738), 'wrathOfAirTotem'),
    // flametongue totem
    // demonic pact
], 'Spell Haste');
export const SpellPowerBuff = makeMultiIconInput([
    makeBooleanRaidBuffInput(ActionId.fromSpellId(57722), 'totemOfWrath'),
], 'SP');
export const Bloodlust = withLabel(makeBooleanRaidBuffInput(ActionId.fromSpellId(2825), 'bloodlust'), 'Lust');
// Misc Buffs
export const RetributionAura = makeBooleanRaidBuffInput(ActionId.fromSpellId(54043), 'retributionAura');
export const ShadowProtection = makeBooleanRaidBuffInput(ActionId.fromSpellId(48170), 'shadowProtection');
export const BraidedEterniumChain = makeBooleanPartyBuffInput(ActionId.fromSpellId(31025), 'braidedEterniumChain');
export const ChainOfTheTwilightOwl = makeBooleanPartyBuffInput(ActionId.fromSpellId(31035), 'chainOfTheTwilightOwl');
export const HeroicPresence = makeBooleanPartyBuffInput(ActionId.fromSpellId(6562), 'heroicPresence');
export const EyeOfTheNight = makeBooleanPartyBuffInput(ActionId.fromSpellId(31033), 'eyeOfTheNight');
export const Thorns = makeTristateRaidBuffInput(ActionId.fromSpellId(53307), ActionId.fromSpellId(16840), 'thorns');
export const ManaTideTotem = makeMultistatePartyBuffInput(ActionId.fromSpellId(16190), 5, 'manaTideTotems');
export const Innervate = makeMultistateIndividualBuffInput(ActionId.fromSpellId(29166), 11, 'innervates');
export const PowerInfusion = makeMultistateIndividualBuffInput(ActionId.fromSpellId(10060), 11, 'powerInfusions');
// Debuffs
export const MajorArmorDebuff = makeMultiIconInput([
    makeBooleanDebuffInput(ActionId.fromSpellId(7386), 'sunderArmor'),
    makeBooleanDebuffInput(ActionId.fromSpellId(8647), 'exposeArmor'),
    // acid spit
], 'Major Ar');
export const MinorArmorDebuff = makeMultiIconInput([
    makeBooleanDebuffInput(ActionId.fromSpellId(770), 'faerieFire', TristateEffect.TristateEffectRegular),
    makeBooleanDebuffInput(ActionId.fromSpellId(50511), 'curseOfWeakness', TristateEffect.TristateEffectRegular),
    // sting
], 'Minor Ar');
export const AttackPowerDebuff = makeMultiIconInput([
    makeBooleanDebuffInput(ActionId.fromSpellId(16862), 'demoralizingRoar', TristateEffect.TristateEffectImproved),
    makeBooleanDebuffInput(ActionId.fromSpellId(12879), 'demoralizingShout', TristateEffect.TristateEffectImproved),
    makeBooleanDebuffInput(ActionId.fromSpellId(48560), 'demoralizingRoar', TristateEffect.TristateEffectRegular),
    makeBooleanDebuffInput(ActionId.fromSpellId(18180), 'curseOfWeakness', TristateEffect.TristateEffectImproved),
    makeBooleanDebuffInput(ActionId.fromSpellId(50511), 'curseOfWeakness', TristateEffect.TristateEffectRegular),
    makeBooleanDebuffInput(ActionId.fromSpellId(47437), 'demoralizingShout', TristateEffect.TristateEffectRegular),
], 'AP');
export const BleedDebuff = makeMultiIconInput([
    makeBooleanDebuffInput(ActionId.fromSpellId(33876), 'mangle'),
    // trauma
    // stampede
], 'Bleed');
export const CritDebuff = makeMultiIconInput([
    makeBooleanDebuffInput(ActionId.fromSpellId(30706), 'totemOfWrath'),
    makeBooleanDebuffInput(ActionId.fromSpellId(20337), 'heartOfTheCrusader'),
    makeBooleanDebuffInput(ActionId.fromSpellId(58410), 'masterPoisoner'),
], 'Crit');
export const MeleeAttackSpeedDebuff = makeMultiIconInput([
    makeBooleanDebuffInput(ActionId.fromSpellId(12666), 'thunderClap', TristateEffect.TristateEffectImproved),
    makeBooleanDebuffInput(ActionId.fromSpellId(47502), 'thunderClap', TristateEffect.TristateEffectRegular),
    // icy touch
    // imp icy touch
    // infected wounds
    // judgements of the just
], 'Atk Spd');
export const MeleeHitDebuff = makeMultiIconInput([
    makeBooleanDebuffInput(ActionId.fromSpellId(48460), 'insectSwarm'),
    makeBooleanDebuffInput(ActionId.fromSpellId(3043), 'scorpidSting'),
], 'Miss');
export const PhysicalDamageDebuff = makeMultiIconInput([
    makeBooleanDebuffInput(ActionId.fromSpellId(29859), 'bloodFrenzy'),
    makeBooleanDebuffInput(ActionId.fromSpellId(58413), 'savageCombat'),
], 'Phys Vuln');
export const SpellCritDebuff = makeMultiIconInput([
    makeBooleanDebuffInput(ActionId.fromSpellId(17800), 'shadowMastery'),
    makeBooleanDebuffInput(ActionId.fromSpellId(12873), 'improvedScorch'),
    makeBooleanDebuffInput(ActionId.fromSpellId(28593), 'wintersChill'),
], 'Spell Crit');
export const SpellHitDebuff = makeMultiIconInput([
    makeBooleanDebuffInput(ActionId.fromSpellId(33198), 'misery'),
    makeBooleanDebuffInput(ActionId.fromSpellId(33602), 'faerieFire', TristateEffect.TristateEffectImproved),
], 'Spell Hit');
export const SpellDamageDebuff = makeMultiIconInput([
    makeBooleanDebuffInput(ActionId.fromSpellId(51161), 'ebonPlaguebringer'),
    makeBooleanDebuffInput(ActionId.fromSpellId(48511), 'earthAndMoon'),
    makeBooleanDebuffInput(ActionId.fromSpellId(47865), 'curseOfElements'),
], 'Spell Dmg');
export const JudgementOfWisdom = makeBooleanDebuffInput(ActionId.fromSpellId(53408), 'judgementOfWisdom');
export const JudgementOfLight = makeBooleanDebuffInput(ActionId.fromSpellId(27163), 'judgementOfLight');
export const GiftOfArthas = makeBooleanDebuffInput(ActionId.fromSpellId(11374), 'giftOfArthas');
// Consumes
export const SuperSapper = makeBooleanConsumeInput(ActionId.fromItemId(23827), 'superSapper', [], onSetExplosives);
export const GoblinSapper = makeBooleanConsumeInput(ActionId.fromItemId(10646), 'goblinSapper', [], onSetExplosives);
export const KiblersBits = makeEnumValueConsumeInput(ActionId.fromItemId(33874), 'petFood', PetFood.PetFoodKiblersBits, ['Pet Food']);
export const PetScrollOfAgilityV = makeEnumValueConsumeInput(ActionId.fromItemId(27498), 'petScrollOfAgility', 5);
export const PetScrollOfStrengthV = makeEnumValueConsumeInput(ActionId.fromItemId(27503), 'petScrollOfStrength', 5);
function withLabel(config, label) {
    config.label = label;
    return config;
}
export function makeMultiIconInput(inputs, label) {
    return {
        inputs: inputs,
        numColumns: 1,
        emptyColor: 'grey',
        label: label,
    };
}
function makeBooleanRaidBuffInput(id, fieldName, value) {
    return makeBooleanInput({
        getModObject: (player) => player.getRaid(),
        getValue: (raid) => raid.getBuffs(),
        setValue: (eventID, raid, newVal) => raid.setBuffs(eventID, newVal),
        changeEmitter: (raid) => raid.buffsChangeEmitter,
    }, id, fieldName, value);
}
function makeBooleanPartyBuffInput(id, fieldName, value) {
    return makeBooleanInput({
        getModObject: (player) => player.getParty(),
        getValue: (party) => party.getBuffs(),
        setValue: (eventID, party, newVal) => party.setBuffs(eventID, newVal),
        changeEmitter: (party) => party.buffsChangeEmitter,
    }, id, fieldName, value);
}
function makeBooleanIndividualBuffInput(id, fieldName, value) {
    return makeBooleanInput({
        getModObject: (player) => player,
        getValue: (player) => player.getBuffs(),
        setValue: (eventID, player, newVal) => player.setBuffs(eventID, newVal),
        changeEmitter: (player) => player.buffsChangeEmitter,
    }, id, fieldName, value);
}
function makeBooleanDebuffInput(id, fieldName, value) {
    return makeBooleanInput({
        getModObject: (player) => player.getRaid(),
        getValue: (raid) => raid.getDebuffs(),
        setValue: (eventID, raid, newVal) => raid.setDebuffs(eventID, newVal),
        changeEmitter: (raid) => raid.debuffsChangeEmitter,
    }, id, fieldName, value);
}
function makeBooleanInput(config, id, fieldName, value) {
    return makeWrappedIconInput({
        getModObject: config.getModObject,
        id: id,
        states: 2,
        changedEvent: config.changeEmitter,
        getValue: (modObj) => value ? config.getValue(modObj)[fieldName] == value : config.getValue(modObj)[fieldName],
        setValue: (eventID, modObj, newValue) => {
            const newMessage = config.getValue(modObj);
            if (value) {
                if (newValue) {
                    newMessage[fieldName] = value;
                }
                else if (newMessage[fieldName] == value) {
                    newMessage[fieldName] = 0;
                }
            }
            else {
                newMessage[fieldName] = newValue;
            }
            config.setValue(eventID, modObj, newMessage);
        },
    });
}
function makeTristateRaidBuffInput(id, impId, fieldName) {
    return makeTristateInput({
        getModObject: (player) => player.getRaid(),
        getValue: (raid) => raid.getBuffs(),
        setValue: (eventID, raid, newVal) => raid.setBuffs(eventID, newVal),
        changeEmitter: (raid) => raid.buffsChangeEmitter,
    }, id, impId, fieldName);
}
function makeMultistatePartyBuffInput(id, numStates, fieldName) {
    return makeMultistateInput({
        getModObject: (player) => player.getParty(),
        getValue: (party) => party.getBuffs(),
        setValue: (eventID, party, newVal) => party.setBuffs(eventID, newVal),
        changeEmitter: (party) => party.buffsChangeEmitter,
    }, id, numStates, fieldName);
}
function makeMultistateIndividualBuffInput(id, numStates, fieldName) {
    return makeMultistateInput({
        getModObject: (player) => player,
        getValue: (player) => player.getBuffs(),
        setValue: (eventID, player, newVal) => player.setBuffs(eventID, newVal),
        changeEmitter: (player) => player.buffsChangeEmitter,
    }, id, numStates, fieldName);
}
function makeTristateInput(config, id, impId, fieldName) {
    const input = makeNumberInput(config, id, fieldName);
    input.states = 3;
    input.improvedId = impId;
    return input;
}
function makeMultistateInput(config, id, numStates, fieldName) {
    const input = makeNumberInput(config, id, fieldName);
    input.states = numStates;
    return input;
}
function makeNumberInput(config, id, fieldName) {
    return makeWrappedIconInput({
        getModObject: config.getModObject,
        id: id,
        states: 0,
        changedEvent: config.changeEmitter,
        getValue: (modObj) => config.getValue(modObj)[fieldName],
        setValue: (eventID, modObj, newValue) => {
            const newMessage = config.getValue(modObj);
            newMessage[fieldName] = newValue;
            config.setValue(eventID, modObj, newMessage);
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

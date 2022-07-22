import { Warlock_Rotation_Type as RotationType, Warlock_Rotation_Preset as RotationPreset, Warlock_Rotation_PrimarySpell as PrimarySpell, Warlock_Rotation_SecondaryDot as SecondaryDot, Warlock_Rotation_SpecSpell as SpecSpell, Warlock_Rotation_Curse as Curse, Warlock_Options_WeaponImbue as WarlockWeaponImbue, Warlock_Options_Armor as Armor, Warlock_Options_Summon as Summon, } from '/wotlk/core/proto/warlock.js';
import { Glyphs } from '/wotlk/core/proto/common.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import { TypedEvent } from '/wotlk/core/typed_event.js';
import * as Presets from './presets.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const ArmorInput = InputHelpers.makeSpecOptionsEnumIconInput({
    fieldName: 'armor',
    values: [
        { color: 'grey', value: Armor.NoArmor },
        { actionId: ActionId.fromSpellId(47893), value: Armor.FelArmor },
        { actionId: ActionId.fromSpellId(47889), value: Armor.DemonArmor },
    ],
});
export const WeaponImbue = InputHelpers.makeSpecOptionsEnumIconInput({
    fieldName: 'weaponImbue',
    values: [
        { color: 'grey', value: WarlockWeaponImbue.NoWeaponImbue },
        { actionId: ActionId.fromItemId(41174), value: WarlockWeaponImbue.GrandFirestone },
        { actionId: ActionId.fromItemId(41196), value: WarlockWeaponImbue.GrandSpellstone },
    ],
});
export const PetType = InputHelpers.makeSpecOptionsEnumIconInput({
    fieldName: 'summon',
    values: [
        { color: 'grey', value: Summon.NoSummon },
        { actionId: ActionId.fromSpellId(688), value: Summon.Imp },
        { actionId: ActionId.fromSpellId(712), value: Summon.Succubus },
        { actionId: ActionId.fromSpellId(691), value: Summon.Felhunter },
        {
            actionId: ActionId.fromSpellId(30146), value: Summon.Felguard,
            showWhen: (player) => player.getTalents().summonFelguard,
        },
    ],
    changeEmitter: (player) => player.changeEmitter,
});
export const PrimarySpellInput = InputHelpers.makeRotationEnumIconInput({
    fieldName: 'primarySpell',
    values: [
        { actionId: ActionId.fromSpellId(47809), value: PrimarySpell.ShadowBolt },
        { actionId: ActionId.fromSpellId(47838), value: PrimarySpell.Incinerate },
        { actionId: ActionId.fromSpellId(47836), value: PrimarySpell.Seed },
    ],
});
export const SecondaryDotInput = InputHelpers.makeRotationEnumIconInput({
    fieldName: 'secondaryDot',
    values: [
        { color: 'grey', value: SecondaryDot.NoSecondaryDot },
        { actionId: ActionId.fromSpellId(47811), value: SecondaryDot.Immolate },
        {
            actionId: ActionId.fromSpellId(47843), value: SecondaryDot.UnstableAffliction,
            showWhen: (player) => player.getTalents().unstableAffliction,
        },
    ],
    changeEmitter: (player) => player.changeEmitter,
});
export const SpecSpellChaosBolt = {
    type: 'icon',
    id: ActionId.fromSpellId(59172),
    states: 2,
    extraCssClasses: [
        'ChaosBolt-picker',
    ],
    changedEvent: (player) => player.changeEmitter,
    getValue: (player) => player.getRotation().specSpell == SpecSpell.ChaosBolt,
    setValue: (eventID, player, newValue) => {
        const newRotation = player.getRotation();
        newRotation.specSpell = newValue ? SpecSpell.ChaosBolt : SpecSpell.NoSpecSpell;
        newRotation.preset = RotationPreset.Manual;
        player.setRotation(eventID, newRotation);
    },
};
export const SpecSpellHaunt = {
    type: 'icon',
    id: ActionId.fromSpellId(59164),
    states: 2,
    extraCssClasses: [
        'Haunt-picker',
    ],
    changedEvent: (player) => player.changeEmitter,
    getValue: (player) => player.getRotation().specSpell == SpecSpell.Haunt,
    setValue: (eventID, player, newValue) => {
        const newRotation = player.getRotation();
        newRotation.specSpell = newValue ? SpecSpell.Haunt : SpecSpell.NoSpecSpell;
        newRotation.preset = RotationPreset.Manual;
        player.setRotation(eventID, newRotation);
    },
    showWhen: (player) => player.getTalents().haunt,
};
export const CorruptionSpell = {
    type: 'icon',
    id: ActionId.fromSpellId(47813),
    states: 2,
    extraCssClasses: [
        'Corruption-picker',
    ],
    changedEvent: (player) => player.changeEmitter,
    getValue: (player) => player.getRotation().corruption,
    setValue: (eventID, player, newValue) => {
        const newRotation = player.getRotation();
        newRotation.corruption = newValue;
        newRotation.primarySpell = PrimarySpell.ShadowBolt;
        newRotation.preset = RotationPreset.Manual;
        player.setRotation(eventID, newRotation);
    },
};
export const WarlockRotationConfig = {
    inputs: [
        {
            type: 'enum',
            label: 'Spec',
            labelTooltip: 'Switches between spec rotation settings. Will also update talents to defaults for the selected spec.',
            values: [
                { name: 'Affliction', value: RotationType.Affliction },
                { name: 'Demonology', value: RotationType.Demonology },
                { name: 'Destruction', value: RotationType.Destruction },
            ],
            changedEvent: (player) => player.rotationChangeEmitter,
            getValue: (player) => player.getRotation().type,
            setValue: (eventID, player, newValue) => {
                var newRotation = player.getRotation();
                var newOptions = player.getSpecOptions();
                TypedEvent.freezeAllAndDo(() => {
                    if (newValue == RotationType.Affliction) {
                        player.setTalentsString(eventID, Presets.AfflictionTalents.data.talentsString);
                        player.setGlyphs(eventID, Presets.AfflictionTalents.data.glyphs || Glyphs.create());
                        newRotation = Presets.AfflictionRotation;
                        newOptions = Presets.AfflictionOptions;
                    }
                    else if (newValue == RotationType.Demonology) {
                        player.setTalentsString(eventID, Presets.DemonologyTalents.data.talentsString);
                        player.setGlyphs(eventID, Presets.DemonologyTalents.data.glyphs || Glyphs.create());
                        newRotation = Presets.DemonologyRotation;
                        newOptions = Presets.DemonologyOptions;
                    }
                    else {
                        player.setTalentsString(eventID, Presets.DestructionTalents.data.talentsString);
                        player.setGlyphs(eventID, Presets.DestructionTalents.data.glyphs || Glyphs.create());
                        newRotation = Presets.DestructionRotation;
                        newOptions = Presets.DestructionOptions;
                    }
                    newRotation.type = newValue;
                    newRotation.preset = RotationPreset.Automatic;
                    player.setRotation(eventID, newRotation);
                    player.setSpecOptions(eventID, newOptions);
                });
            },
        },
        InputHelpers.makeRotationEnumInput({
            fieldName: 'preset',
            label: 'Rotation Preset',
            labelTooltip: 'Automatic will select the spells for you if you have the last talent in a one of the trees. Otherwise you will have to manually select the spells you want to cast.',
            values: [
                { name: "Manual", value: RotationPreset.Manual },
                { name: "Automatic", value: RotationPreset.Automatic },
            ],
        }),
        {
            type: 'enum',
            label: 'Curse',
            labelTooltip: 'Manual curse selection. Choice ignored for an Automatic Rotation.',
            values: [
                { name: "None", value: Curse.NoCurse },
                { name: "Elements", value: Curse.Elements },
                { name: "Weakness", value: Curse.Weakness },
                { name: "Doom", value: Curse.Doom },
                { name: "Agony", value: Curse.Agony },
                { name: "Tongues", value: Curse.Tongues }
            ],
            changedEvent: (player) => player.rotationChangeEmitter,
            getValue: (player) => player.getRotation().curse,
            setValue: (eventID, player, newValue) => {
                const newRotation = player.getRotation();
                newRotation.curse = newValue;
                newRotation.preset = RotationPreset.Manual;
                player.setRotation(eventID, newRotation);
            },
        },
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'detonateSeed',
            label: 'Detonate Seed on Cast',
            labelTooltip: 'Simulates raid doing damage to targets such that seed detonates immediately on cast.',
            showWhen: (player) => player.getRotation().primarySpell == PrimarySpell.Seed,
        }),
    ],
};

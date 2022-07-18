import { Warlock_Rotation_Type as RotationType, Warlock_Rotation_Preset as RotationPreset, Warlock_Rotation_PrimarySpell as PrimarySpell, Warlock_Rotation_SecondaryDot as SecondaryDot, Warlock_Rotation_SpecSpell as SpecSpell, Warlock_Rotation_Curse as Curse, Warlock_Options_Armor as Armor, Warlock_Options_Summon as Summon, } from '/wotlk/core/proto/warlock.js';
import { Glyphs } from '/wotlk/core/proto/common.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import { TypedEvent } from '/wotlk/core/typed_event.js';
import * as Presets from './presets.js';
// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const FelArmor = {
    id: ActionId.fromSpellId(47893),
    states: 2,
    extraCssClasses: [
        'fel-armor-picker',
    ],
    changedEvent: (player) => player.specOptionsChangeEmitter,
    getValue: (player) => player.getSpecOptions().armor == Armor.FelArmor,
    setValue: (eventID, player, newValue) => {
        const newOptions = player.getSpecOptions();
        newOptions.armor = newValue ? Armor.FelArmor : Armor.NoArmor;
        player.setSpecOptions(eventID, newOptions);
    },
};
export const DemonArmor = {
    id: ActionId.fromSpellId(47889),
    states: 2,
    extraCssClasses: [
        'demon-armor-picker',
    ],
    changedEvent: (player) => player.specOptionsChangeEmitter,
    getValue: (player) => player.getSpecOptions().armor == Armor.DemonArmor,
    setValue: (eventID, player, newValue) => {
        const newOptions = player.getSpecOptions();
        newOptions.armor = newValue ? Armor.DemonArmor : Armor.NoArmor;
        player.setSpecOptions(eventID, newOptions);
    },
};
export const SummonImp = {
    id: ActionId.fromSpellId(688),
    states: 2,
    extraCssClasses: [
        'SummonImp-picker',
    ],
    changedEvent: (player) => player.specOptionsChangeEmitter,
    getValue: (player) => player.getSpecOptions().summon == Summon.Imp,
    setValue: (eventID, player, newValue) => {
        const newOptions = player.getSpecOptions();
        newOptions.summon = newValue ? Summon.Imp : Summon.NoSummon;
        player.setSpecOptions(eventID, newOptions);
    },
};
export const SummonSuccubus = {
    id: ActionId.fromSpellId(712),
    states: 2,
    extraCssClasses: [
        'SummonSuccubus-picker',
    ],
    changedEvent: (player) => player.specOptionsChangeEmitter,
    getValue: (player) => player.getSpecOptions().summon == Summon.Succubus,
    setValue: (eventID, player, newValue) => {
        const newOptions = player.getSpecOptions();
        newOptions.summon = newValue ? Summon.Succubus : Summon.NoSummon;
        player.setSpecOptions(eventID, newOptions);
    },
};
export const SummonFelhunter = {
    id: ActionId.fromSpellId(691),
    states: 2,
    extraCssClasses: [
        'SummonFelhunter-picker',
    ],
    changedEvent: (player) => player.specOptionsChangeEmitter,
    getValue: (player) => player.getSpecOptions().summon == Summon.Felhunter,
    setValue: (eventID, player, newValue) => {
        const newOptions = player.getSpecOptions();
        newOptions.summon = newValue ? Summon.Felhunter : Summon.NoSummon;
        player.setSpecOptions(eventID, newOptions);
    },
};
export const SummonFelguard = {
    id: ActionId.fromSpellId(30146),
    states: 2,
    extraCssClasses: [
        'SummonFelguard-picker',
    ],
    changedEvent: (player) => player.specOptionsChangeEmitter,
    getValue: (player) => player.getSpecOptions().summon == Summon.Felguard,
    setValue: (eventID, player, newValue) => {
        const newOptions = player.getSpecOptions();
        newOptions.summon = newValue ? Summon.Felguard : Summon.NoSummon;
        player.setSpecOptions(eventID, newOptions);
    },
    showWhen: (player) => player.getTalents().summonFelguard,
};
export const PrimarySpellShadowBolt = {
    id: ActionId.fromSpellId(47809),
    states: 2,
    extraCssClasses: [
        'ShadowBolt-picker',
    ],
    changedEvent: (player) => player.rotationChangeEmitter,
    getValue: (player) => player.getRotation().primarySpell == PrimarySpell.ShadowBolt,
    setValue: (eventID, player, newValue) => {
        const newRotation = player.getRotation();
        newRotation.primarySpell = newValue ? PrimarySpell.ShadowBolt : PrimarySpell.ShadowBolt;
        newRotation.preset = RotationPreset.Manual;
        player.setRotation(eventID, newRotation);
    },
};
export const PrimarySpellIncinerate = {
    id: ActionId.fromSpellId(47838),
    states: 2,
    extraCssClasses: [
        'Incinerate-picker',
    ],
    changedEvent: (player) => player.rotationChangeEmitter,
    getValue: (player) => player.getRotation().primarySpell == PrimarySpell.Incinerate,
    setValue: (eventID, player, newValue) => {
        const newRotation = player.getRotation();
        newRotation.primarySpell = newValue ? PrimarySpell.Incinerate : PrimarySpell.ShadowBolt;
        newRotation.preset = RotationPreset.Manual;
        player.setRotation(eventID, newRotation);
    },
};
export const PrimarySpellSeed = {
    id: ActionId.fromSpellId(47836),
    states: 2,
    extraCssClasses: [
        'Seed-picker',
    ],
    changedEvent: (player) => player.rotationChangeEmitter,
    getValue: (player) => player.getRotation().primarySpell == PrimarySpell.Seed,
    setValue: (eventID, player, newValue) => {
        const newRotation = player.getRotation();
        newRotation.primarySpell = newValue ? PrimarySpell.Seed : PrimarySpell.ShadowBolt;
        newRotation.preset = RotationPreset.Manual;
        newRotation.corruption = false;
        player.setRotation(eventID, newRotation);
    },
};
export const SecondaryDotImmolate = {
    id: ActionId.fromSpellId(47811),
    states: 2,
    extraCssClasses: [
        'Immolate-picker',
    ],
    changedEvent: (player) => player.rotationChangeEmitter,
    getValue: (player) => player.getRotation().secondaryDot == SecondaryDot.Immolate,
    setValue: (eventID, player, newValue) => {
        const newRotation = player.getRotation();
        newRotation.secondaryDot = newValue ? SecondaryDot.Immolate : SecondaryDot.NoSecondaryDot;
        newRotation.preset = RotationPreset.Manual;
        player.setRotation(eventID, newRotation);
    },
};
export const SecondaryDotUnstableAffliction = {
    id: ActionId.fromSpellId(47843),
    states: 2,
    extraCssClasses: [
        'UnstableAffliction-picker',
    ],
    changedEvent: (player) => player.changeEmitter,
    getValue: (player) => player.getRotation().secondaryDot == SecondaryDot.UnstableAffliction,
    setValue: (eventID, player, newValue) => {
        const newRotation = player.getRotation();
        newRotation.secondaryDot = newValue ? SecondaryDot.UnstableAffliction : SecondaryDot.NoSecondaryDot;
        newRotation.preset = RotationPreset.Manual;
        player.setRotation(eventID, newRotation);
    },
    showWhen: (player) => player.getTalents().unstableAffliction,
};
export const SpecSpellChaosBolt = {
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
    showWhen: (player) => player.getTalents().chaosBolt,
};
export const SpecSpellHaunt = {
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
            getModObject: (simUI) => simUI.player,
            config: {
                extraCssClasses: [
                    'rotation-type-enum-picker',
                ],
                label: 'Spec',
                labelTooltip: 'Switches between spec rotation settings. Will also update talents to defaults for the selected spec.',
                values: [
                    {
                        name: 'Affliction', value: RotationType.Affliction,
                    },
                    {
                        name: 'Demonology', value: RotationType.Demonology,
                    },
                    {
                        name: 'Destruction', value: RotationType.Destruction,
                    },
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
        },
        {
            type: 'enum',
            getModObject: (simUI) => simUI.player,
            config: {
                extraCssClasses: [
                    'rotation-preset-enum-picker',
                ],
                label: 'Rotation Preset',
                labelTooltip: 'Automatic will select the spells for you if you have the last talent in a one of the trees. Otherwise you will have to manually select the spells you want to cast.',
                values: [
                    {
                        name: "Manual", value: RotationPreset.Manual,
                    },
                    {
                        name: "Automatic", value: RotationPreset.Automatic,
                    },
                ],
                changedEvent: (player) => player.rotationChangeEmitter,
                getValue: (player) => player.getRotation().preset,
                setValue: (eventID, player, newValue) => {
                    const newRotation = player.getRotation();
                    newRotation.preset = newValue;
                    player.setRotation(eventID, newRotation);
                },
            },
        },
        {
            type: 'enum',
            getModObject: (simUI) => simUI.player,
            config: {
                extraCssClasses: [
                    'curse-enum-picker',
                ],
                label: 'Curse',
                labelTooltip: 'Manual curse selection. Choice ignored for an Automatic Rotation.',
                values: [
                    {
                        name: "None", value: Curse.NoCurse,
                    },
                    {
                        name: "Elements", value: Curse.Elements,
                    },
                    {
                        name: "Weakness", value: Curse.Weakness,
                    },
                    {
                        name: "Doom", value: Curse.Doom,
                    },
                    {
                        name: "Agony", value: Curse.Agony,
                    },
                    {
                        name: "Tongues", value: Curse.Tongues,
                    }
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
        },
        {
            type: 'boolean',
            getModObject: (simUI) => simUI.player,
            config: {
                extraCssClasses: [
                    'detonate-seed-picker',
                ],
                label: 'Detonate Seed on Cast',
                labelTooltip: 'Simulates raid doing damage to targets such that seed detonates immediately on cast.',
                changedEvent: (player) => player.rotationChangeEmitter,
                getValue: (player) => player.getRotation().detonateSeed,
                setValue: (eventID, player, newValue) => {
                    const newRotation = player.getRotation();
                    newRotation.detonateSeed = newValue;
                    player.setRotation(eventID, newRotation);
                },
                showWhen: (player) => player.getRotation().primarySpell == PrimarySpell.Seed,
            },
        },
    ],
};

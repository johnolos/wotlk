import { Warlock_Rotation_PrimarySpell as PrimarySpell, Warlock_Rotation_Curse as Curse, Warlock_Options_Armor as Armor, Warlock_Options_Summon as Summon } from '/wotlk/core/proto/warlock.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
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
};
export const WarlockRotationConfig = {
    inputs: [
        {
            type: 'enum',
            getModObject: (simUI) => simUI.player,
            config: {
                extraCssClasses: [
                    'primary-spell-enum-picker',
                ],
                label: 'Primary Spell',
                labelTooltip: 'Choose primary spell to cast',
                values: [
                    {
                        name: 'Shadowbolt', value: PrimarySpell.Shadowbolt,
                    },
                    {
                        name: 'Incinerate', value: PrimarySpell.Incinerate,
                    },
                    {
                        name: 'Seed of Corruption', value: PrimarySpell.Seed,
                    },
                ],
                changedEvent: (player) => player.rotationChangeEmitter,
                getValue: (player) => player.getRotation().primarySpell,
                setValue: (eventID, player, newValue) => {
                    const newRotation = player.getRotation();
                    newRotation.primarySpell = newValue;
                    player.setRotation(eventID, newRotation);
                },
            },
        },
        {
            type: 'boolean',
            getModObject: (simUI) => simUI.player,
            config: {
                extraCssClasses: [
                    'immolate-picker',
                ],
                label: 'Use Immolate',
                labelTooltip: 'Use Immolate as the next cast after the dot expires.',
                changedEvent: (player) => player.rotationChangeEmitter,
                getValue: (player) => player.getRotation().immolate,
                setValue: (eventID, player, newValue) => {
                    const newRotation = player.getRotation();
                    newRotation.immolate = newValue;
                    player.setRotation(eventID, newRotation);
                },
            },
        },
        {
            type: 'boolean',
            getModObject: (simUI) => simUI.player,
            config: {
                extraCssClasses: [
                    'corruption-picker',
                ],
                label: 'Use Corruption',
                labelTooltip: 'Use Corruption as the next cast after the dot expires.',
                changedEvent: (player) => player.rotationChangeEmitter,
                getValue: (player) => player.getRotation().corruption,
                setValue: (eventID, player, newValue) => {
                    const newRotation = player.getRotation();
                    newRotation.corruption = newValue;
                    player.setRotation(eventID, newRotation);
                },
            },
        },
        {
            type: 'boolean',
            getModObject: (simUI) => simUI.player,
            config: {
                extraCssClasses: [
                    'unstableaffliction-picker',
                ],
                label: 'Use Unstable Affliction',
                labelTooltip: 'Use Unstable Affliction as the next cast after the dot expires.',
                changedEvent: (player) => player.talentsChangeEmitter,
                getValue: (player) => player.getRotation().unstableAffliction,
                setValue: (eventID, player, newValue) => {
                    const newRotation = player.getRotation();
                    newRotation.unstableAffliction = newValue;
                    player.setRotation(eventID, newRotation);
                },
                enableWhen: (player) => player.getTalents().unstableAffliction,
            },
        },
        {
            type: 'boolean',
            getModObject: (simUI) => simUI.player,
            config: {
                extraCssClasses: [
                    'haunt-picker',
                ],
                label: 'Use Haunt',
                labelTooltip: 'Use Haunt as the next cast after the buff expires.',
                changedEvent: (player) => player.talentsChangeEmitter,
                getValue: (player) => player.getRotation().haunt,
                setValue: (eventID, player, newValue) => {
                    const newRotation = player.getRotation();
                    newRotation.haunt = newValue;
                    player.setRotation(eventID, newRotation);
                },
                enableWhen: (player) => player.getTalents().haunt,
            },
        },
        {
            type: 'boolean',
            getModObject: (simUI) => simUI.player,
            config: {
                extraCssClasses: [
                    'ChaosBolt-picker',
                ],
                label: 'Use Chaos Bolt',
                labelTooltip: 'Use Chaos Bolt as the next cast when CD is up.',
                changedEvent: (player) => player.talentsChangeEmitter,
                getValue: (player) => player.getRotation().chaosBolt,
                setValue: (eventID, player, newValue) => {
                    const newRotation = player.getRotation();
                    newRotation.chaosBolt = newValue;
                    player.setRotation(eventID, newRotation);
                },
                enableWhen: (player) => player.getTalents().chaosBolt,
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
                enableWhen: (player) => player.getRotation().primarySpell == PrimarySpell.Seed,
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
                labelTooltip: 'No tooltip yet',
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
                    player.setRotation(eventID, newRotation);
                },
            },
        },
    ],
};

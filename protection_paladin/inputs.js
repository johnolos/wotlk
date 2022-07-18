import { PaladinAura as PaladinAura, PaladinSeal, PaladinJudgement as PaladinJudgement, } from '/wotlk/core/proto/paladin.js';
// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const ProtectionPaladinRotationConfig = {
    inputs: [
        {
            type: 'boolean', cssClass: 'prioritize-holy-shield-picker',
            getModObject: (simUI) => simUI.player,
            config: {
                label: 'Prio Holy Shield',
                labelTooltip: 'Uses Holy Shield as the highest priority spell. This is usually done when tanking a boss that can crush.',
                changedEvent: (player) => player.rotationChangeEmitter,
                getValue: (player) => player.getRotation().prioritizeHolyShield,
                setValue: (eventID, player, newValue) => {
                    const newRotation = player.getRotation();
                    newRotation.prioritizeHolyShield = newValue;
                    player.setRotation(eventID, newRotation);
                },
            },
        },
    ],
};
export const StartingSealSelection = {
    type: 'enum', cssClass: 'starting-seal-picker',
    getModObject: (simUI) => simUI.player,
    config: {
        label: 'Seal',
        values: [
            { name: 'Vengeance', value: PaladinSeal.Vengeance },
            { name: 'Command', value: PaladinSeal.Command },
        ],
        changedEvent: (player) => player.rotationChangeEmitter,
        getValue: (player) => player.getSpecOptions().seal,
        setValue: (eventID, player, newValue) => {
            const newOptions = player.getSpecOptions();
            newOptions.seal = newValue;
            player.setSpecOptions(eventID, newOptions);
        },
    },
};
export const JudgementSelection = {
    type: 'enum', cssClass: 'judgement-picker',
    getModObject: (simUI) => simUI.player,
    config: {
        label: 'Judgement',
        values: [
            { name: 'Wisdom', value: PaladinJudgement.JudgementOfWisdom },
            { name: 'Light', value: PaladinJudgement.JudgementOfLight },
        ],
        changedEvent: (player) => player.rotationChangeEmitter,
        getValue: (player) => player.getSpecOptions().judgement,
        setValue: (eventID, player, newValue) => {
            const newOptions = player.getSpecOptions();
            newOptions.judgement = newValue;
            player.setSpecOptions(eventID, newOptions);
        },
    },
};
export const AuraSelection = {
    type: 'enum', cssClass: 'aura-picker',
    getModObject: (simUI) => simUI.player,
    config: {
        label: 'Aura',
        values: [
            { name: 'None', value: PaladinAura.NoPaladinAura },
            { name: 'Devotion Aura', value: PaladinAura.DevotionAura },
            { name: 'Retribution Aura', value: PaladinAura.RetributionAura },
        ],
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => player.getSpecOptions().aura,
        setValue: (eventID, player, newValue) => {
            const newOptions = player.getSpecOptions();
            newOptions.aura = newValue;
            player.setSpecOptions(eventID, newOptions);
        },
    },
};
export const UseAvengingWrath = {
    type: 'boolean', cssClass: 'use-avenging-wrath-picker',
    getModObject: (simUI) => simUI.player,
    config: {
        label: 'Use Avenging Wrath',
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => player.getSpecOptions().useAvengingWrath,
        setValue: (eventID, player, newValue) => {
            const newOptions = player.getSpecOptions();
            newOptions.useAvengingWrath = newValue;
            player.setSpecOptions(eventID, newOptions);
        },
    },
};
export const DamgeTakenPerSecond = {
    type: 'number', cssClass: 'damage-taken-picker',
    getModObject: (simUI) => simUI.player,
    config: {
        label: 'Damage Taken Per Second',
        labelTooltip: "Damage taken per second across the encounter. Used to model mana regeneration from Spiritual Attunement. This value should NOT include damage taken from Seal of Blood / Judgement of Blood. Leave at 0 if you do not take damage during the encounter.",
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => player.getSpecOptions().damageTakenPerSecond,
        setValue: (eventID, player, newValue) => {
            const newOptions = player.getSpecOptions();
            newOptions.damageTakenPerSecond = newValue;
            player.setSpecOptions(eventID, newOptions);
        },
    },
};

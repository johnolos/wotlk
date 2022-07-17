import { PaladinAura as PaladinAura, RetributionPaladin_Rotation_ConsecrationRank as ConsecrationRank, RetributionPaladin_Options_Judgement as Judgement, } from '/wotlk/core/proto/paladin.js';
// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const RetributionPaladinRotationConfig = {
    inputs: [
        {
            type: 'enum', cssClass: 'consecration-rank-picker',
            getModObject: (simUI) => simUI.player,
            config: {
                label: 'Consecration Rank',
                labelTooltip: 'Use specified rank of Consecration during filler spell windows.',
                values: [
                    {
                        name: 'None', value: ConsecrationRank.None,
                    },
                    {
                        name: 'Rank 1', value: ConsecrationRank.Rank1,
                    },
                    {
                        name: 'Rank 4', value: ConsecrationRank.Rank4,
                    },
                    {
                        name: 'Rank 6', value: ConsecrationRank.Rank6,
                    },
                ],
                changedEvent: (player) => player.rotationChangeEmitter,
                getValue: (player) => player.getRotation().consecrationRank,
                setValue: (eventID, player, newValue) => {
                    const newRotation = player.getRotation();
                    newRotation.consecrationRank = newValue;
                    player.setRotation(eventID, newRotation);
                },
            },
        },
        {
            type: 'boolean', cssClass: 'exorcism-picker',
            getModObject: (simUI) => simUI.player,
            config: {
                label: 'Use Exorcism',
                labelTooltip: 'Use Exorcism during filler spell windows. Will only be used if the boss mob type is Undead or Demon.',
                changedEvent: (player) => player.rotationChangeEmitter,
                getValue: (player) => player.getRotation().useExorcism,
                setValue: (eventID, player, newValue) => {
                    const newRotation = player.getRotation();
                    newRotation.useExorcism = newValue;
                    player.setRotation(eventID, newRotation);
                },
            },
        }
    ],
};
export const AuraSelection = {
    type: 'enum', cssClass: 'aura-picker',
    getModObject: (simUI) => simUI.player,
    config: {
        label: 'Aura',
        values: [
            { name: 'None', value: PaladinAura.NoPaladinAura },
            { name: 'Sanctity Aura', value: PaladinAura.SanctityAura },
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
export const JudgementSelection = {
    type: 'enum', cssClass: 'judgement-picker',
    getModObject: (simUI) => simUI.player,
    config: {
        label: 'Judgement',
        labelTooltip: 'Judgement debuff you will use on the target during the encounter.',
        values: [
            {
                name: 'None', value: Judgement.None,
            },
            {
                name: 'Judgement of Wisdom', value: Judgement.Wisdom,
            },
            {
                name: 'Judgement of Light', value: Judgement.Light,
            },
        ],
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => player.getSpecOptions().judgement,
        setValue: (eventID, player, newValue) => {
            const newOptions = player.getSpecOptions();
            newOptions.judgement = newValue;
            player.setSpecOptions(eventID, newOptions);
        },
    },
};
/*** Leave this for now. We'll ignore HasteLeeway for initial release, but we might come back to it at some point  ***/
// export const HasteLeewayMS = {
// 	type: 'number' as const, cssClass: 'haste-leeway-picker',
// 	getModObject: (simUI: IndividualSimUI<any>) => simUI.player,
// 	config: {
// 		label: 'Haste Leeway (MS)',
// 		labelTooltip: "Arbitrary value used to account for haste procs preventing seal twists. Experiment with values between 100 - 200 miliseconds.\nDo not modify this value if you do not understand it's use.",
// 		changedEvent: (player: Player<Spec.SpecRetributionPaladin>) => player.specOptionsChangeEmitter,
// 		getValue: (player: Player<Spec.SpecRetributionPaladin>) => player.getSpecOptions().hasteLeewayMs,
// 		setValue: (eventID: EventID, player: Player<Spec.SpecRetributionPaladin>, newValue: number) => {
// 			const newOptions = player.getSpecOptions();
// 			newOptions.hasteLeewayMs = newValue;
// 			player.setSpecOptions(eventID, newOptions);
// 		},
// 	},
// }
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

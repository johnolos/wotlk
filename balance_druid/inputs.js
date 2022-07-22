import { BalanceDruid_Rotation_PrimarySpell as PrimarySpell } from '/wotlk/core/proto/druid.js';
import { RaidTarget } from '/wotlk/core/proto/common.js';
import { NO_TARGET } from '/wotlk/core/proto_utils/utils.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const SelfInnervate = InputHelpers.makeSpecOptionsBooleanIconInput({
    fieldName: 'innervateTarget',
    id: ActionId.fromSpellId(29166),
    extraCssClasses: [
        'within-raid-sim-hide',
    ],
    getValue: (player) => player.getSpecOptions().innervateTarget?.targetIndex != NO_TARGET,
    setValue: (eventID, player, newValue) => {
        const newOptions = player.getSpecOptions();
        newOptions.innervateTarget = RaidTarget.create({
            targetIndex: newValue ? 0 : NO_TARGET,
        });
        player.setSpecOptions(eventID, newOptions);
    },
});
export const BalanceDruidRotationConfig = {
    inputs: [
        InputHelpers.makeRotationEnumInput({
            fieldName: 'primarySpell',
            label: 'Primary Spell',
            labelTooltip: 'If set to \'Adaptive\', will dynamically adjust rotation based on available mana.',
            values: [
                { name: 'Adaptive', value: PrimarySpell.Adaptive },
                { name: 'Starfire', value: PrimarySpell.Starfire },
                { name: 'Starfire R6', value: PrimarySpell.Starfire6 },
                { name: 'Wrath', value: PrimarySpell.Wrath },
            ],
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'moonfire',
            label: 'Use Moonfire',
            labelTooltip: 'Use Moonfire as the next cast after the dot expires.',
            enableWhen: (player) => player.getRotation().primarySpell != PrimarySpell.Adaptive,
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'faerieFire',
            label: 'Use Faerie Fire',
            labelTooltip: 'Keep Faerie Fire active on the primary target.',
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'insectSwarm',
            label: 'Use Insect Swarm',
            labelTooltip: 'Keep Insect Swarm active on the primary target.',
            enableWhen: (player) => player.getTalents().insectSwarm,
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'hurricane',
            label: 'Use Hurricane',
            labelTooltip: 'Casts Hurricane on cooldown.',
        }),
        InputHelpers.makeSpecOptionsBooleanInput({
            fieldName: 'battleRes',
            label: 'Use Battle Res',
            labelTooltip: 'Cast Battle Res on an ally sometime during the encounter.',
        }),
    ],
};

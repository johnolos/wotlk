import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
import { Rogue_Rotation_Builder as Builder, } from '/wotlk/core/proto/rogue.js';
// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const RogueRotationConfig = {
    inputs: [
        InputHelpers.makeRotationEnumInput({
            fieldName: 'builder',
            label: 'Builder',
            values: [
                {
                    name: 'Auto', value: Builder.Auto,
                    tooltip: 'Automatically selects a builder based on weapons/talents.',
                },
                { name: 'Sinister Strike', value: Builder.SinisterStrike },
                { name: 'Mutilate', value: Builder.Mutilate },
            ],
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'maintainExposeArmor',
            label: 'Maintain EA',
            labelTooltip: 'Keeps Expose Armor active on the primary target.',
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'useRupture',
            label: 'Use Rupture',
            labelTooltip: 'Uses Rupture over Eviscerate when appropriate.',
        }),
        InputHelpers.makeRotationBooleanInput({
            fieldName: 'useShiv',
            label: 'Use Shiv',
            labelTooltip: 'Uses Shiv in place of the selected builder if Deadly Poison is about to expire. Requires Deadly Poison in the off-hand.',
        }),
        InputHelpers.makeRotationNumberInput({
            fieldName: 'minComboPointsForDamageFinisher',
            label: 'Min CPs for Damage Finisher',
            labelTooltip: 'Will not use Eviscerate or Rupture unless the Rogue has at least this many Combo Points.',
        }),
    ],
};

import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export declare const RetributionPaladinRotationConfig: {
    inputs: never[];
};
export declare const AuraSelection: InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecRetributionPaladin>>;
export declare const StartingSealSelection: InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecRetributionPaladin>>;
export declare const DivinePleaSelection: InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecRetributionPaladin>>;
export declare const JudgementSelection: InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecRetributionPaladin>>;
export declare const DamageTakenPerSecond: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecRetributionPaladin>>;

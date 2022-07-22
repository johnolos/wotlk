import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export declare const StartingRunicPower: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecDeathKnight>>;
export declare const PetUptime: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecDeathKnight>>;
export declare const PrecastGhoulFrenzy: InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecDeathKnight>>;
export declare const PrecastHornOfWinter: InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecDeathKnight>>;
export declare const RefreshHornOfWinter: InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecDeathKnight>>;
export declare const WIPFrostRotation: InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecDeathKnight>>;
export declare const DiseaseRefreshDuration: InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecDeathKnight>>;
export declare const UseDeathAndDecay: InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecDeathKnight>>;
export declare const UseArmyOfTheDead: InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecDeathKnight>>;
export declare const UnholyPresenceOpener: InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecDeathKnight>>;
export declare const DeathKnightRotationConfig: {
    inputs: (InputHelpers.TypedNumberPickerConfig<Player<Spec.SpecDeathKnight>> | InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecDeathKnight>> | InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecDeathKnight>>)[];
};

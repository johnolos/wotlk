import { Warlock_Rotation_PrimarySpell as PrimarySpell, Warlock_Rotation_SecondaryDot as SecondaryDot, Warlock_Options_WeaponImbue as WarlockWeaponImbue, Warlock_Options_Armor as Armor, Warlock_Options_Summon as Summon } from '/wotlk/core/proto/warlock.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import { Player } from '/wotlk/core/player.js';
import { EventID, TypedEvent } from '/wotlk/core/typed_event.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export declare const ArmorInput: InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecWarlock>, Armor>;
export declare const WeaponImbue: InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecWarlock>, WarlockWeaponImbue>;
export declare const PetType: InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecWarlock>, Summon>;
export declare const PrimarySpellInput: InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecWarlock>, PrimarySpell>;
export declare const SecondaryDotInput: InputHelpers.TypedIconEnumPickerConfig<Player<Spec.SpecWarlock>, SecondaryDot>;
export declare const SpecSpellChaosBolt: {
    type: "icon";
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
};
export declare const SpecSpellHaunt: {
    type: "icon";
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
    showWhen: (player: Player<Spec.SpecWarlock>) => boolean;
};
export declare const CorruptionSpell: {
    type: "icon";
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
};
export declare const WarlockRotationConfig: {
    inputs: (InputHelpers.TypedEnumPickerConfig<Player<Spec.SpecWarlock>> | InputHelpers.TypedBooleanPickerConfig<Player<Spec.SpecWarlock>>)[];
};

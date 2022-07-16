import { Warlock_Rotation_Preset as RotationPreset, Warlock_Rotation_Curse as Curse } from '/wotlk/core/proto/warlock.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import { Player } from '/wotlk/core/player.js';
import { EventID, TypedEvent } from '/wotlk/core/typed_event.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
export declare const FelArmor: {
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
};
export declare const DemonArmor: {
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
};
export declare const SummonImp: {
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
};
export declare const SummonSuccubus: {
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
};
export declare const SummonFelhunter: {
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
};
export declare const SummonFelguard: {
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
};
export declare const PrimarySpellShadowbolt: {
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
};
export declare const PrimarySpellIncinerate: {
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
};
export declare const PrimarySpellSeed: {
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
};
export declare const SecondaryDotImmolate: {
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
};
export declare const SecondaryDotUnstableAffliction: {
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
    enableWhen: (player: Player<Spec.SpecWarlock>) => boolean;
};
export declare const SpecSpellChaosBolt: {
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
    enableWhen: (player: Player<Spec.SpecWarlock>) => boolean;
};
export declare const SpecSpellHaunt: {
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
    enableWhen: (player: Player<Spec.SpecWarlock>) => boolean;
};
export declare const CorruptionSpell: {
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
    enableWhen: (player: Player<Spec.SpecWarlock>) => boolean;
};
export declare const WarlockRotationConfig: {
    inputs: ({
        type: "enum";
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            extraCssClasses: string[];
            label: string;
            labelTooltip: string;
            values: {
                name: string;
                value: RotationPreset;
            }[];
            changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
            getValue: (player: Player<Spec.SpecWarlock>) => RotationPreset;
            setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: number) => void;
            enableWhen?: undefined;
        };
    } | {
        type: "enum";
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            extraCssClasses: string[];
            label: string;
            labelTooltip: string;
            values: {
                name: string;
                value: Curse;
            }[];
            changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
            getValue: (player: Player<Spec.SpecWarlock>) => Curse;
            setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: number) => void;
            enableWhen: (player: Player<Spec.SpecWarlock>) => boolean;
        };
    } | {
        type: "boolean";
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            extraCssClasses: string[];
            label: string;
            labelTooltip: string;
            changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
            getValue: (player: Player<Spec.SpecWarlock>) => boolean;
            setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: boolean) => void;
            enableWhen: (player: Player<Spec.SpecWarlock>) => boolean;
            values?: undefined;
        };
    })[];
};

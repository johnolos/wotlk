import { Warlock_Rotation_PrimarySpell as PrimarySpell, Warlock_Rotation_Curse as Curse, Warlock_Options_Armor as Armor, Warlock_Options_Summon as Summon } from '/wotlk/core/proto/warlock.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import { Player } from '/wotlk/core/player.js';
import { EventID, TypedEvent } from '/wotlk/core/typed_event.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
export declare const WarlockArmor: {
    extraCssClasses: string[];
    numColumns: number;
    values: {
        actionId: ActionId;
        value: Armor;
    }[];
    equals: (a: Armor, b: Armor) => boolean;
    zeroValue: Armor;
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => Armor;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: number) => void;
};
export declare const DemonSummon: {
    extraCssClasses: string[];
    numColumns: number;
    values: ({
        color: string;
        value: Summon;
        actionId?: undefined;
    } | {
        actionId: ActionId;
        value: Summon;
        color?: undefined;
    })[];
    equals: (a: Summon, b: Summon) => boolean;
    zeroValue: Summon;
    changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecWarlock>) => Summon;
    setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: number) => void;
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
                value: PrimarySpell;
            }[];
            changedEvent: (player: Player<Spec.SpecWarlock>) => TypedEvent<void>;
            getValue: (player: Player<Spec.SpecWarlock>) => PrimarySpell;
            setValue: (eventID: EventID, player: Player<Spec.SpecWarlock>, newValue: number) => void;
            enableWhen?: undefined;
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
            values?: undefined;
            enableWhen?: undefined;
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
            enableWhen?: undefined;
        };
    })[];
};

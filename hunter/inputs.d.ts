import { Spec } from '/wotlk/core/proto/common.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import { Player } from '/wotlk/core/player.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
import { EventID, TypedEvent } from '/wotlk/core/typed_event.js';
import { Hunter_Rotation_StingType as StingType, Hunter_Rotation_WeaveType as WeaveType, Hunter_Options_Ammo as Ammo } from '/wotlk/core/proto/hunter.js';
export declare const WeaponAmmo: {
    extraCssClasses: string[];
    numColumns: number;
    values: ({
        color: string;
        value: Ammo;
        actionId?: undefined;
    } | {
        actionId: ActionId;
        value: Ammo;
        color?: undefined;
    })[];
    equals: (a: Ammo, b: Ammo) => boolean;
    zeroValue: Ammo;
    changedEvent: (player: Player<Spec.SpecHunter>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecHunter>) => Ammo;
    setValue: (eventID: EventID, player: Player<Spec.SpecHunter>, newValue: number) => void;
};
export declare const LatencyMs: {
    type: "number";
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        extraCssClasses: string[];
        label: string;
        labelTooltip: string;
        changedEvent: (player: Player<Spec.SpecHunter>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecHunter>) => number;
        setValue: (eventID: EventID, player: Player<Spec.SpecHunter>, newValue: number) => void;
    };
};
export declare const PetTypeInput: {
    type: "enum";
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: import("/wotlk/core/components/enum_picker.js").EnumPickerConfig<Player<Spec.SpecHunter>>;
};
export declare const PetUptime: {
    type: "number";
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        extraCssClasses: string[];
        label: string;
        labelTooltip: string;
        changedEvent: (player: Player<Spec.SpecHunter>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecHunter>) => number;
        setValue: (eventID: EventID, player: Player<Spec.SpecHunter>, newValue: number) => void;
    };
};
export declare const PetSingleAbility: {
    type: "boolean";
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        extraCssClasses: string[];
        label: string;
        labelTooltip: string;
        changedEvent: (player: Player<Spec.SpecHunter>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecHunter>) => boolean;
        setValue: (eventID: EventID, player: Player<Spec.SpecHunter>, newValue: boolean) => void;
    };
};
export declare const HunterRotationConfig: {
    inputs: ({
        type: "boolean";
        cssClass: string;
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            label: string;
            labelTooltip: string;
            changedEvent: (player: Player<Spec.SpecHunter>) => TypedEvent<void>;
            getValue: (player: Player<Spec.SpecHunter>) => boolean;
            setValue: (eventID: EventID, player: Player<Spec.SpecHunter>, newValue: boolean) => void;
            values?: undefined;
            showWhen?: undefined;
        };
    } | {
        type: "enum";
        cssClass: string;
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            label: string;
            labelTooltip: string;
            values: {
                name: string;
                value: StingType;
            }[];
            changedEvent: (player: Player<Spec.SpecHunter>) => TypedEvent<void>;
            getValue: (player: Player<Spec.SpecHunter>) => StingType;
            setValue: (eventID: EventID, player: Player<Spec.SpecHunter>, newValue: number) => void;
            showWhen?: undefined;
        };
    } | {
        type: "number";
        cssClass: string;
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            label: string;
            labelTooltip: string;
            changedEvent: (player: Player<Spec.SpecHunter>) => TypedEvent<void>;
            getValue: (player: Player<Spec.SpecHunter>) => number;
            setValue: (eventID: EventID, player: Player<Spec.SpecHunter>, newValue: number) => void;
            values?: undefined;
            showWhen?: undefined;
        };
    } | {
        type: "enum";
        cssClass: string;
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            label: string;
            labelTooltip: string;
            values: {
                name: string;
                value: WeaveType;
            }[];
            changedEvent: (player: Player<Spec.SpecHunter>) => TypedEvent<void>;
            getValue: (player: Player<Spec.SpecHunter>) => WeaveType;
            setValue: (eventID: EventID, player: Player<Spec.SpecHunter>, newValue: number) => void;
            showWhen?: undefined;
        };
    } | {
        type: "number";
        cssClass: string;
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            label: string;
            labelTooltip: string;
            changedEvent: (player: Player<Spec.SpecHunter>) => TypedEvent<void>;
            getValue: (player: Player<Spec.SpecHunter>) => number;
            setValue: (eventID: EventID, player: Player<Spec.SpecHunter>, newValue: number) => void;
            showWhen: (player: Player<Spec.SpecHunter>) => boolean;
            values?: undefined;
        };
    })[];
};

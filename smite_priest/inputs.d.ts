import { SmitePriest_Rotation_RotationType as RotationType } from '/wotlk/core/proto/priest.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import { Player } from '/wotlk/core/player.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
import { EventID, TypedEvent } from '/wotlk/core/typed_event.js';
export declare const SelfPowerInfusion: {
    id: ActionId;
    states: number;
    extraCssClasses: string[];
    changedEvent: (player: Player<Spec.SpecSmitePriest>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecSmitePriest>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecSmitePriest>, newValue: boolean) => void;
};
export declare const SmitePriestRotationConfig: {
    inputs: ({
        type: "enum";
        cssClass: string;
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            label: string;
            labelTooltip: string;
            values: {
                name: string;
                value: RotationType;
            }[];
            changedEvent: (player: Player<Spec.SpecSmitePriest>) => TypedEvent<void>;
            getValue: (player: Player<Spec.SpecSmitePriest>) => RotationType;
            setValue: (eventID: EventID, player: Player<Spec.SpecSmitePriest>, newValue: number) => void;
        };
    } | {
        type: "boolean";
        cssClass: string;
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            label: string;
            labelTooltip: string;
            changedEvent: (player: Player<Spec.SpecSmitePriest>) => TypedEvent<void>;
            getValue: (player: Player<Spec.SpecSmitePriest>) => boolean;
            setValue: (eventID: EventID, player: Player<Spec.SpecSmitePriest>, newValue: boolean) => void;
            values?: undefined;
        };
    })[];
};

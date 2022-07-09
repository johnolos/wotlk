import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
import { Player } from '/wotlk/core/player.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { ShadowPriest_Rotation_RotationType as RotationType } from '/wotlk/core/proto/priest.js';
import { EventID } from '/wotlk/core/typed_event.js';
export declare const ShadowPriestRotationConfig: {
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
            changedEvent: (player: Player<Spec.SpecShadowPriest>) => import("/wotlk/core/typed_event.js").TypedEvent<void>;
            getValue: (player: Player<Spec.SpecShadowPriest>) => RotationType;
            setValue: (eventID: EventID, player: Player<Spec.SpecShadowPriest>, newValue: number) => void;
        };
    } | {
        type: "boolean";
        cssClass: string;
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            label: string;
            labelTooltip: string;
            changedEvent: (player: Player<Spec.SpecShadowPriest>) => import("/wotlk/core/typed_event.js").TypedEvent<void>;
            getValue: (player: Player<Spec.SpecShadowPriest>) => boolean;
            setValue: (eventID: EventID, player: Player<Spec.SpecShadowPriest>, newValue: boolean) => void;
            values?: undefined;
        };
    } | {
        type: "number";
        cssClass: string;
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            label: string;
            labelTooltip: string;
            changedEvent: (player: Player<Spec.SpecShadowPriest>) => import("/wotlk/core/typed_event.js").TypedEvent<void>;
            getValue: (player: Player<Spec.SpecShadowPriest>) => number;
            setValue: (eventID: EventID, player: Player<Spec.SpecShadowPriest>, newValue: number) => void;
            values?: undefined;
        };
    })[];
};

import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { EventID } from '/wotlk/core/typed_event.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
import { PaladinAura as PaladinAura, PaladinJudgement as PaladinJudgement } from '/wotlk/core/proto/paladin.js';
export declare const ProtectionPaladinRotationConfig: {
    inputs: ({
        type: "enum";
        cssClass: string;
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            label: string;
            labelTooltip: string;
            values: {
                name: string;
                value: number;
            }[];
            changedEvent: (player: Player<Spec.SpecProtectionPaladin>) => import("/wotlk/core/typed_event.js").TypedEvent<void>;
            getValue: (player: Player<Spec.SpecProtectionPaladin>) => number;
            setValue: (eventID: EventID, player: Player<Spec.SpecProtectionPaladin>, newValue: number) => void;
        };
    } | {
        type: "boolean";
        cssClass: string;
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            label: string;
            labelTooltip: string;
            changedEvent: (player: Player<Spec.SpecProtectionPaladin>) => import("/wotlk/core/typed_event.js").TypedEvent<void>;
            getValue: (player: Player<Spec.SpecProtectionPaladin>) => boolean;
            setValue: (eventID: EventID, player: Player<Spec.SpecProtectionPaladin>, newValue: boolean) => void;
            values?: undefined;
        };
    } | {
        type: "enum";
        cssClass: string;
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            label: string;
            values: {
                name: string;
                value: PaladinJudgement;
            }[];
            changedEvent: (player: Player<Spec.SpecProtectionPaladin>) => import("/wotlk/core/typed_event.js").TypedEvent<void>;
            getValue: (player: Player<Spec.SpecProtectionPaladin>) => PaladinJudgement;
            setValue: (eventID: EventID, player: Player<Spec.SpecProtectionPaladin>, newValue: number) => void;
            labelTooltip?: undefined;
        };
    })[];
};
export declare const AuraSelection: {
    type: "enum";
    cssClass: string;
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        label: string;
        values: {
            name: string;
            value: PaladinAura;
        }[];
        changedEvent: (player: Player<Spec.SpecProtectionPaladin>) => import("/wotlk/core/typed_event.js").TypedEvent<void>;
        getValue: (player: Player<Spec.SpecProtectionPaladin>) => PaladinAura;
        setValue: (eventID: EventID, player: Player<Spec.SpecProtectionPaladin>, newValue: number) => void;
    };
};
export declare const UseAvengingWrath: {
    type: "boolean";
    cssClass: string;
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        label: string;
        changedEvent: (player: Player<Spec.SpecProtectionPaladin>) => import("/wotlk/core/typed_event.js").TypedEvent<void>;
        getValue: (player: Player<Spec.SpecProtectionPaladin>) => boolean;
        setValue: (eventID: EventID, player: Player<Spec.SpecProtectionPaladin>, newValue: boolean) => void;
    };
};

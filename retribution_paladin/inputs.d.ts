import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { EventID } from '/wotlk/core/typed_event.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
import { PaladinAura as PaladinAura, PaladinJudgement as PaladinJudgement, PaladinSeal } from '/wotlk/core/proto/paladin.js';
export declare const RetributionPaladinRotationConfig: {
    inputs: never[];
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
        changedEvent: (player: Player<Spec.SpecRetributionPaladin>) => import("/wotlk/core/typed_event.js").TypedEvent<void>;
        getValue: (player: Player<Spec.SpecRetributionPaladin>) => PaladinAura;
        setValue: (eventID: EventID, player: Player<Spec.SpecRetributionPaladin>, newValue: number) => void;
    };
};
export declare const StartingSealSelection: {
    type: "enum";
    cssClass: string;
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        label: string;
        labelTooltip: string;
        values: {
            name: string;
            value: PaladinSeal;
        }[];
        changedEvent: (player: Player<Spec.SpecRetributionPaladin>) => import("/wotlk/core/typed_event.js").TypedEvent<void>;
        getValue: (player: Player<Spec.SpecRetributionPaladin>) => PaladinSeal;
        setValue: (eventID: EventID, player: Player<Spec.SpecRetributionPaladin>, newValue: number) => void;
    };
};
export declare const DivinePleaSelection: {
    type: "boolean";
    cssClass: string;
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        label: string;
        labelTooltip: string;
        values: {
            name: string;
            value: boolean;
        }[];
        changedEvent: (player: Player<Spec.SpecRetributionPaladin>) => import("/wotlk/core/typed_event.js").TypedEvent<void>;
        getValue: (player: Player<Spec.SpecRetributionPaladin>) => boolean;
        setValue: (eventID: EventID, player: Player<Spec.SpecRetributionPaladin>, newValue: boolean) => void;
    };
};
export declare const JudgementSelection: {
    type: "enum";
    cssClass: string;
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        label: string;
        labelTooltip: string;
        values: {
            name: string;
            value: PaladinJudgement;
        }[];
        changedEvent: (player: Player<Spec.SpecRetributionPaladin>) => import("/wotlk/core/typed_event.js").TypedEvent<void>;
        getValue: (player: Player<Spec.SpecRetributionPaladin>) => PaladinJudgement;
        setValue: (eventID: EventID, player: Player<Spec.SpecRetributionPaladin>, newValue: number) => void;
    };
};
export declare const DamgeTakenPerSecond: {
    type: "number";
    cssClass: string;
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        label: string;
        labelTooltip: string;
        changedEvent: (player: Player<Spec.SpecRetributionPaladin>) => import("/wotlk/core/typed_event.js").TypedEvent<void>;
        getValue: (player: Player<Spec.SpecRetributionPaladin>) => number;
        setValue: (eventID: EventID, player: Player<Spec.SpecRetributionPaladin>, newValue: number) => void;
    };
};

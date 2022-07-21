import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { EventID, TypedEvent } from '/wotlk/core/typed_event.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
import { DeathKnight_Rotation_ArmyOfTheDead as ArmyOfTheDead } from '/wotlk/core/proto/deathknight.js';
export declare const StartingRunicPower: {
    type: "number";
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        extraCssClasses: string[];
        label: string;
        labelTooltip: string;
        changedEvent: (player: Player<Spec.SpecDeathKnight>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecDeathKnight>) => number;
        setValue: (eventID: EventID, player: Player<Spec.SpecDeathKnight>, newValue: number) => void;
    };
};
export declare const PetUptime: {
    type: "number";
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        extraCssClasses: string[];
        label: string;
        labelTooltip: string;
        changedEvent: (player: Player<Spec.SpecDeathKnight>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecDeathKnight>) => number;
        setValue: (eventID: EventID, player: Player<Spec.SpecDeathKnight>, newValue: number) => void;
    };
};
export declare const PrecastGhoulFrenzy: {
    type: "boolean";
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        extraCssClasses: string[];
        label: string;
        labelTooltip: string;
        changedEvent: (player: Player<Spec.SpecDeathKnight>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecDeathKnight>) => boolean;
        setValue: (eventID: EventID, player: Player<Spec.SpecDeathKnight>, newValue: boolean) => void;
    };
};
export declare const PrecastHornOfWinter: {
    type: "boolean";
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        extraCssClasses: string[];
        label: string;
        labelTooltip: string;
        changedEvent: (player: Player<Spec.SpecDeathKnight>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecDeathKnight>) => boolean;
        setValue: (eventID: EventID, player: Player<Spec.SpecDeathKnight>, newValue: boolean) => void;
    };
};
export declare const RefreshHornOfWinter: {
    type: "boolean";
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        extraCssClasses: string[];
        label: string;
        labelTooltip: string;
        changedEvent: (player: Player<Spec.SpecDeathKnight>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecDeathKnight>) => boolean;
        setValue: (eventID: EventID, player: Player<Spec.SpecDeathKnight>, newValue: boolean) => void;
    };
};
export declare const WIPFrostRotation: {
    type: "boolean";
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        extraCssClasses: string[];
        label: string;
        labelTooltip: string;
        changedEvent: (player: Player<Spec.SpecDeathKnight>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecDeathKnight>) => boolean;
        setValue: (eventID: EventID, player: Player<Spec.SpecDeathKnight>, newValue: boolean) => void;
    };
};
export declare const DiseaseRefreshDuration: {
    type: "number";
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        extraCssClasses: string[];
        label: string;
        labelTooltip: string;
        changedEvent: (player: Player<Spec.SpecDeathKnight>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecDeathKnight>) => number;
        setValue: (eventID: EventID, player: Player<Spec.SpecDeathKnight>, newValue: number) => void;
    };
};
export declare const UseArmyOfTheDead: {
    type: "enum";
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        extraCssClasses: string[];
        label: string;
        labelTooltip: string;
        values: {
            name: string;
            value: ArmyOfTheDead;
        }[];
        changedEvent: (player: Player<Spec.SpecDeathKnight>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecDeathKnight>) => ArmyOfTheDead;
        setValue: (eventID: EventID, player: Player<Spec.SpecDeathKnight>, newValue: number) => void;
    };
};
export declare const UseDeathAndDecay: {
    type: "boolean";
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        extraCssClasses: string[];
        label: string;
        labelTooltip: string;
        changedEvent: (player: Player<Spec.SpecDeathKnight>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecDeathKnight>) => boolean;
        setValue: (eventID: EventID, player: Player<Spec.SpecDeathKnight>, newValue: boolean) => void;
    };
};
export declare const UnholyPresenceOpener: {
    type: "boolean";
    getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
    config: {
        extraCssClasses: string[];
        label: string;
        labelTooltip: string;
        changedEvent: (player: Player<Spec.SpecDeathKnight>) => TypedEvent<void>;
        getValue: (player: Player<Spec.SpecDeathKnight>) => boolean;
        setValue: (eventID: EventID, player: Player<Spec.SpecDeathKnight>, newValue: boolean) => void;
    };
};
export declare const DeathKnightRotationConfig: {
    inputs: ({
        type: "boolean";
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            extraCssClasses: string[];
            label: string;
            labelTooltip: string;
            changedEvent: (player: Player<Spec.SpecDeathKnight>) => TypedEvent<void>;
            getValue: (player: Player<Spec.SpecDeathKnight>) => boolean;
            setValue: (eventID: EventID, player: Player<Spec.SpecDeathKnight>, newValue: boolean) => void;
        };
    } | {
        type: "number";
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            extraCssClasses: string[];
            label: string;
            labelTooltip: string;
            changedEvent: (player: Player<Spec.SpecDeathKnight>) => TypedEvent<void>;
            getValue: (player: Player<Spec.SpecDeathKnight>) => number;
            setValue: (eventID: EventID, player: Player<Spec.SpecDeathKnight>, newValue: number) => void;
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
                value: ArmyOfTheDead;
            }[];
            changedEvent: (player: Player<Spec.SpecDeathKnight>) => TypedEvent<void>;
            getValue: (player: Player<Spec.SpecDeathKnight>) => ArmyOfTheDead;
            setValue: (eventID: EventID, player: Player<Spec.SpecDeathKnight>, newValue: number) => void;
        };
    })[];
};

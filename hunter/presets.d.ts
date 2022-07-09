import { Consumes } from '/wotlk/core/proto/common.js';
import { EquipmentSpec } from '/wotlk/core/proto/common.js';
import { Hunter_Rotation as HunterRotation, Hunter_Options as HunterOptions } from '/wotlk/core/proto/hunter.js';
export declare const BeastMasteryTalents: {
    name: string;
    data: string;
};
export declare const MarksmanTalents: {
    name: string;
    data: string;
};
export declare const SurvivalTalents: {
    name: string;
    data: string;
};
export declare const DefaultRotation: HunterRotation;
export declare const DefaultOptions: HunterOptions;
export declare const DefaultConsumes: Consumes;
export declare const P1_PRESET: {
    name: string;
    tooltip: string;
    gear: EquipmentSpec;
};

import { Consumes } from '/wotlk/core/proto/common.js';
import { EquipmentSpec } from '/wotlk/core/proto/common.js';
import { ElementalShaman_Rotation as ElementalShamanRotation, ElementalShaman_Options as ElementalShamanOptions } from '/wotlk/core/proto/shaman.js';
export declare const StandardTalents: {
    name: string;
    data: string;
};
export declare const RestoTalents: {
    name: string;
    data: string;
};
export declare const DefaultRotation: ElementalShamanRotation;
export declare const DefaultOptions: ElementalShamanOptions;
export declare const DefaultConsumes: Consumes;
export declare const PRE_RAID_PRESET: {
    name: string;
    tooltip: string;
    gear: EquipmentSpec;
};

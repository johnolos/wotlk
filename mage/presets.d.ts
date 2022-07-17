import { Consumes } from '/wotlk/core/proto/common.js';
import { EquipmentSpec } from '/wotlk/core/proto/common.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { SavedTalents } from '/wotlk/core/proto/ui.js';
import { Player } from '/wotlk/core/player.js';
import { Mage_Rotation as MageRotation, Mage_Options as MageOptions } from '/wotlk/core/proto/mage.js';
export declare const ArcaneTalents: {
    name: string;
    data: SavedTalents;
};
export declare const FireTalents: {
    name: string;
    data: SavedTalents;
};
export declare const FrostTalents: {
    name: string;
    data: SavedTalents;
};
export declare const DeepFrostTalents: {
    name: string;
    data: SavedTalents;
};
export declare const DefaultFireRotation: MageRotation;
export declare const DefaultFireOptions: MageOptions;
export declare const DefaultFireConsumes: Consumes;
export declare const DefaultFrostRotation: MageRotation;
export declare const DefaultFrostOptions: MageOptions;
export declare const DefaultFrostConsumes: Consumes;
export declare const DefaultArcaneRotation: MageRotation;
export declare const DefaultArcaneOptions: MageOptions;
export declare const DefaultArcaneConsumes: Consumes;
export declare const P1_ARCANE_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecMage>) => boolean;
    gear: EquipmentSpec;
};
export declare const P1_FIRE_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecMage>) => boolean;
    gear: EquipmentSpec;
};
export declare const P1_FROST_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecMage>) => boolean;
    gear: EquipmentSpec;
};
export declare const P2_ARCANE_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecMage>) => boolean;
    gear: EquipmentSpec;
};
export declare const P2_FIRE_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecMage>) => boolean;
    gear: EquipmentSpec;
};
export declare const P2_FROST_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecMage>) => boolean;
    gear: EquipmentSpec;
};
export declare const P3_ARCANE_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecMage>) => boolean;
    gear: EquipmentSpec;
};
export declare const P3_FIRE_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecMage>) => boolean;
    gear: EquipmentSpec;
};
export declare const P3_FROST_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecMage>) => boolean;
    gear: EquipmentSpec;
};
export declare const P4_ARCANE_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecMage>) => boolean;
    gear: EquipmentSpec;
};
export declare const P4_FIRE_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecMage>) => boolean;
    gear: EquipmentSpec;
};
export declare const P4_FROST_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecMage>) => boolean;
    gear: EquipmentSpec;
};
export declare const P5_ARCANE_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecMage>) => boolean;
    gear: EquipmentSpec;
};
export declare const P5_FIRE_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecMage>) => boolean;
    gear: EquipmentSpec;
};
export declare const P5_FROST_PRESET: {
    name: string;
    tooltip: string;
    enableWhen: (player: Player<Spec.SpecMage>) => boolean;
    gear: EquipmentSpec;
};

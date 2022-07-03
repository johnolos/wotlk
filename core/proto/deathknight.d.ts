import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message proto.DeathKnightTalents
 */
export interface DeathKnightTalents {
}
/**
 * @generated from protobuf message proto.DeathKnight
 */
export interface DeathKnight {
    /**
     * @generated from protobuf field: proto.DeathKnight.Rotation rotation = 1;
     */
    rotation?: DeathKnight_Rotation;
    /**
     * @generated from protobuf field: proto.DeathKnightTalents talents = 2;
     */
    talents?: DeathKnightTalents;
    /**
     * @generated from protobuf field: proto.DeathKnight.Options options = 3;
     */
    options?: DeathKnight_Options;
}
/**
 * @generated from protobuf message proto.DeathKnight.Rotation
 */
export interface DeathKnight_Rotation {
}
/**
 * @generated from protobuf message proto.DeathKnight.Options
 */
export interface DeathKnight_Options {
}
/**
 * @generated from protobuf enum proto.DeathKnightMajorGlyph
 */
export declare enum DeathKnightMajorGlyph {
    /**
     * @generated from protobuf enum value: DeathKnightMajorGlyphNone = 0;
     */
    DeathKnightMajorGlyphNone = 0
}
/**
 * @generated from protobuf enum proto.DeathKnightMinorGlyph
 */
export declare enum DeathKnightMinorGlyph {
    /**
     * @generated from protobuf enum value: DeathKnightMinorGlyphNone = 0;
     */
    DeathKnightMinorGlyphNone = 0
}
declare class DeathKnightTalents$Type extends MessageType<DeathKnightTalents> {
    constructor();
    create(value?: PartialMessage<DeathKnightTalents>): DeathKnightTalents;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeathKnightTalents): DeathKnightTalents;
    internalBinaryWrite(message: DeathKnightTalents, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.DeathKnightTalents
 */
export declare const DeathKnightTalents: DeathKnightTalents$Type;
declare class DeathKnight$Type extends MessageType<DeathKnight> {
    constructor();
    create(value?: PartialMessage<DeathKnight>): DeathKnight;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeathKnight): DeathKnight;
    internalBinaryWrite(message: DeathKnight, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.DeathKnight
 */
export declare const DeathKnight: DeathKnight$Type;
declare class DeathKnight_Rotation$Type extends MessageType<DeathKnight_Rotation> {
    constructor();
    create(value?: PartialMessage<DeathKnight_Rotation>): DeathKnight_Rotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeathKnight_Rotation): DeathKnight_Rotation;
    internalBinaryWrite(message: DeathKnight_Rotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.DeathKnight.Rotation
 */
export declare const DeathKnight_Rotation: DeathKnight_Rotation$Type;
declare class DeathKnight_Options$Type extends MessageType<DeathKnight_Options> {
    constructor();
    create(value?: PartialMessage<DeathKnight_Options>): DeathKnight_Options;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeathKnight_Options): DeathKnight_Options;
    internalBinaryWrite(message: DeathKnight_Options, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.DeathKnight.Options
 */
export declare const DeathKnight_Options: DeathKnight_Options$Type;
export {};

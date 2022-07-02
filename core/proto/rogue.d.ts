import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message proto.RogueTalents
 */
export interface RogueTalents {
    /**
     * Assassination
     *
     * @generated from protobuf field: int32 improved_eviscerate = 1;
     */
    improvedEviscerate: number;
    /**
     * @generated from protobuf field: int32 malice = 2;
     */
    malice: number;
    /**
     * @generated from protobuf field: int32 ruthlessness = 3;
     */
    ruthlessness: number;
    /**
     * @generated from protobuf field: int32 murder = 4;
     */
    murder: number;
    /**
     * @generated from protobuf field: int32 puncturing_wounds = 5;
     */
    puncturingWounds: number;
    /**
     * @generated from protobuf field: bool relentless_strikes = 6;
     */
    relentlessStrikes: boolean;
    /**
     * @generated from protobuf field: int32 improved_expose_armor = 7;
     */
    improvedExposeArmor: number;
    /**
     * @generated from protobuf field: int32 lethality = 8;
     */
    lethality: number;
    /**
     * @generated from protobuf field: int32 vile_poisons = 9;
     */
    vilePoisons: number;
    /**
     * @generated from protobuf field: int32 improved_poisons = 10;
     */
    improvedPoisons: number;
    /**
     * @generated from protobuf field: bool cold_blood = 11;
     */
    coldBlood: boolean;
    /**
     * @generated from protobuf field: int32 quick_recovery = 12;
     */
    quickRecovery: number;
    /**
     * @generated from protobuf field: int32 seal_fate = 13;
     */
    sealFate: number;
    /**
     * @generated from protobuf field: int32 master_poisoner = 14;
     */
    masterPoisoner: number;
    /**
     * @generated from protobuf field: bool vigor = 15;
     */
    vigor: boolean;
    /**
     * @generated from protobuf field: int32 find_weakness = 16;
     */
    findWeakness: number;
    /**
     * @generated from protobuf field: bool mutilate = 17;
     */
    mutilate: boolean;
    /**
     * Combat
     *
     * @generated from protobuf field: int32 improved_sinister_strike = 18;
     */
    improvedSinisterStrike: number;
    /**
     * @generated from protobuf field: int32 lightning_reflexes = 48;
     */
    lightningReflexes: number;
    /**
     * @generated from protobuf field: int32 improved_slice_and_dice = 19;
     */
    improvedSliceAndDice: number;
    /**
     * @generated from protobuf field: int32 deflection = 49;
     */
    deflection: number;
    /**
     * @generated from protobuf field: int32 precision = 20;
     */
    precision: number;
    /**
     * @generated from protobuf field: int32 dagger_specialization = 21;
     */
    daggerSpecialization: number;
    /**
     * @generated from protobuf field: int32 dual_wield_specialization = 22;
     */
    dualWieldSpecialization: number;
    /**
     * @generated from protobuf field: int32 mace_specialization = 23;
     */
    maceSpecialization: number;
    /**
     * @generated from protobuf field: bool blade_flurry = 24;
     */
    bladeFlurry: boolean;
    /**
     * @generated from protobuf field: int32 sword_specialization = 25;
     */
    swordSpecialization: number;
    /**
     * @generated from protobuf field: int32 fist_weapon_specialization = 26;
     */
    fistWeaponSpecialization: number;
    /**
     * @generated from protobuf field: int32 weapon_expertise = 27;
     */
    weaponExpertise: number;
    /**
     * @generated from protobuf field: int32 aggression = 28;
     */
    aggression: number;
    /**
     * @generated from protobuf field: int32 vitality = 29;
     */
    vitality: number;
    /**
     * @generated from protobuf field: bool adrenaline_rush = 30;
     */
    adrenalineRush: boolean;
    /**
     * @generated from protobuf field: int32 combat_potency = 31;
     */
    combatPotency: number;
    /**
     * @generated from protobuf field: bool surprise_attacks = 32;
     */
    surpriseAttacks: boolean;
    /**
     * Subtlety
     *
     * @generated from protobuf field: int32 opportunity = 33;
     */
    opportunity: number;
    /**
     * @generated from protobuf field: int32 sleight_of_hand = 46;
     */
    sleightOfHand: number;
    /**
     * @generated from protobuf field: int32 initiative = 34;
     */
    initiative: number;
    /**
     * @generated from protobuf field: bool ghostly_strike = 35;
     */
    ghostlyStrike: boolean;
    /**
     * @generated from protobuf field: int32 improved_ambush = 36;
     */
    improvedAmbush: number;
    /**
     * @generated from protobuf field: int32 elusiveness = 47;
     */
    elusiveness: number;
    /**
     * @generated from protobuf field: int32 serrated_blades = 37;
     */
    serratedBlades: number;
    /**
     * @generated from protobuf field: bool preparation = 38;
     */
    preparation: boolean;
    /**
     * @generated from protobuf field: int32 dirty_deeds = 39;
     */
    dirtyDeeds: number;
    /**
     * @generated from protobuf field: bool hemorrhage = 40;
     */
    hemorrhage: boolean;
    /**
     * @generated from protobuf field: int32 master_of_subtlety = 41;
     */
    masterOfSubtlety: number;
    /**
     * @generated from protobuf field: int32 deadliness = 42;
     */
    deadliness: number;
    /**
     * @generated from protobuf field: bool premeditation = 43;
     */
    premeditation: boolean;
    /**
     * @generated from protobuf field: int32 sinister_calling = 44;
     */
    sinisterCalling: number;
    /**
     * @generated from protobuf field: bool shadowstep = 45;
     */
    shadowstep: boolean;
}
/**
 * @generated from protobuf message proto.Rogue
 */
export interface Rogue {
    /**
     * @generated from protobuf field: proto.Rogue.Rotation rotation = 1;
     */
    rotation?: Rogue_Rotation;
    /**
     * @generated from protobuf field: proto.RogueTalents talents = 2;
     */
    talents?: RogueTalents;
    /**
     * @generated from protobuf field: proto.Rogue.Options options = 3;
     */
    options?: Rogue_Options;
}
/**
 * @generated from protobuf message proto.Rogue.Rotation
 */
export interface Rogue_Rotation {
    /**
     * @generated from protobuf field: proto.Rogue.Rotation.Builder builder = 3;
     */
    builder: Rogue_Rotation_Builder;
    /**
     * @generated from protobuf field: bool maintain_expose_armor = 1;
     */
    maintainExposeArmor: boolean;
    /**
     * Allows use of rupture when sensible.
     *
     * @generated from protobuf field: bool use_rupture = 2;
     */
    useRupture: boolean;
    /**
     * Shiv instead of regular builder if deadly poison is about to fall.
     *
     * @generated from protobuf field: bool use_shiv = 5;
     */
    useShiv: boolean;
    /**
     * Don't use damage finishers (eviscerate, rupture) unless >= this many CPs.
     *
     * @generated from protobuf field: int32 min_combo_points_for_damage_finisher = 4;
     */
    minComboPointsForDamageFinisher: number;
}
/**
 * @generated from protobuf enum proto.Rogue.Rotation.Builder
 */
export declare enum Rogue_Rotation_Builder {
    /**
     * @generated from protobuf enum value: Unknown = 0;
     */
    Unknown = 0,
    /**
     * @generated from protobuf enum value: Auto = 1;
     */
    Auto = 1,
    /**
     * @generated from protobuf enum value: SinisterStrike = 2;
     */
    SinisterStrike = 2,
    /**
     * @generated from protobuf enum value: Backstab = 3;
     */
    Backstab = 3,
    /**
     * @generated from protobuf enum value: Hemorrhage = 4;
     */
    Hemorrhage = 4,
    /**
     * @generated from protobuf enum value: Mutilate = 5;
     */
    Mutilate = 5
}
/**
 * @generated from protobuf message proto.Rogue.Options
 */
export interface Rogue_Options {
}
/**
 * @generated from protobuf enum proto.RogueMajorGlyph
 */
export declare enum RogueMajorGlyph {
    /**
     * @generated from protobuf enum value: RogueMajorGlyphNone = 0;
     */
    RogueMajorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfAdrenalineRush = 42954;
     */
    GlyphOfAdrenalineRush = 42954,
    /**
     * @generated from protobuf enum value: GlyphOfAmbush = 42955;
     */
    GlyphOfAmbush = 42955,
    /**
     * @generated from protobuf enum value: GlyphOfBackstab = 42956;
     */
    GlyphOfBackstab = 42956,
    /**
     * @generated from protobuf enum value: GlyphOfBladeFlurry = 42957;
     */
    GlyphOfBladeFlurry = 42957,
    /**
     * @generated from protobuf enum value: GlyphOfCloakOfShadows = 45769;
     */
    GlyphOfCloakOfShadows = 45769,
    /**
     * @generated from protobuf enum value: GlyphOfCripplingPoison = 42958;
     */
    GlyphOfCripplingPoison = 42958,
    /**
     * @generated from protobuf enum value: GlyphOfDeadlyThrow = 42959;
     */
    GlyphOfDeadlyThrow = 42959,
    /**
     * @generated from protobuf enum value: GlyphOfEvasion = 42960;
     */
    GlyphOfEvasion = 42960,
    /**
     * @generated from protobuf enum value: GlyphOfEviscerate = 42961;
     */
    GlyphOfEviscerate = 42961,
    /**
     * @generated from protobuf enum value: GlyphOfExposeArmor = 42962;
     */
    GlyphOfExposeArmor = 42962,
    /**
     * @generated from protobuf enum value: GlyphOfFanOfKnives = 45766;
     */
    GlyphOfFanOfKnives = 45766,
    /**
     * @generated from protobuf enum value: GlyphOfFeint = 42963;
     */
    GlyphOfFeint = 42963,
    /**
     * @generated from protobuf enum value: GlyphOfGarrote = 42964;
     */
    GlyphOfGarrote = 42964,
    /**
     * @generated from protobuf enum value: GlyphOfGhostlyStrike = 42965;
     */
    GlyphOfGhostlyStrike = 42965,
    /**
     * @generated from protobuf enum value: GlyphOfGouge = 42966;
     */
    GlyphOfGouge = 42966,
    /**
     * @generated from protobuf enum value: GlyphOfHemorrhage = 42967;
     */
    GlyphOfHemorrhage = 42967,
    /**
     * @generated from protobuf enum value: GlyphOfHungerForBlood = 45761;
     */
    GlyphOfHungerForBlood = 45761,
    /**
     * @generated from protobuf enum value: GlyphOfKillingSpree = 45762;
     */
    GlyphOfKillingSpree = 45762,
    /**
     * @generated from protobuf enum value: GlyphOfMutilate = 45768;
     */
    GlyphOfMutilate = 45768,
    /**
     * @generated from protobuf enum value: GlyphOfPreparation = 42968;
     */
    GlyphOfPreparation = 42968,
    /**
     * @generated from protobuf enum value: GlyphOfRupture = 42969;
     */
    GlyphOfRupture = 42969,
    /**
     * @generated from protobuf enum value: GlyphOfSap = 42970;
     */
    GlyphOfSap = 42970,
    /**
     * @generated from protobuf enum value: GlyphOfShadowDance = 45764;
     */
    GlyphOfShadowDance = 45764,
    /**
     * @generated from protobuf enum value: GlyphOfSinisterStrike = 42972;
     */
    GlyphOfSinisterStrike = 42972,
    /**
     * @generated from protobuf enum value: GlyphOfSliceAndDice = 42973;
     */
    GlyphOfSliceAndDice = 42973,
    /**
     * @generated from protobuf enum value: GlyphOfSprint = 42974;
     */
    GlyphOfSprint = 42974,
    /**
     * @generated from protobuf enum value: GlyphOfTricksOfTheTrade = 45767;
     */
    GlyphOfTricksOfTheTrade = 45767,
    /**
     * @generated from protobuf enum value: GlyphOfVigor = 42971;
     */
    GlyphOfVigor = 42971
}
/**
 * @generated from protobuf enum proto.RogueMinorGlyph
 */
export declare enum RogueMinorGlyph {
    /**
     * @generated from protobuf enum value: RogueMinorGlyphNone = 0;
     */
    RogueMinorGlyphNone = 0,
    /**
     * @generated from protobuf enum value: GlyphOfBlurredSpeed = 43379;
     */
    GlyphOfBlurredSpeed = 43379,
    /**
     * @generated from protobuf enum value: GlyphOfDistract = 43376;
     */
    GlyphOfDistract = 43376,
    /**
     * @generated from protobuf enum value: GlyphOfPickLock = 43377;
     */
    GlyphOfPickLock = 43377,
    /**
     * @generated from protobuf enum value: GlyphOfPickPocket = 43343;
     */
    GlyphOfPickPocket = 43343,
    /**
     * @generated from protobuf enum value: GlyphOfSafeFall = 43378;
     */
    GlyphOfSafeFall = 43378,
    /**
     * @generated from protobuf enum value: GlyphOfVanish = 43380;
     */
    GlyphOfVanish = 43380
}
declare class RogueTalents$Type extends MessageType<RogueTalents> {
    constructor();
    create(value?: PartialMessage<RogueTalents>): RogueTalents;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RogueTalents): RogueTalents;
    internalBinaryWrite(message: RogueTalents, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.RogueTalents
 */
export declare const RogueTalents: RogueTalents$Type;
declare class Rogue$Type extends MessageType<Rogue> {
    constructor();
    create(value?: PartialMessage<Rogue>): Rogue;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Rogue): Rogue;
    internalBinaryWrite(message: Rogue, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Rogue
 */
export declare const Rogue: Rogue$Type;
declare class Rogue_Rotation$Type extends MessageType<Rogue_Rotation> {
    constructor();
    create(value?: PartialMessage<Rogue_Rotation>): Rogue_Rotation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Rogue_Rotation): Rogue_Rotation;
    internalBinaryWrite(message: Rogue_Rotation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Rogue.Rotation
 */
export declare const Rogue_Rotation: Rogue_Rotation$Type;
declare class Rogue_Options$Type extends MessageType<Rogue_Options> {
    constructor();
    create(value?: PartialMessage<Rogue_Options>): Rogue_Options;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Rogue_Options): Rogue_Options;
    internalBinaryWrite(message: Rogue_Options, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message proto.Rogue.Options
 */
export declare const Rogue_Options: Rogue_Options$Type;
export {};

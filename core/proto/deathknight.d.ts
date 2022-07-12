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
    /**
     * Blood
     *
     * @generated from protobuf field: int32 butchery = 1;
     */
    butchery: number;
    /**
     * @generated from protobuf field: int32 subversion = 2;
     */
    subversion: number;
    /**
     * @generated from protobuf field: int32 blade_barrier = 3;
     */
    bladeBarrier: number;
    /**
     * @generated from protobuf field: int32 bladed_armor = 4;
     */
    bladedArmor: number;
    /**
     * @generated from protobuf field: int32 scent_of_blood = 5;
     */
    scentOfBlood: number;
    /**
     * @generated from protobuf field: int32 two_handed_weapon_specialization = 6;
     */
    twoHandedWeaponSpecialization: number;
    /**
     * @generated from protobuf field: bool rune_tap = 7;
     */
    runeTap: boolean;
    /**
     * @generated from protobuf field: int32 dark_conviction = 8;
     */
    darkConviction: number;
    /**
     * @generated from protobuf field: int32 death_rune_mastery = 9;
     */
    deathRuneMastery: number;
    /**
     * @generated from protobuf field: int32 improved_rune_tap = 10;
     */
    improvedRuneTap: number;
    /**
     * @generated from protobuf field: int32 spell_deflection = 11;
     */
    spellDeflection: number;
    /**
     * @generated from protobuf field: int32 vendetta = 12;
     */
    vendetta: number;
    /**
     * @generated from protobuf field: int32 bloody_strikes = 13;
     */
    bloodyStrikes: number;
    /**
     * @generated from protobuf field: int32 veteran_of_the_third_war = 14;
     */
    veteranOfTheThirdWar: number;
    /**
     * @generated from protobuf field: bool mark_of_blood = 15;
     */
    markOfBlood: boolean;
    /**
     * @generated from protobuf field: int32 bloody_vengeance = 16;
     */
    bloodyVengeance: number;
    /**
     * @generated from protobuf field: int32 abominations_might = 17;
     */
    abominationsMight: number;
    /**
     * @generated from protobuf field: int32 bloodworms = 18;
     */
    bloodworms: number;
    /**
     * @generated from protobuf field: bool hysteria = 19;
     */
    hysteria: boolean;
    /**
     * @generated from protobuf field: int32 improved_blood_presence = 20;
     */
    improvedBloodPresence: number;
    /**
     * @generated from protobuf field: int32 improved_death_strike = 21;
     */
    improvedDeathStrike: number;
    /**
     * @generated from protobuf field: int32 sudden_doom = 22;
     */
    suddenDoom: number;
    /**
     * @generated from protobuf field: bool vampiric_blood = 23;
     */
    vampiricBlood: boolean;
    /**
     * @generated from protobuf field: int32 will_of_the_necropolis = 24;
     */
    willOfTheNecropolis: number;
    /**
     * @generated from protobuf field: bool heart_strike = 25;
     */
    heartStrike: boolean;
    /**
     * @generated from protobuf field: int32 might_of_mograine = 26;
     */
    mightOfMograine: number;
    /**
     * @generated from protobuf field: int32 blood_gorged = 27;
     */
    bloodGorged: number;
    /**
     * @generated from protobuf field: bool dancing_rune_weapon = 28;
     */
    dancingRuneWeapon: boolean;
    /**
     * Frost
     *
     * @generated from protobuf field: int32 improved_icy_touch = 29;
     */
    improvedIcyTouch: number;
    /**
     * @generated from protobuf field: int32 runic_power_mastery = 30;
     */
    runicPowerMastery: number;
    /**
     * @generated from protobuf field: int32 toughness = 31;
     */
    toughness: number;
    /**
     * @generated from protobuf field: int32 icy_reach = 32;
     */
    icyReach: number;
    /**
     * @generated from protobuf field: int32 black_ice = 33;
     */
    blackIce: number;
    /**
     * @generated from protobuf field: int32 nerves_of_cold_steel = 34;
     */
    nervesOfColdSteel: number;
    /**
     * @generated from protobuf field: int32 icy_talons = 35;
     */
    icyTalons: number;
    /**
     * @generated from protobuf field: bool lichborne = 36;
     */
    lichborne: boolean;
    /**
     * @generated from protobuf field: int32 annihilation = 37;
     */
    annihilation: number;
    /**
     * @generated from protobuf field: int32 killing_machine = 38;
     */
    killingMachine: number;
    /**
     * @generated from protobuf field: int32 chill_of_the_grave = 39;
     */
    chillOfTheGrave: number;
    /**
     * @generated from protobuf field: int32 endless_winter = 40;
     */
    endlessWinter: number;
    /**
     * @generated from protobuf field: int32 frigid_dreadplate = 41;
     */
    frigidDreadplate: number;
    /**
     * @generated from protobuf field: int32 glacier_rot = 42;
     */
    glacierRot: number;
    /**
     * @generated from protobuf field: bool deathchill = 43;
     */
    deathchill: boolean;
    /**
     * @generated from protobuf field: bool improved_icy_talons = 44;
     */
    improvedIcyTalons: boolean;
    /**
     * @generated from protobuf field: int32 merciless_combat = 45;
     */
    mercilessCombat: number;
    /**
     * @generated from protobuf field: int32 rime = 46;
     */
    rime: number;
    /**
     * @generated from protobuf field: int32 chilblains = 47;
     */
    chilblains: number;
    /**
     * @generated from protobuf field: bool hungering_cold = 48;
     */
    hungeringCold: boolean;
    /**
     * @generated from protobuf field: int32 improved_frost_presence = 49;
     */
    improvedFrostPresence: number;
    /**
     * @generated from protobuf field: int32 threat_of_thassarian = 50;
     */
    threatOfThassarian: number;
    /**
     * @generated from protobuf field: int32 blood_of_the_north = 51;
     */
    bloodOfTheNorth: number;
    /**
     * @generated from protobuf field: bool unbreakable_armor = 52;
     */
    unbreakableArmor: boolean;
    /**
     * @generated from protobuf field: int32 acclimation = 53;
     */
    acclimation: number;
    /**
     * @generated from protobuf field: bool frost_strike = 54;
     */
    frostStrike: boolean;
    /**
     * @generated from protobuf field: int32 guile_of_gorefiend = 55;
     */
    guileOfGorefiend: number;
    /**
     * @generated from protobuf field: int32 tundra_stalker = 56;
     */
    tundraStalker: number;
    /**
     * @generated from protobuf field: bool howling_blast = 57;
     */
    howlingBlast: boolean;
    /**
     * Unholy
     *
     * @generated from protobuf field: int32 vicious_strikes = 58;
     */
    viciousStrikes: number;
    /**
     * @generated from protobuf field: int32 virulence = 59;
     */
    virulence: number;
    /**
     * @generated from protobuf field: int32 anticipation = 60;
     */
    anticipation: number;
    /**
     * @generated from protobuf field: int32 epidemic = 61;
     */
    epidemic: number;
    /**
     * @generated from protobuf field: int32 morbidity = 62;
     */
    morbidity: number;
    /**
     * @generated from protobuf field: int32 unholy_command = 63;
     */
    unholyCommand: number;
    /**
     * @generated from protobuf field: int32 ravenous_dead = 64;
     */
    ravenousDead: number;
    /**
     * @generated from protobuf field: int32 outbreak = 65;
     */
    outbreak: number;
    /**
     * @generated from protobuf field: int32 necrosis = 66;
     */
    necrosis: number;
    /**
     * @generated from protobuf field: bool corpse_explosion = 67;
     */
    corpseExplosion: boolean;
    /**
     * @generated from protobuf field: int32 on_a_pale_horse = 68;
     */
    onAPaleHorse: number;
    /**
     * @generated from protobuf field: int32 blood_caked_blade = 69;
     */
    bloodCakedBlade: number;
    /**
     * @generated from protobuf field: int32 night_of_the_dead = 70;
     */
    nightOfTheDead: number;
    /**
     * @generated from protobuf field: bool unholy_blight = 71;
     */
    unholyBlight: boolean;
    /**
     * @generated from protobuf field: int32 impurity = 72;
     */
    impurity: number;
    /**
     * @generated from protobuf field: int32 dirge = 73;
     */
    dirge: number;
    /**
     * @generated from protobuf field: int32 desecration = 74;
     */
    desecration: number;
    /**
     * @generated from protobuf field: int32 magic_suppression = 75;
     */
    magicSuppression: number;
    /**
     * @generated from protobuf field: int32 reaping = 76;
     */
    reaping: number;
    /**
     * @generated from protobuf field: bool master_of_ghouls = 77;
     */
    masterOfGhouls: boolean;
    /**
     * @generated from protobuf field: int32 desolation = 78;
     */
    desolation: number;
    /**
     * @generated from protobuf field: bool anti_magic_zone = 79;
     */
    antiMagicZone: boolean;
    /**
     * @generated from protobuf field: int32 improved_unholy_presence = 80;
     */
    improvedUnholyPresence: number;
    /**
     * @generated from protobuf field: bool ghoul_frenzy = 81;
     */
    ghoulFrenzy: boolean;
    /**
     * @generated from protobuf field: int32 crypt_fever = 82;
     */
    cryptFever: number;
    /**
     * @generated from protobuf field: bool bone_shield = 83;
     */
    boneShield: boolean;
    /**
     * @generated from protobuf field: int32 wandering_plague = 84;
     */
    wanderingPlague: number;
    /**
     * @generated from protobuf field: int32 ebon_plaguebringer = 85;
     */
    ebonPlaguebringer: number;
    /**
     * @generated from protobuf field: bool scourge_strike = 86;
     */
    scourgeStrike: boolean;
    /**
     * @generated from protobuf field: int32 rage_of_rivendare = 87;
     */
    rageOfRivendare: number;
    /**
     * @generated from protobuf field: bool summon_gargoyle = 88;
     */
    summonGargoyle: boolean;
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

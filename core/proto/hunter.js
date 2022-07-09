import { WireType } from '/wotlk/protobuf-ts/index.js';
import { UnknownFieldHandler } from '/wotlk/protobuf-ts/index.js';
import { reflectionMergePartial } from '/wotlk/protobuf-ts/index.js';
import { MESSAGE_TYPE } from '/wotlk/protobuf-ts/index.js';
import { MessageType } from '/wotlk/protobuf-ts/index.js';
/**
 * @generated from protobuf enum proto.Hunter.Rotation.StingType
 */
export var Hunter_Rotation_StingType;
(function (Hunter_Rotation_StingType) {
    /**
     * @generated from protobuf enum value: NoSting = 0;
     */
    Hunter_Rotation_StingType[Hunter_Rotation_StingType["NoSting"] = 0] = "NoSting";
    /**
     * @generated from protobuf enum value: ScorpidSting = 1;
     */
    Hunter_Rotation_StingType[Hunter_Rotation_StingType["ScorpidSting"] = 1] = "ScorpidSting";
    /**
     * @generated from protobuf enum value: SerpentSting = 2;
     */
    Hunter_Rotation_StingType[Hunter_Rotation_StingType["SerpentSting"] = 2] = "SerpentSting";
})(Hunter_Rotation_StingType || (Hunter_Rotation_StingType = {}));
/**
 * @generated from protobuf enum proto.Hunter.Rotation.WeaveType
 */
export var Hunter_Rotation_WeaveType;
(function (Hunter_Rotation_WeaveType) {
    /**
     * @generated from protobuf enum value: WeaveNone = 0;
     */
    Hunter_Rotation_WeaveType[Hunter_Rotation_WeaveType["WeaveNone"] = 0] = "WeaveNone";
    /**
     * @generated from protobuf enum value: WeaveAutosOnly = 1;
     */
    Hunter_Rotation_WeaveType[Hunter_Rotation_WeaveType["WeaveAutosOnly"] = 1] = "WeaveAutosOnly";
    /**
     * @generated from protobuf enum value: WeaveRaptorOnly = 2;
     */
    Hunter_Rotation_WeaveType[Hunter_Rotation_WeaveType["WeaveRaptorOnly"] = 2] = "WeaveRaptorOnly";
    /**
     * @generated from protobuf enum value: WeaveFull = 3;
     */
    Hunter_Rotation_WeaveType[Hunter_Rotation_WeaveType["WeaveFull"] = 3] = "WeaveFull";
})(Hunter_Rotation_WeaveType || (Hunter_Rotation_WeaveType = {}));
/**
 * @generated from protobuf enum proto.Hunter.Options.QuiverBonus
 */
export var Hunter_Options_QuiverBonus;
(function (Hunter_Options_QuiverBonus) {
    /**
     * @generated from protobuf enum value: QuiverNone = 0;
     */
    Hunter_Options_QuiverBonus[Hunter_Options_QuiverBonus["QuiverNone"] = 0] = "QuiverNone";
    /**
     * @generated from protobuf enum value: Speed10 = 1;
     */
    Hunter_Options_QuiverBonus[Hunter_Options_QuiverBonus["Speed10"] = 1] = "Speed10";
    /**
     * @generated from protobuf enum value: Speed11 = 2;
     */
    Hunter_Options_QuiverBonus[Hunter_Options_QuiverBonus["Speed11"] = 2] = "Speed11";
    /**
     * @generated from protobuf enum value: Speed12 = 3;
     */
    Hunter_Options_QuiverBonus[Hunter_Options_QuiverBonus["Speed12"] = 3] = "Speed12";
    /**
     * @generated from protobuf enum value: Speed13 = 4;
     */
    Hunter_Options_QuiverBonus[Hunter_Options_QuiverBonus["Speed13"] = 4] = "Speed13";
    /**
     * @generated from protobuf enum value: Speed14 = 5;
     */
    Hunter_Options_QuiverBonus[Hunter_Options_QuiverBonus["Speed14"] = 5] = "Speed14";
    /**
     * @generated from protobuf enum value: Speed15 = 6;
     */
    Hunter_Options_QuiverBonus[Hunter_Options_QuiverBonus["Speed15"] = 6] = "Speed15";
})(Hunter_Options_QuiverBonus || (Hunter_Options_QuiverBonus = {}));
/**
 * @generated from protobuf enum proto.Hunter.Options.Ammo
 */
export var Hunter_Options_Ammo;
(function (Hunter_Options_Ammo) {
    /**
     * @generated from protobuf enum value: AmmoNone = 0;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["AmmoNone"] = 0] = "AmmoNone";
    /**
     * @generated from protobuf enum value: IcebladeArrow = 1;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["IcebladeArrow"] = 1] = "IcebladeArrow";
    /**
     * @generated from protobuf enum value: SaroniteRazorheads = 2;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["SaroniteRazorheads"] = 2] = "SaroniteRazorheads";
    /**
     * @generated from protobuf enum value: TerrorshaftArrow = 3;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["TerrorshaftArrow"] = 3] = "TerrorshaftArrow";
    /**
     * @generated from protobuf enum value: TimelessArrow = 4;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["TimelessArrow"] = 4] = "TimelessArrow";
    /**
     * @generated from protobuf enum value: MysteriousArrow = 5;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["MysteriousArrow"] = 5] = "MysteriousArrow";
    /**
     * @generated from protobuf enum value: AdamantiteStinger = 6;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["AdamantiteStinger"] = 6] = "AdamantiteStinger";
    /**
     * @generated from protobuf enum value: BlackflightArrow = 7;
     */
    Hunter_Options_Ammo[Hunter_Options_Ammo["BlackflightArrow"] = 7] = "BlackflightArrow";
})(Hunter_Options_Ammo || (Hunter_Options_Ammo = {}));
/**
 * @generated from protobuf enum proto.Hunter.Options.PetType
 */
export var Hunter_Options_PetType;
(function (Hunter_Options_PetType) {
    /**
     * @generated from protobuf enum value: PetNone = 0;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["PetNone"] = 0] = "PetNone";
    /**
     * @generated from protobuf enum value: Bat = 5;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Bat"] = 5] = "Bat";
    /**
     * @generated from protobuf enum value: Bear = 7;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Bear"] = 7] = "Bear";
    /**
     * @generated from protobuf enum value: Cat = 2;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Cat"] = 2] = "Cat";
    /**
     * @generated from protobuf enum value: Crab = 8;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Crab"] = 8] = "Crab";
    /**
     * @generated from protobuf enum value: Owl = 4;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Owl"] = 4] = "Owl";
    /**
     * @generated from protobuf enum value: Raptor = 3;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Raptor"] = 3] = "Raptor";
    /**
     * @generated from protobuf enum value: Ravager = 1;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["Ravager"] = 1] = "Ravager";
    /**
     * @generated from protobuf enum value: WindSerpent = 6;
     */
    Hunter_Options_PetType[Hunter_Options_PetType["WindSerpent"] = 6] = "WindSerpent";
})(Hunter_Options_PetType || (Hunter_Options_PetType = {}));
/**
 * @generated from protobuf enum proto.HunterMajorGlyph
 */
export var HunterMajorGlyph;
(function (HunterMajorGlyph) {
    /**
     * @generated from protobuf enum value: HunterMajorGlyphNone = 0;
     */
    HunterMajorGlyph[HunterMajorGlyph["HunterMajorGlyphNone"] = 0] = "HunterMajorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfAimedShot = 42897;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfAimedShot"] = 42897] = "GlyphOfAimedShot";
    /**
     * @generated from protobuf enum value: GlyphOfArcaneShot = 42898;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfArcaneShot"] = 42898] = "GlyphOfArcaneShot";
    /**
     * @generated from protobuf enum value: GlyphOfAspectOfTheViper = 42901;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfAspectOfTheViper"] = 42901] = "GlyphOfAspectOfTheViper";
    /**
     * @generated from protobuf enum value: GlyphOfBestialWrath = 42902;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfBestialWrath"] = 42902] = "GlyphOfBestialWrath";
    /**
     * @generated from protobuf enum value: GlyphOfChimeraShot = 45625;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfChimeraShot"] = 45625] = "GlyphOfChimeraShot";
    /**
     * @generated from protobuf enum value: GlyphOfDeterrence = 42903;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfDeterrence"] = 42903] = "GlyphOfDeterrence";
    /**
     * @generated from protobuf enum value: GlyphOfDisengage = 42904;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfDisengage"] = 42904] = "GlyphOfDisengage";
    /**
     * @generated from protobuf enum value: GlyphOfExplosiveShot = 45731;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfExplosiveShot"] = 45731] = "GlyphOfExplosiveShot";
    /**
     * @generated from protobuf enum value: GlyphOfExplosiveTrap = 45733;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfExplosiveTrap"] = 45733] = "GlyphOfExplosiveTrap";
    /**
     * @generated from protobuf enum value: GlyphOfFreezingTrap = 42905;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfFreezingTrap"] = 42905] = "GlyphOfFreezingTrap";
    /**
     * @generated from protobuf enum value: GlyphOfFrostTrap = 42906;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfFrostTrap"] = 42906] = "GlyphOfFrostTrap";
    /**
     * @generated from protobuf enum value: GlyphOfHunterSMark = 42907;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfHunterSMark"] = 42907] = "GlyphOfHunterSMark";
    /**
     * @generated from protobuf enum value: GlyphOfImmolationTrap = 42908;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfImmolationTrap"] = 42908] = "GlyphOfImmolationTrap";
    /**
     * @generated from protobuf enum value: GlyphOfKillShot = 45732;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfKillShot"] = 45732] = "GlyphOfKillShot";
    /**
     * @generated from protobuf enum value: GlyphOfMending = 42900;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfMending"] = 42900] = "GlyphOfMending";
    /**
     * @generated from protobuf enum value: GlyphOfMultiShot = 42910;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfMultiShot"] = 42910] = "GlyphOfMultiShot";
    /**
     * @generated from protobuf enum value: GlyphOfRapidFire = 42911;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfRapidFire"] = 42911] = "GlyphOfRapidFire";
    /**
     * @generated from protobuf enum value: GlyphOfRaptorStrike = 45735;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfRaptorStrike"] = 45735] = "GlyphOfRaptorStrike";
    /**
     * @generated from protobuf enum value: GlyphOfScatterShot = 45734;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfScatterShot"] = 45734] = "GlyphOfScatterShot";
    /**
     * @generated from protobuf enum value: GlyphOfSerpentSting = 42912;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfSerpentSting"] = 42912] = "GlyphOfSerpentSting";
    /**
     * @generated from protobuf enum value: GlyphOfSnakeTrap = 42913;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfSnakeTrap"] = 42913] = "GlyphOfSnakeTrap";
    /**
     * @generated from protobuf enum value: GlyphOfSteadyShot = 42914;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfSteadyShot"] = 42914] = "GlyphOfSteadyShot";
    /**
     * @generated from protobuf enum value: GlyphOfTheBeast = 42899;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfTheBeast"] = 42899] = "GlyphOfTheBeast";
    /**
     * @generated from protobuf enum value: GlyphOfTheHawk = 42909;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfTheHawk"] = 42909] = "GlyphOfTheHawk";
    /**
     * @generated from protobuf enum value: GlyphOfTrueshotAura = 42915;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfTrueshotAura"] = 42915] = "GlyphOfTrueshotAura";
    /**
     * @generated from protobuf enum value: GlyphOfVolley = 42916;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfVolley"] = 42916] = "GlyphOfVolley";
    /**
     * @generated from protobuf enum value: GlyphOfWyvernSting = 42917;
     */
    HunterMajorGlyph[HunterMajorGlyph["GlyphOfWyvernSting"] = 42917] = "GlyphOfWyvernSting";
})(HunterMajorGlyph || (HunterMajorGlyph = {}));
/**
 * @generated from protobuf enum proto.HunterMinorGlyph
 */
export var HunterMinorGlyph;
(function (HunterMinorGlyph) {
    /**
     * @generated from protobuf enum value: HunterMinorGlyphNone = 0;
     */
    HunterMinorGlyph[HunterMinorGlyph["HunterMinorGlyphNone"] = 0] = "HunterMinorGlyphNone";
    /**
     * @generated from protobuf enum value: GlyphOfFeignDeath = 43351;
     */
    HunterMinorGlyph[HunterMinorGlyph["GlyphOfFeignDeath"] = 43351] = "GlyphOfFeignDeath";
    /**
     * @generated from protobuf enum value: GlyphOfMendPet = 43350;
     */
    HunterMinorGlyph[HunterMinorGlyph["GlyphOfMendPet"] = 43350] = "GlyphOfMendPet";
    /**
     * @generated from protobuf enum value: GlyphOfPossessedStrength = 43354;
     */
    HunterMinorGlyph[HunterMinorGlyph["GlyphOfPossessedStrength"] = 43354] = "GlyphOfPossessedStrength";
    /**
     * @generated from protobuf enum value: GlyphOfRevivePet = 43338;
     */
    HunterMinorGlyph[HunterMinorGlyph["GlyphOfRevivePet"] = 43338] = "GlyphOfRevivePet";
    /**
     * @generated from protobuf enum value: GlyphOfScareBeast = 43356;
     */
    HunterMinorGlyph[HunterMinorGlyph["GlyphOfScareBeast"] = 43356] = "GlyphOfScareBeast";
    /**
     * @generated from protobuf enum value: GlyphOfThePack = 43355;
     */
    HunterMinorGlyph[HunterMinorGlyph["GlyphOfThePack"] = 43355] = "GlyphOfThePack";
})(HunterMinorGlyph || (HunterMinorGlyph = {}));
// @generated message type with reflection information, may provide speed optimized methods
class HunterTalents$Type extends MessageType {
    constructor() {
        super("proto.HunterTalents", [
            { no: 1, name: "improved_aspect_of_the_hawk", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "endurance_training", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "focused_fire", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "unleashed_fury", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "ferocity", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "bestial_discipline", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 45, name: "animal_handler", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "frenzy", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "ferocious_inspiration", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "bestial_wrath", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "serpents_swiftness", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "the_beast_within", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "lethal_shots", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "improved_hunters_mark", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "efficiency", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "go_for_the_throat", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 16, name: "improved_arcane_shot", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 17, name: "aimed_shot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 18, name: "rapid_killing", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 19, name: "improved_stings", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 20, name: "mortal_shots", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 21, name: "scatter_shot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 22, name: "barrage", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 23, name: "combat_experience", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 24, name: "ranged_weapon_specialization", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 25, name: "careful_aim", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 26, name: "trueshot_aura", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 27, name: "improved_barrage", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 28, name: "master_marksman", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 29, name: "silencing_shot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 30, name: "monster_slaying", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 31, name: "humanoid_slaying", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 32, name: "savage_strikes", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 46, name: "deflection", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 33, name: "clever_traps", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 34, name: "survivalist", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 35, name: "trap_mastery", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 36, name: "surefooted", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 37, name: "survival_instincts", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 38, name: "killer_instinct", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 39, name: "resourcefulness", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 40, name: "lightning_reflexes", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 41, name: "thrill_of_the_hunt", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 42, name: "expose_weakness", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 43, name: "master_tactician", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 44, name: "readiness", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { improvedAspectOfTheHawk: 0, enduranceTraining: 0, focusedFire: 0, unleashedFury: 0, ferocity: 0, bestialDiscipline: 0, animalHandler: 0, frenzy: 0, ferociousInspiration: 0, bestialWrath: false, serpentsSwiftness: 0, theBeastWithin: false, lethalShots: 0, improvedHuntersMark: 0, efficiency: 0, goForTheThroat: 0, improvedArcaneShot: 0, aimedShot: false, rapidKilling: 0, improvedStings: 0, mortalShots: 0, scatterShot: false, barrage: 0, combatExperience: 0, rangedWeaponSpecialization: 0, carefulAim: 0, trueshotAura: false, improvedBarrage: 0, masterMarksman: 0, silencingShot: false, monsterSlaying: 0, humanoidSlaying: 0, savageStrikes: 0, deflection: 0, cleverTraps: 0, survivalist: 0, trapMastery: 0, surefooted: 0, survivalInstincts: 0, killerInstinct: 0, resourcefulness: 0, lightningReflexes: 0, thrillOfTheHunt: 0, exposeWeakness: 0, masterTactician: 0, readiness: false };
        Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 improved_aspect_of_the_hawk */ 1:
                    message.improvedAspectOfTheHawk = reader.int32();
                    break;
                case /* int32 endurance_training */ 2:
                    message.enduranceTraining = reader.int32();
                    break;
                case /* int32 focused_fire */ 3:
                    message.focusedFire = reader.int32();
                    break;
                case /* int32 unleashed_fury */ 4:
                    message.unleashedFury = reader.int32();
                    break;
                case /* int32 ferocity */ 5:
                    message.ferocity = reader.int32();
                    break;
                case /* int32 bestial_discipline */ 6:
                    message.bestialDiscipline = reader.int32();
                    break;
                case /* int32 animal_handler */ 45:
                    message.animalHandler = reader.int32();
                    break;
                case /* int32 frenzy */ 7:
                    message.frenzy = reader.int32();
                    break;
                case /* int32 ferocious_inspiration */ 8:
                    message.ferociousInspiration = reader.int32();
                    break;
                case /* bool bestial_wrath */ 9:
                    message.bestialWrath = reader.bool();
                    break;
                case /* int32 serpents_swiftness */ 10:
                    message.serpentsSwiftness = reader.int32();
                    break;
                case /* bool the_beast_within */ 11:
                    message.theBeastWithin = reader.bool();
                    break;
                case /* int32 lethal_shots */ 12:
                    message.lethalShots = reader.int32();
                    break;
                case /* int32 improved_hunters_mark */ 13:
                    message.improvedHuntersMark = reader.int32();
                    break;
                case /* int32 efficiency */ 14:
                    message.efficiency = reader.int32();
                    break;
                case /* int32 go_for_the_throat */ 15:
                    message.goForTheThroat = reader.int32();
                    break;
                case /* int32 improved_arcane_shot */ 16:
                    message.improvedArcaneShot = reader.int32();
                    break;
                case /* bool aimed_shot */ 17:
                    message.aimedShot = reader.bool();
                    break;
                case /* int32 rapid_killing */ 18:
                    message.rapidKilling = reader.int32();
                    break;
                case /* int32 improved_stings */ 19:
                    message.improvedStings = reader.int32();
                    break;
                case /* int32 mortal_shots */ 20:
                    message.mortalShots = reader.int32();
                    break;
                case /* bool scatter_shot */ 21:
                    message.scatterShot = reader.bool();
                    break;
                case /* int32 barrage */ 22:
                    message.barrage = reader.int32();
                    break;
                case /* int32 combat_experience */ 23:
                    message.combatExperience = reader.int32();
                    break;
                case /* int32 ranged_weapon_specialization */ 24:
                    message.rangedWeaponSpecialization = reader.int32();
                    break;
                case /* int32 careful_aim */ 25:
                    message.carefulAim = reader.int32();
                    break;
                case /* bool trueshot_aura */ 26:
                    message.trueshotAura = reader.bool();
                    break;
                case /* int32 improved_barrage */ 27:
                    message.improvedBarrage = reader.int32();
                    break;
                case /* int32 master_marksman */ 28:
                    message.masterMarksman = reader.int32();
                    break;
                case /* bool silencing_shot */ 29:
                    message.silencingShot = reader.bool();
                    break;
                case /* int32 monster_slaying */ 30:
                    message.monsterSlaying = reader.int32();
                    break;
                case /* int32 humanoid_slaying */ 31:
                    message.humanoidSlaying = reader.int32();
                    break;
                case /* int32 savage_strikes */ 32:
                    message.savageStrikes = reader.int32();
                    break;
                case /* int32 deflection */ 46:
                    message.deflection = reader.int32();
                    break;
                case /* int32 clever_traps */ 33:
                    message.cleverTraps = reader.int32();
                    break;
                case /* int32 survivalist */ 34:
                    message.survivalist = reader.int32();
                    break;
                case /* int32 trap_mastery */ 35:
                    message.trapMastery = reader.int32();
                    break;
                case /* int32 surefooted */ 36:
                    message.surefooted = reader.int32();
                    break;
                case /* int32 survival_instincts */ 37:
                    message.survivalInstincts = reader.int32();
                    break;
                case /* int32 killer_instinct */ 38:
                    message.killerInstinct = reader.int32();
                    break;
                case /* int32 resourcefulness */ 39:
                    message.resourcefulness = reader.int32();
                    break;
                case /* int32 lightning_reflexes */ 40:
                    message.lightningReflexes = reader.int32();
                    break;
                case /* int32 thrill_of_the_hunt */ 41:
                    message.thrillOfTheHunt = reader.int32();
                    break;
                case /* int32 expose_weakness */ 42:
                    message.exposeWeakness = reader.int32();
                    break;
                case /* int32 master_tactician */ 43:
                    message.masterTactician = reader.int32();
                    break;
                case /* bool readiness */ 44:
                    message.readiness = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 improved_aspect_of_the_hawk = 1; */
        if (message.improvedAspectOfTheHawk !== 0)
            writer.tag(1, WireType.Varint).int32(message.improvedAspectOfTheHawk);
        /* int32 endurance_training = 2; */
        if (message.enduranceTraining !== 0)
            writer.tag(2, WireType.Varint).int32(message.enduranceTraining);
        /* int32 focused_fire = 3; */
        if (message.focusedFire !== 0)
            writer.tag(3, WireType.Varint).int32(message.focusedFire);
        /* int32 unleashed_fury = 4; */
        if (message.unleashedFury !== 0)
            writer.tag(4, WireType.Varint).int32(message.unleashedFury);
        /* int32 ferocity = 5; */
        if (message.ferocity !== 0)
            writer.tag(5, WireType.Varint).int32(message.ferocity);
        /* int32 bestial_discipline = 6; */
        if (message.bestialDiscipline !== 0)
            writer.tag(6, WireType.Varint).int32(message.bestialDiscipline);
        /* int32 animal_handler = 45; */
        if (message.animalHandler !== 0)
            writer.tag(45, WireType.Varint).int32(message.animalHandler);
        /* int32 frenzy = 7; */
        if (message.frenzy !== 0)
            writer.tag(7, WireType.Varint).int32(message.frenzy);
        /* int32 ferocious_inspiration = 8; */
        if (message.ferociousInspiration !== 0)
            writer.tag(8, WireType.Varint).int32(message.ferociousInspiration);
        /* bool bestial_wrath = 9; */
        if (message.bestialWrath !== false)
            writer.tag(9, WireType.Varint).bool(message.bestialWrath);
        /* int32 serpents_swiftness = 10; */
        if (message.serpentsSwiftness !== 0)
            writer.tag(10, WireType.Varint).int32(message.serpentsSwiftness);
        /* bool the_beast_within = 11; */
        if (message.theBeastWithin !== false)
            writer.tag(11, WireType.Varint).bool(message.theBeastWithin);
        /* int32 lethal_shots = 12; */
        if (message.lethalShots !== 0)
            writer.tag(12, WireType.Varint).int32(message.lethalShots);
        /* int32 improved_hunters_mark = 13; */
        if (message.improvedHuntersMark !== 0)
            writer.tag(13, WireType.Varint).int32(message.improvedHuntersMark);
        /* int32 efficiency = 14; */
        if (message.efficiency !== 0)
            writer.tag(14, WireType.Varint).int32(message.efficiency);
        /* int32 go_for_the_throat = 15; */
        if (message.goForTheThroat !== 0)
            writer.tag(15, WireType.Varint).int32(message.goForTheThroat);
        /* int32 improved_arcane_shot = 16; */
        if (message.improvedArcaneShot !== 0)
            writer.tag(16, WireType.Varint).int32(message.improvedArcaneShot);
        /* bool aimed_shot = 17; */
        if (message.aimedShot !== false)
            writer.tag(17, WireType.Varint).bool(message.aimedShot);
        /* int32 rapid_killing = 18; */
        if (message.rapidKilling !== 0)
            writer.tag(18, WireType.Varint).int32(message.rapidKilling);
        /* int32 improved_stings = 19; */
        if (message.improvedStings !== 0)
            writer.tag(19, WireType.Varint).int32(message.improvedStings);
        /* int32 mortal_shots = 20; */
        if (message.mortalShots !== 0)
            writer.tag(20, WireType.Varint).int32(message.mortalShots);
        /* bool scatter_shot = 21; */
        if (message.scatterShot !== false)
            writer.tag(21, WireType.Varint).bool(message.scatterShot);
        /* int32 barrage = 22; */
        if (message.barrage !== 0)
            writer.tag(22, WireType.Varint).int32(message.barrage);
        /* int32 combat_experience = 23; */
        if (message.combatExperience !== 0)
            writer.tag(23, WireType.Varint).int32(message.combatExperience);
        /* int32 ranged_weapon_specialization = 24; */
        if (message.rangedWeaponSpecialization !== 0)
            writer.tag(24, WireType.Varint).int32(message.rangedWeaponSpecialization);
        /* int32 careful_aim = 25; */
        if (message.carefulAim !== 0)
            writer.tag(25, WireType.Varint).int32(message.carefulAim);
        /* bool trueshot_aura = 26; */
        if (message.trueshotAura !== false)
            writer.tag(26, WireType.Varint).bool(message.trueshotAura);
        /* int32 improved_barrage = 27; */
        if (message.improvedBarrage !== 0)
            writer.tag(27, WireType.Varint).int32(message.improvedBarrage);
        /* int32 master_marksman = 28; */
        if (message.masterMarksman !== 0)
            writer.tag(28, WireType.Varint).int32(message.masterMarksman);
        /* bool silencing_shot = 29; */
        if (message.silencingShot !== false)
            writer.tag(29, WireType.Varint).bool(message.silencingShot);
        /* int32 monster_slaying = 30; */
        if (message.monsterSlaying !== 0)
            writer.tag(30, WireType.Varint).int32(message.monsterSlaying);
        /* int32 humanoid_slaying = 31; */
        if (message.humanoidSlaying !== 0)
            writer.tag(31, WireType.Varint).int32(message.humanoidSlaying);
        /* int32 savage_strikes = 32; */
        if (message.savageStrikes !== 0)
            writer.tag(32, WireType.Varint).int32(message.savageStrikes);
        /* int32 deflection = 46; */
        if (message.deflection !== 0)
            writer.tag(46, WireType.Varint).int32(message.deflection);
        /* int32 clever_traps = 33; */
        if (message.cleverTraps !== 0)
            writer.tag(33, WireType.Varint).int32(message.cleverTraps);
        /* int32 survivalist = 34; */
        if (message.survivalist !== 0)
            writer.tag(34, WireType.Varint).int32(message.survivalist);
        /* int32 trap_mastery = 35; */
        if (message.trapMastery !== 0)
            writer.tag(35, WireType.Varint).int32(message.trapMastery);
        /* int32 surefooted = 36; */
        if (message.surefooted !== 0)
            writer.tag(36, WireType.Varint).int32(message.surefooted);
        /* int32 survival_instincts = 37; */
        if (message.survivalInstincts !== 0)
            writer.tag(37, WireType.Varint).int32(message.survivalInstincts);
        /* int32 killer_instinct = 38; */
        if (message.killerInstinct !== 0)
            writer.tag(38, WireType.Varint).int32(message.killerInstinct);
        /* int32 resourcefulness = 39; */
        if (message.resourcefulness !== 0)
            writer.tag(39, WireType.Varint).int32(message.resourcefulness);
        /* int32 lightning_reflexes = 40; */
        if (message.lightningReflexes !== 0)
            writer.tag(40, WireType.Varint).int32(message.lightningReflexes);
        /* int32 thrill_of_the_hunt = 41; */
        if (message.thrillOfTheHunt !== 0)
            writer.tag(41, WireType.Varint).int32(message.thrillOfTheHunt);
        /* int32 expose_weakness = 42; */
        if (message.exposeWeakness !== 0)
            writer.tag(42, WireType.Varint).int32(message.exposeWeakness);
        /* int32 master_tactician = 43; */
        if (message.masterTactician !== 0)
            writer.tag(43, WireType.Varint).int32(message.masterTactician);
        /* bool readiness = 44; */
        if (message.readiness !== false)
            writer.tag(44, WireType.Varint).bool(message.readiness);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.HunterTalents
 */
export const HunterTalents = new HunterTalents$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HunterPetTalents$Type extends MessageType {
    constructor() {
        super("proto.HunterPetTalents", [
            { no: 1, name: "cobra_reflexes", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "dive", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "great_stamina", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "natural_armor", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "boars_speed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "mobility", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "owls_focus", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "spiked_collar", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "culling_the_herd", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "lionhearted", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "carrion_feeder", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "great_resistance", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "cornered", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "feeding_frenzy", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "wolverine_bite", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 16, name: "roar_of_recovery", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 17, name: "bullheaded", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 18, name: "grace_of_the_mantis", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 19, name: "wild_hunt", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 20, name: "roar_of_sacrifice", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 21, name: "improved_cower", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 22, name: "bloodthirsty", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 23, name: "heart_of_the_pheonix", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 24, name: "spiders_bite", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 25, name: "rabid", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 26, name: "lick_your_wounds", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 27, name: "call_of_the_wild", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 28, name: "shark_attack", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 29, name: "charge", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 30, name: "blood_of_the_rhino", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 31, name: "pet_barding", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 32, name: "guard_dog", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 33, name: "thunderstomp", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 34, name: "last_stand", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 35, name: "taunt", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 36, name: "intervene", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 37, name: "silverback", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { cobraReflexes: 0, dive: false, greatStamina: 0, naturalArmor: 0, boarsSpeed: false, mobility: 0, owlsFocus: 0, spikedCollar: 0, cullingTheHerd: 0, lionhearted: 0, carrionFeeder: false, greatResistance: 0, cornered: 0, feedingFrenzy: 0, wolverineBite: false, roarOfRecovery: false, bullheaded: false, graceOfTheMantis: 0, wildHunt: 0, roarOfSacrifice: false, improvedCower: 0, bloodthirsty: 0, heartOfThePheonix: false, spidersBite: 0, rabid: false, lickYourWounds: false, callOfTheWild: false, sharkAttack: 0, charge: false, bloodOfTheRhino: 0, petBarding: 0, guardDog: 0, thunderstomp: false, lastStand: false, taunt: false, intervene: false, silverback: 0 };
        Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 cobra_reflexes */ 1:
                    message.cobraReflexes = reader.int32();
                    break;
                case /* bool dive */ 2:
                    message.dive = reader.bool();
                    break;
                case /* int32 great_stamina */ 3:
                    message.greatStamina = reader.int32();
                    break;
                case /* int32 natural_armor */ 4:
                    message.naturalArmor = reader.int32();
                    break;
                case /* bool boars_speed */ 5:
                    message.boarsSpeed = reader.bool();
                    break;
                case /* int32 mobility */ 6:
                    message.mobility = reader.int32();
                    break;
                case /* int32 owls_focus */ 7:
                    message.owlsFocus = reader.int32();
                    break;
                case /* int32 spiked_collar */ 8:
                    message.spikedCollar = reader.int32();
                    break;
                case /* int32 culling_the_herd */ 9:
                    message.cullingTheHerd = reader.int32();
                    break;
                case /* int32 lionhearted */ 10:
                    message.lionhearted = reader.int32();
                    break;
                case /* bool carrion_feeder */ 11:
                    message.carrionFeeder = reader.bool();
                    break;
                case /* int32 great_resistance */ 12:
                    message.greatResistance = reader.int32();
                    break;
                case /* int32 cornered */ 13:
                    message.cornered = reader.int32();
                    break;
                case /* int32 feeding_frenzy */ 14:
                    message.feedingFrenzy = reader.int32();
                    break;
                case /* bool wolverine_bite */ 15:
                    message.wolverineBite = reader.bool();
                    break;
                case /* bool roar_of_recovery */ 16:
                    message.roarOfRecovery = reader.bool();
                    break;
                case /* bool bullheaded */ 17:
                    message.bullheaded = reader.bool();
                    break;
                case /* int32 grace_of_the_mantis */ 18:
                    message.graceOfTheMantis = reader.int32();
                    break;
                case /* int32 wild_hunt */ 19:
                    message.wildHunt = reader.int32();
                    break;
                case /* bool roar_of_sacrifice */ 20:
                    message.roarOfSacrifice = reader.bool();
                    break;
                case /* int32 improved_cower */ 21:
                    message.improvedCower = reader.int32();
                    break;
                case /* int32 bloodthirsty */ 22:
                    message.bloodthirsty = reader.int32();
                    break;
                case /* bool heart_of_the_pheonix */ 23:
                    message.heartOfThePheonix = reader.bool();
                    break;
                case /* int32 spiders_bite */ 24:
                    message.spidersBite = reader.int32();
                    break;
                case /* bool rabid */ 25:
                    message.rabid = reader.bool();
                    break;
                case /* bool lick_your_wounds */ 26:
                    message.lickYourWounds = reader.bool();
                    break;
                case /* bool call_of_the_wild */ 27:
                    message.callOfTheWild = reader.bool();
                    break;
                case /* int32 shark_attack */ 28:
                    message.sharkAttack = reader.int32();
                    break;
                case /* bool charge */ 29:
                    message.charge = reader.bool();
                    break;
                case /* int32 blood_of_the_rhino */ 30:
                    message.bloodOfTheRhino = reader.int32();
                    break;
                case /* int32 pet_barding */ 31:
                    message.petBarding = reader.int32();
                    break;
                case /* int32 guard_dog */ 32:
                    message.guardDog = reader.int32();
                    break;
                case /* bool thunderstomp */ 33:
                    message.thunderstomp = reader.bool();
                    break;
                case /* bool last_stand */ 34:
                    message.lastStand = reader.bool();
                    break;
                case /* bool taunt */ 35:
                    message.taunt = reader.bool();
                    break;
                case /* bool intervene */ 36:
                    message.intervene = reader.bool();
                    break;
                case /* int32 silverback */ 37:
                    message.silverback = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 cobra_reflexes = 1; */
        if (message.cobraReflexes !== 0)
            writer.tag(1, WireType.Varint).int32(message.cobraReflexes);
        /* bool dive = 2; */
        if (message.dive !== false)
            writer.tag(2, WireType.Varint).bool(message.dive);
        /* int32 great_stamina = 3; */
        if (message.greatStamina !== 0)
            writer.tag(3, WireType.Varint).int32(message.greatStamina);
        /* int32 natural_armor = 4; */
        if (message.naturalArmor !== 0)
            writer.tag(4, WireType.Varint).int32(message.naturalArmor);
        /* bool boars_speed = 5; */
        if (message.boarsSpeed !== false)
            writer.tag(5, WireType.Varint).bool(message.boarsSpeed);
        /* int32 mobility = 6; */
        if (message.mobility !== 0)
            writer.tag(6, WireType.Varint).int32(message.mobility);
        /* int32 owls_focus = 7; */
        if (message.owlsFocus !== 0)
            writer.tag(7, WireType.Varint).int32(message.owlsFocus);
        /* int32 spiked_collar = 8; */
        if (message.spikedCollar !== 0)
            writer.tag(8, WireType.Varint).int32(message.spikedCollar);
        /* int32 culling_the_herd = 9; */
        if (message.cullingTheHerd !== 0)
            writer.tag(9, WireType.Varint).int32(message.cullingTheHerd);
        /* int32 lionhearted = 10; */
        if (message.lionhearted !== 0)
            writer.tag(10, WireType.Varint).int32(message.lionhearted);
        /* bool carrion_feeder = 11; */
        if (message.carrionFeeder !== false)
            writer.tag(11, WireType.Varint).bool(message.carrionFeeder);
        /* int32 great_resistance = 12; */
        if (message.greatResistance !== 0)
            writer.tag(12, WireType.Varint).int32(message.greatResistance);
        /* int32 cornered = 13; */
        if (message.cornered !== 0)
            writer.tag(13, WireType.Varint).int32(message.cornered);
        /* int32 feeding_frenzy = 14; */
        if (message.feedingFrenzy !== 0)
            writer.tag(14, WireType.Varint).int32(message.feedingFrenzy);
        /* bool wolverine_bite = 15; */
        if (message.wolverineBite !== false)
            writer.tag(15, WireType.Varint).bool(message.wolverineBite);
        /* bool roar_of_recovery = 16; */
        if (message.roarOfRecovery !== false)
            writer.tag(16, WireType.Varint).bool(message.roarOfRecovery);
        /* bool bullheaded = 17; */
        if (message.bullheaded !== false)
            writer.tag(17, WireType.Varint).bool(message.bullheaded);
        /* int32 grace_of_the_mantis = 18; */
        if (message.graceOfTheMantis !== 0)
            writer.tag(18, WireType.Varint).int32(message.graceOfTheMantis);
        /* int32 wild_hunt = 19; */
        if (message.wildHunt !== 0)
            writer.tag(19, WireType.Varint).int32(message.wildHunt);
        /* bool roar_of_sacrifice = 20; */
        if (message.roarOfSacrifice !== false)
            writer.tag(20, WireType.Varint).bool(message.roarOfSacrifice);
        /* int32 improved_cower = 21; */
        if (message.improvedCower !== 0)
            writer.tag(21, WireType.Varint).int32(message.improvedCower);
        /* int32 bloodthirsty = 22; */
        if (message.bloodthirsty !== 0)
            writer.tag(22, WireType.Varint).int32(message.bloodthirsty);
        /* bool heart_of_the_pheonix = 23; */
        if (message.heartOfThePheonix !== false)
            writer.tag(23, WireType.Varint).bool(message.heartOfThePheonix);
        /* int32 spiders_bite = 24; */
        if (message.spidersBite !== 0)
            writer.tag(24, WireType.Varint).int32(message.spidersBite);
        /* bool rabid = 25; */
        if (message.rabid !== false)
            writer.tag(25, WireType.Varint).bool(message.rabid);
        /* bool lick_your_wounds = 26; */
        if (message.lickYourWounds !== false)
            writer.tag(26, WireType.Varint).bool(message.lickYourWounds);
        /* bool call_of_the_wild = 27; */
        if (message.callOfTheWild !== false)
            writer.tag(27, WireType.Varint).bool(message.callOfTheWild);
        /* int32 shark_attack = 28; */
        if (message.sharkAttack !== 0)
            writer.tag(28, WireType.Varint).int32(message.sharkAttack);
        /* bool charge = 29; */
        if (message.charge !== false)
            writer.tag(29, WireType.Varint).bool(message.charge);
        /* int32 blood_of_the_rhino = 30; */
        if (message.bloodOfTheRhino !== 0)
            writer.tag(30, WireType.Varint).int32(message.bloodOfTheRhino);
        /* int32 pet_barding = 31; */
        if (message.petBarding !== 0)
            writer.tag(31, WireType.Varint).int32(message.petBarding);
        /* int32 guard_dog = 32; */
        if (message.guardDog !== 0)
            writer.tag(32, WireType.Varint).int32(message.guardDog);
        /* bool thunderstomp = 33; */
        if (message.thunderstomp !== false)
            writer.tag(33, WireType.Varint).bool(message.thunderstomp);
        /* bool last_stand = 34; */
        if (message.lastStand !== false)
            writer.tag(34, WireType.Varint).bool(message.lastStand);
        /* bool taunt = 35; */
        if (message.taunt !== false)
            writer.tag(35, WireType.Varint).bool(message.taunt);
        /* bool intervene = 36; */
        if (message.intervene !== false)
            writer.tag(36, WireType.Varint).bool(message.intervene);
        /* int32 silverback = 37; */
        if (message.silverback !== 0)
            writer.tag(37, WireType.Varint).int32(message.silverback);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.HunterPetTalents
 */
export const HunterPetTalents = new HunterPetTalents$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Hunter$Type extends MessageType {
    constructor() {
        super("proto.Hunter", [
            { no: 1, name: "rotation", kind: "message", T: () => Hunter_Rotation },
            { no: 2, name: "talents", kind: "message", T: () => HunterTalents },
            { no: 3, name: "options", kind: "message", T: () => Hunter_Options }
        ]);
    }
    create(value) {
        const message = {};
        Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* proto.Hunter.Rotation rotation */ 1:
                    message.rotation = Hunter_Rotation.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* proto.HunterTalents talents */ 2:
                    message.talents = HunterTalents.internalBinaryRead(reader, reader.uint32(), options, message.talents);
                    break;
                case /* proto.Hunter.Options options */ 3:
                    message.options = Hunter_Options.internalBinaryRead(reader, reader.uint32(), options, message.options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* proto.Hunter.Rotation rotation = 1; */
        if (message.rotation)
            Hunter_Rotation.internalBinaryWrite(message.rotation, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* proto.HunterTalents talents = 2; */
        if (message.talents)
            HunterTalents.internalBinaryWrite(message.talents, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* proto.Hunter.Options options = 3; */
        if (message.options)
            Hunter_Options.internalBinaryWrite(message.options, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Hunter
 */
export const Hunter = new Hunter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Hunter_Rotation$Type extends MessageType {
    constructor() {
        super("proto.Hunter.Rotation", [
            { no: 1, name: "use_multi_shot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "use_arcane_shot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "precast_aimed_shot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "lazy_rotation", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "sting", kind: "enum", T: () => ["proto.Hunter.Rotation.StingType", Hunter_Rotation_StingType] },
            { no: 6, name: "viper_start_mana_percent", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 7, name: "viper_stop_mana_percent", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 11, name: "weave", kind: "enum", T: () => ["proto.Hunter.Rotation.WeaveType", Hunter_Rotation_WeaveType] },
            { no: 9, name: "time_to_weave_ms", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "percent_weaved", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value) {
        const message = { useMultiShot: false, useArcaneShot: false, precastAimedShot: false, lazyRotation: false, sting: 0, viperStartManaPercent: 0, viperStopManaPercent: 0, weave: 0, timeToWeaveMs: 0, percentWeaved: 0 };
        Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool use_multi_shot */ 1:
                    message.useMultiShot = reader.bool();
                    break;
                case /* bool use_arcane_shot */ 2:
                    message.useArcaneShot = reader.bool();
                    break;
                case /* bool precast_aimed_shot */ 3:
                    message.precastAimedShot = reader.bool();
                    break;
                case /* bool lazy_rotation */ 12:
                    message.lazyRotation = reader.bool();
                    break;
                case /* proto.Hunter.Rotation.StingType sting */ 5:
                    message.sting = reader.int32();
                    break;
                case /* double viper_start_mana_percent */ 6:
                    message.viperStartManaPercent = reader.double();
                    break;
                case /* double viper_stop_mana_percent */ 7:
                    message.viperStopManaPercent = reader.double();
                    break;
                case /* proto.Hunter.Rotation.WeaveType weave */ 11:
                    message.weave = reader.int32();
                    break;
                case /* int32 time_to_weave_ms */ 9:
                    message.timeToWeaveMs = reader.int32();
                    break;
                case /* double percent_weaved */ 10:
                    message.percentWeaved = reader.double();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool use_multi_shot = 1; */
        if (message.useMultiShot !== false)
            writer.tag(1, WireType.Varint).bool(message.useMultiShot);
        /* bool use_arcane_shot = 2; */
        if (message.useArcaneShot !== false)
            writer.tag(2, WireType.Varint).bool(message.useArcaneShot);
        /* bool precast_aimed_shot = 3; */
        if (message.precastAimedShot !== false)
            writer.tag(3, WireType.Varint).bool(message.precastAimedShot);
        /* bool lazy_rotation = 12; */
        if (message.lazyRotation !== false)
            writer.tag(12, WireType.Varint).bool(message.lazyRotation);
        /* proto.Hunter.Rotation.StingType sting = 5; */
        if (message.sting !== 0)
            writer.tag(5, WireType.Varint).int32(message.sting);
        /* double viper_start_mana_percent = 6; */
        if (message.viperStartManaPercent !== 0)
            writer.tag(6, WireType.Bit64).double(message.viperStartManaPercent);
        /* double viper_stop_mana_percent = 7; */
        if (message.viperStopManaPercent !== 0)
            writer.tag(7, WireType.Bit64).double(message.viperStopManaPercent);
        /* proto.Hunter.Rotation.WeaveType weave = 11; */
        if (message.weave !== 0)
            writer.tag(11, WireType.Varint).int32(message.weave);
        /* int32 time_to_weave_ms = 9; */
        if (message.timeToWeaveMs !== 0)
            writer.tag(9, WireType.Varint).int32(message.timeToWeaveMs);
        /* double percent_weaved = 10; */
        if (message.percentWeaved !== 0)
            writer.tag(10, WireType.Bit64).double(message.percentWeaved);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Hunter.Rotation
 */
export const Hunter_Rotation = new Hunter_Rotation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Hunter_Options$Type extends MessageType {
    constructor() {
        super("proto.Hunter.Options", [
            { no: 1, name: "quiver_bonus", kind: "enum", T: () => ["proto.Hunter.Options.QuiverBonus", Hunter_Options_QuiverBonus] },
            { no: 2, name: "ammo", kind: "enum", T: () => ["proto.Hunter.Options.Ammo", Hunter_Options_Ammo] },
            { no: 3, name: "pet_type", kind: "enum", T: () => ["proto.Hunter.Options.PetType", Hunter_Options_PetType] },
            { no: 8, name: "pet_talents", kind: "message", T: () => HunterPetTalents },
            { no: 4, name: "pet_uptime", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 6, name: "pet_single_ability", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "latency_ms", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "remove_randomness", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { quiverBonus: 0, ammo: 0, petType: 0, petUptime: 0, petSingleAbility: false, latencyMs: 0, removeRandomness: false };
        Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* proto.Hunter.Options.QuiverBonus quiver_bonus */ 1:
                    message.quiverBonus = reader.int32();
                    break;
                case /* proto.Hunter.Options.Ammo ammo */ 2:
                    message.ammo = reader.int32();
                    break;
                case /* proto.Hunter.Options.PetType pet_type */ 3:
                    message.petType = reader.int32();
                    break;
                case /* proto.HunterPetTalents pet_talents */ 8:
                    message.petTalents = HunterPetTalents.internalBinaryRead(reader, reader.uint32(), options, message.petTalents);
                    break;
                case /* double pet_uptime */ 4:
                    message.petUptime = reader.double();
                    break;
                case /* bool pet_single_ability */ 6:
                    message.petSingleAbility = reader.bool();
                    break;
                case /* int32 latency_ms */ 5:
                    message.latencyMs = reader.int32();
                    break;
                case /* bool remove_randomness */ 7:
                    message.removeRandomness = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* proto.Hunter.Options.QuiverBonus quiver_bonus = 1; */
        if (message.quiverBonus !== 0)
            writer.tag(1, WireType.Varint).int32(message.quiverBonus);
        /* proto.Hunter.Options.Ammo ammo = 2; */
        if (message.ammo !== 0)
            writer.tag(2, WireType.Varint).int32(message.ammo);
        /* proto.Hunter.Options.PetType pet_type = 3; */
        if (message.petType !== 0)
            writer.tag(3, WireType.Varint).int32(message.petType);
        /* proto.HunterPetTalents pet_talents = 8; */
        if (message.petTalents)
            HunterPetTalents.internalBinaryWrite(message.petTalents, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* double pet_uptime = 4; */
        if (message.petUptime !== 0)
            writer.tag(4, WireType.Bit64).double(message.petUptime);
        /* bool pet_single_ability = 6; */
        if (message.petSingleAbility !== false)
            writer.tag(6, WireType.Varint).bool(message.petSingleAbility);
        /* int32 latency_ms = 5; */
        if (message.latencyMs !== 0)
            writer.tag(5, WireType.Varint).int32(message.latencyMs);
        /* bool remove_randomness = 7; */
        if (message.removeRandomness !== false)
            writer.tag(7, WireType.Varint).bool(message.removeRandomness);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message proto.Hunter.Options
 */
export const Hunter_Options = new Hunter_Options$Type();

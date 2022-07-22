import { HunterPetTalents, Hunter_Options_PetType as PetType } from '/wotlk/core/proto/hunter.js';
import { Component } from '/wotlk/core/components/component.js';
import { SavedDataManager } from '/wotlk/core/components/saved_data_manager.js';
import { TypedEvent } from '/wotlk/core/typed_event.js';
import { TalentsPicker, newTalentsConfig } from './talents_picker.js';
import { protoToTalentString, talentStringToProto } from './factory.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
export function makePetTypeInputConfig(includeLabel) {
    return InputHelpers.makeSpecOptionsEnumInput({
        fieldName: 'petType',
        label: includeLabel ? 'Pet' : '',
        values: [
            { name: 'None', value: PetType.PetNone },
            { name: 'Bat', value: PetType.Bat },
            { name: 'Bear', value: PetType.Bear },
            { name: 'Bird of Prey', value: PetType.BirdOfPrey },
            { name: 'Boar', value: PetType.Boar },
            { name: 'Carrion Bird', value: PetType.CarrionBird },
            { name: 'Cat', value: PetType.Cat },
            { name: 'Cat', value: PetType.Cat },
            { name: 'Chimaera', value: PetType.Chimaera },
            { name: 'Core Hound', value: PetType.CoreHound },
            { name: 'Crab', value: PetType.Crab },
            { name: 'Crab', value: PetType.Crab },
            { name: 'Crocolisk', value: PetType.Crocolisk },
            { name: 'Devilsaur', value: PetType.Devilsaur },
            { name: 'Dragonhawk', value: PetType.Dragonhawk },
            { name: 'Gorilla', value: PetType.Gorilla },
            { name: 'Hyena', value: PetType.Hyena },
            { name: 'Moth', value: PetType.Moth },
            { name: 'Nether Ray', value: PetType.NetherRay },
            { name: 'Raptor', value: PetType.Raptor },
            { name: 'Raptor', value: PetType.Raptor },
            { name: 'Ravager', value: PetType.Ravager },
            { name: 'Ravager', value: PetType.Ravager },
            { name: 'Rhino', value: PetType.Rhino },
            { name: 'Scorpid', value: PetType.Scorpid },
            { name: 'Serpent', value: PetType.Serpent },
            { name: 'Silithid', value: PetType.Silithid },
            { name: 'Spider', value: PetType.Spider },
            { name: 'Spirit Beast', value: PetType.SpiritBeast },
            { name: 'Spore Bat', value: PetType.SporeBat },
            { name: 'Tallstrider', value: PetType.Tallstrider },
            { name: 'Turtle', value: PetType.Turtle },
            { name: 'Warp Stalker', value: PetType.WarpStalker },
            { name: 'Wasp', value: PetType.Wasp },
            { name: 'Wind Serpent', value: PetType.WindSerpent },
            { name: 'Wolf', value: PetType.Wolf },
            { name: 'Worm', value: PetType.Worm },
        ],
    });
}
var PetCategory;
(function (PetCategory) {
    PetCategory[PetCategory["Cunning"] = 0] = "Cunning";
    PetCategory[PetCategory["Ferocity"] = 1] = "Ferocity";
    PetCategory[PetCategory["Tenacity"] = 2] = "Tenacity";
})(PetCategory || (PetCategory = {}));
const petCategories = {
    [PetType.PetNone]: PetCategory.Ferocity,
    [PetType.Bat]: PetCategory.Cunning,
    [PetType.Bear]: PetCategory.Tenacity,
    [PetType.BirdOfPrey]: PetCategory.Cunning,
    [PetType.Boar]: PetCategory.Tenacity,
    [PetType.CarrionBird]: PetCategory.Ferocity,
    [PetType.Cat]: PetCategory.Ferocity,
    [PetType.Chimaera]: PetCategory.Cunning,
    [PetType.CoreHound]: PetCategory.Ferocity,
    [PetType.Crab]: PetCategory.Tenacity,
    [PetType.Crocolisk]: PetCategory.Tenacity,
    [PetType.Devilsaur]: PetCategory.Ferocity,
    [PetType.Dragonhawk]: PetCategory.Cunning,
    [PetType.Gorilla]: PetCategory.Tenacity,
    [PetType.Hyena]: PetCategory.Ferocity,
    [PetType.Moth]: PetCategory.Ferocity,
    [PetType.NetherRay]: PetCategory.Cunning,
    [PetType.Raptor]: PetCategory.Ferocity,
    [PetType.Ravager]: PetCategory.Cunning,
    [PetType.Rhino]: PetCategory.Tenacity,
    [PetType.Scorpid]: PetCategory.Tenacity,
    [PetType.Serpent]: PetCategory.Cunning,
    [PetType.Silithid]: PetCategory.Cunning,
    [PetType.Spider]: PetCategory.Cunning,
    [PetType.SpiritBeast]: PetCategory.Ferocity,
    [PetType.SporeBat]: PetCategory.Cunning,
    [PetType.Tallstrider]: PetCategory.Ferocity,
    [PetType.Turtle]: PetCategory.Tenacity,
    [PetType.WarpStalker]: PetCategory.Tenacity,
    [PetType.Wasp]: PetCategory.Ferocity,
    [PetType.WindSerpent]: PetCategory.Cunning,
    [PetType.Wolf]: PetCategory.Ferocity,
    [PetType.Worm]: PetCategory.Tenacity,
};
const categoryOrder = [PetCategory.Cunning, PetCategory.Ferocity, PetCategory.Tenacity];
const categoryClasses = ['cunning', 'ferocity', 'tenacity'];
export class HunterPetTalentsPicker extends Component {
    constructor(parent, player) {
        super(parent, 'hunter-pet-talents-picker');
        this.player = player;
        this.rootElem.innerHTML = `
			<div class="pet-talents-container"></div>
		`;
        this.curCategory = this.getCategoryFromPlayer();
        this.curTalents = this.getPetTalentsFromPlayer();
        this.savedSets = defaultTalents.slice();
        this.savedSets[this.curCategory] = this.curTalents;
        this.rootElem.classList.add(categoryClasses[this.curCategory]);
        const talentsContainer = this.rootElem.getElementsByClassName('pet-talents-container')[0];
        const pickers = categoryOrder.map((category, i) => {
            const talentsConfig = petTalentsConfig[i];
            const pickerContainer = document.createElement('div');
            pickerContainer.classList.add('hunter-pet-talents-' + categoryClasses[i]);
            talentsContainer.appendChild(pickerContainer);
            const picker = new TalentsPicker(pickerContainer, player, {
                trees: talentsConfig,
                changedEvent: (player) => player.specOptionsChangeEmitter,
                getValue: (player) => protoToTalentString(this.getPetTalentsFromPlayer(), talentsConfig),
                setValue: (eventID, player, newValue) => {
                    const options = player.getSpecOptions();
                    options.petTalents = talentStringToProto(HunterPetTalents.create(), newValue, talentsConfig);
                    player.setSpecOptions(eventID, options);
                    this.savedSets[i] = options.petTalents;
                    this.curTalents = options.petTalents;
                },
                pointsPerRow: 3,
                maxPoints: 16,
            });
            const savedTalentsManager = new SavedDataManager(pickerContainer, this.player, {
                presetsOnly: true,
                label: 'Pet Talents',
                storageKey: '__NEVER_USED__',
                getData: (player) => protoToTalentString(this.getPetTalentsFromPlayer(), talentsConfig),
                setData: (eventID, player, newValue) => {
                    const options = player.getSpecOptions();
                    options.petTalents = talentStringToProto(HunterPetTalents.create(), newValue, talentsConfig);
                    player.setSpecOptions(eventID, options);
                    this.savedSets[i] = options.petTalents;
                    this.curTalents = options.petTalents;
                },
                changeEmitters: [this.player.specOptionsChangeEmitter],
                equals: (a, b) => a == b,
                toJson: (a) => a,
                fromJson: (obj) => '',
            });
            savedTalentsManager.addSavedData({
                name: 'Default',
                isPreset: true,
                data: protoToTalentString(defaultTalents[i], talentsConfig),
            });
            savedTalentsManager.addSavedData({
                name: 'BM',
                isPreset: true,
                data: protoToTalentString(defaultBMTalents[i], talentsConfig),
            });
            return picker;
        });
        player.specOptionsChangeEmitter.on(() => {
            const petCategory = this.getCategoryFromPlayer();
            const categoryIdx = categoryOrder.indexOf(petCategory);
            if (petCategory != this.curCategory) {
                this.curCategory = petCategory;
                this.rootElem.classList.remove(...categoryClasses);
                this.rootElem.classList.add(categoryClasses[categoryIdx]);
                const curTalents = this.getPetTalentsFromPlayer();
                if (!HunterPetTalents.equals(curTalents, this.curTalents)) {
                    // If the current talents have also changed, this was probably a load so we shouldn't switch sets.
                    this.curTalents = curTalents;
                    this.savedSets[this.curCategory] = this.curTalents;
                }
                else {
                    // Revert to the talents from last time the user was editing this category.
                    const options = this.player.getSpecOptions();
                    options.petTalents = this.savedSets[this.curCategory];
                    this.player.setSpecOptions(TypedEvent.nextEventID(), options);
                    this.curTalents = options.petTalents;
                }
            }
        });
        const updateIsBM = () => {
            const maxPoints = this.player.getTalents().beastMastery ? 20 : 16;
            pickers.forEach(picker => picker.setMaxPoints(maxPoints));
        };
        player.talentsChangeEmitter.on(updateIsBM);
        updateIsBM();
    }
    getPetTalentsFromPlayer() {
        return this.player.getSpecOptions().petTalents || HunterPetTalents.create();
    }
    getCategoryFromPlayer() {
        const petType = this.player.getSpecOptions().petType;
        return petCategories[petType];
    }
}
export const cunningDefault = HunterPetTalents.create({
    cobraReflexes: 2,
    dive: true,
    boarsSpeed: true,
    mobility: 2,
    spikedCollar: 3,
    cornered: 2,
    feedingFrenzy: 2,
    wolverineBite: true,
    bullheaded: true,
    wildHunt: 1,
});
export const ferocityDefault = HunterPetTalents.create({
    cobraReflexes: 2,
    dive: true,
    spikedCollar: 3,
    boarsSpeed: true,
    cullingTheHerd: 3,
    spidersBite: 3,
    rabid: true,
    callOfTheWild: true,
    wildHunt: 1,
});
export const tenacityDefault = HunterPetTalents.create({
    cobraReflexes: 2,
    charge: true,
    greatStamina: 3,
    bloodOfTheRhino: 2,
    guardDog: 2,
    thunderstomp: true,
    graceOfTheMantis: 2,
    taunt: true,
    roarOfSacrifice: true,
    wildHunt: 1,
});
const defaultTalents = [cunningDefault, ferocityDefault, tenacityDefault];
const cunningBMDefault = HunterPetTalents.create({
    cobraReflexes: 2,
    dive: true,
    boarsSpeed: true,
    mobility: 2,
    spikedCollar: 3,
    cornered: 2,
    feedingFrenzy: 2,
    wolverineBite: true,
    bullheaded: true,
    graceOfTheMantis: 2,
    wildHunt: 2,
    roarOfSacrifice: true,
});
const ferocityBMDefault = HunterPetTalents.create({
    cobraReflexes: 2,
    dive: true,
    bloodthirsty: 1,
    spikedCollar: 3,
    boarsSpeed: true,
    cullingTheHerd: 3,
    spidersBite: 3,
    rabid: true,
    callOfTheWild: true,
    sharkAttack: 2,
    wildHunt: 2,
});
const tenacityBMDefault = HunterPetTalents.create({
    cobraReflexes: 2,
    charge: true,
    greatStamina: 3,
    spikedCollar: 3,
    bloodOfTheRhino: 2,
    guardDog: 2,
    thunderstomp: true,
    graceOfTheMantis: 2,
    taunt: true,
    roarOfSacrifice: true,
    wildHunt: 2,
});
const defaultBMTalents = [cunningBMDefault, ferocityBMDefault, tenacityBMDefault];
const cunningPetTalentsConfig = newTalentsConfig([
    {
        name: 'Cunning',
        backgroundUrl: 'https://wotlkdb.com/static/images/wow/hunterpettalents/bg_3.jpg?85',
        talents: [
            {
                fieldName: 'cobraReflexes',
                location: {
                    rowIdx: 0,
                    colIdx: 0,
                },
                spellIds: [61682],
                maxPoints: 2,
            },
            {
                fieldName: 'dive',
                location: {
                    rowIdx: 0,
                    colIdx: 1,
                },
                spellIds: [23145],
                maxPoints: 1,
            },
            {
                fieldName: 'greatStamina',
                location: {
                    rowIdx: 0,
                    colIdx: 2,
                },
                spellIds: [61686],
                maxPoints: 3,
            },
            {
                fieldName: 'naturalArmor',
                location: {
                    rowIdx: 0,
                    colIdx: 3,
                },
                spellIds: [61689],
                maxPoints: 2,
            },
            {
                fieldName: 'boarsSpeed',
                location: {
                    rowIdx: 1,
                    colIdx: 0,
                },
                spellIds: [19596],
                maxPoints: 1,
            },
            {
                fieldName: 'mobility',
                location: {
                    rowIdx: 1,
                    colIdx: 1,
                },
                prereqLocation: {
                    rowIdx: 0,
                    colIdx: 1,
                },
                spellIds: [53554],
                maxPoints: 2,
            },
            {
                fieldName: 'owlsFocus',
                location: {
                    rowIdx: 1,
                    colIdx: 2,
                },
                spellIds: [53514, 53516],
                maxPoints: 2,
            },
            {
                fieldName: 'spikedCollar',
                location: {
                    rowIdx: 1,
                    colIdx: 3,
                },
                spellIds: [53182],
                maxPoints: 3,
            },
            {
                fieldName: 'cullingTheHerd',
                location: {
                    rowIdx: 2,
                    colIdx: 0,
                },
                spellIds: [61680, 61681, 52858],
                maxPoints: 3,
            },
            {
                fieldName: 'lionhearted',
                location: {
                    rowIdx: 2,
                    colIdx: 1,
                },
                spellIds: [53409, 53411],
                maxPoints: 2,
            },
            {
                fieldName: 'carrionFeeder',
                location: {
                    rowIdx: 2,
                    colIdx: 2,
                },
                spellIds: [54044],
                maxPoints: 1,
            },
            {
                fieldName: 'greatResistance',
                location: {
                    rowIdx: 3,
                    colIdx: 1,
                },
                spellIds: [53427, 53429],
                maxPoints: 3,
            },
            {
                fieldName: 'cornered',
                location: {
                    rowIdx: 3,
                    colIdx: 2,
                },
                spellIds: [52234, 53497],
                maxPoints: 2,
            },
            {
                fieldName: 'feedingFrenzy',
                location: {
                    rowIdx: 3,
                    colIdx: 3,
                },
                prereqLocation: {
                    rowIdx: 1,
                    colIdx: 3,
                },
                spellIds: [53511],
                maxPoints: 2,
            },
            {
                fieldName: 'wolverineBite',
                location: {
                    rowIdx: 4,
                    colIdx: 0,
                },
                spellIds: [53508],
                maxPoints: 1,
            },
            {
                fieldName: 'roarOfRecovery',
                location: {
                    rowIdx: 4,
                    colIdx: 1,
                },
                spellIds: [53517],
                maxPoints: 1,
            },
            {
                fieldName: 'bullheaded',
                location: {
                    rowIdx: 4,
                    colIdx: 2,
                },
                prereqLocation: {
                    rowIdx: 3,
                    colIdx: 2,
                },
                spellIds: [53490],
                maxPoints: 1,
            },
            {
                fieldName: 'graceOfTheMantis',
                location: {
                    rowIdx: 4,
                    colIdx: 3,
                },
                spellIds: [53450],
                maxPoints: 2,
            },
            {
                fieldName: 'wildHunt',
                location: {
                    rowIdx: 5,
                    colIdx: 0,
                },
                prereqLocation: {
                    rowIdx: 4,
                    colIdx: 0,
                },
                spellIds: [62758, 62762],
                maxPoints: 2,
            },
            {
                fieldName: 'roarOfSacrifice',
                location: {
                    rowIdx: 5,
                    colIdx: 3,
                },
                prereqLocation: {
                    rowIdx: 4,
                    colIdx: 3,
                },
                spellIds: [53480],
                maxPoints: 1,
            },
        ],
    },
]);
const ferocityPetTalentsConfig = newTalentsConfig([
    {
        name: 'Ferocity',
        backgroundUrl: 'https://wotlkdb.com/static/images/wow/hunterpettalents/bg_1.jpg?85',
        talents: [
            {
                fieldName: 'cobraReflexes',
                location: {
                    rowIdx: 0,
                    colIdx: 0,
                },
                spellIds: [61682],
                maxPoints: 2,
            },
            {
                fieldName: 'dive',
                location: {
                    rowIdx: 0,
                    colIdx: 1,
                },
                spellIds: [23145],
                maxPoints: 1,
            },
            {
                fieldName: 'greatStamina',
                location: {
                    rowIdx: 0,
                    colIdx: 2,
                },
                spellIds: [61686],
                maxPoints: 3,
            },
            {
                fieldName: 'naturalArmor',
                location: {
                    rowIdx: 0,
                    colIdx: 3,
                },
                spellIds: [61689],
                maxPoints: 2,
            },
            {
                fieldName: 'improvedCower',
                location: {
                    rowIdx: 1,
                    colIdx: 0,
                },
                spellIds: [53180],
                maxPoints: 2,
            },
            {
                fieldName: 'bloodthirsty',
                location: {
                    rowIdx: 1,
                    colIdx: 1,
                },
                spellIds: [53186],
                maxPoints: 2,
            },
            {
                fieldName: 'spikedCollar',
                location: {
                    rowIdx: 1,
                    colIdx: 2,
                },
                spellIds: [53182],
                maxPoints: 3,
            },
            {
                fieldName: 'boarsSpeed',
                location: {
                    rowIdx: 1,
                    colIdx: 3,
                },
                spellIds: [19596],
                maxPoints: 1,
            },
            {
                fieldName: 'cullingTheHerd',
                location: {
                    rowIdx: 2,
                    colIdx: 0,
                },
                spellIds: [61680, 61681, 52858],
                maxPoints: 3,
            },
            {
                fieldName: 'lionhearted',
                location: {
                    rowIdx: 2,
                    colIdx: 2,
                },
                spellIds: [53409, 53411],
                maxPoints: 2,
            },
            {
                fieldName: 'charge',
                location: {
                    rowIdx: 2,
                    colIdx: 3,
                },
                spellIds: [61685],
                maxPoints: 1,
            },
            {
                fieldName: 'heartOfThePheonix',
                location: {
                    rowIdx: 3,
                    colIdx: 1,
                },
                prereqLocation: {
                    rowIdx: 1,
                    colIdx: 1,
                },
                spellIds: [55709],
                maxPoints: 1,
            },
            {
                fieldName: 'spidersBite',
                location: {
                    rowIdx: 3,
                    colIdx: 2,
                },
                spellIds: [53203],
                maxPoints: 3,
            },
            {
                fieldName: 'greatResistance',
                location: {
                    rowIdx: 3,
                    colIdx: 3,
                },
                spellIds: [53427, 53429],
                maxPoints: 3,
            },
            {
                fieldName: 'rabid',
                location: {
                    rowIdx: 4,
                    colIdx: 0,
                },
                spellIds: [53401],
                maxPoints: 1,
            },
            {
                fieldName: 'lickYourWounds',
                location: {
                    rowIdx: 4,
                    colIdx: 1,
                },
                prereqLocation: {
                    rowIdx: 3,
                    colIdx: 1,
                },
                spellIds: [53426],
                maxPoints: 1,
            },
            {
                fieldName: 'callOfTheWild',
                location: {
                    rowIdx: 4,
                    colIdx: 2,
                },
                prereqLocation: {
                    rowIdx: 3,
                    colIdx: 2,
                },
                spellIds: [53434],
                maxPoints: 1,
            },
            {
                fieldName: 'sharkAttack',
                location: {
                    rowIdx: 5,
                    colIdx: 0,
                },
                spellIds: [62759],
                maxPoints: 2,
            },
            {
                fieldName: 'wildHunt',
                location: {
                    rowIdx: 5,
                    colIdx: 2,
                },
                prereqLocation: {
                    rowIdx: 4,
                    colIdx: 2,
                },
                spellIds: [62758, 62762],
                maxPoints: 2,
            },
        ],
    },
]);
const tenacityPetTalentsConfig = newTalentsConfig([
    {
        name: 'Tenacity',
        backgroundUrl: 'https://wotlkdb.com/static/images/wow/hunterpettalents/bg_2.jpg?85',
        talents: [
            {
                fieldName: 'cobraReflexes',
                location: {
                    rowIdx: 0,
                    colIdx: 0,
                },
                spellIds: [61682],
                maxPoints: 2,
            },
            {
                fieldName: 'charge',
                location: {
                    rowIdx: 0,
                    colIdx: 1,
                },
                spellIds: [61685],
                maxPoints: 1,
            },
            {
                fieldName: 'greatStamina',
                location: {
                    rowIdx: 0,
                    colIdx: 2,
                },
                spellIds: [61686],
                maxPoints: 3,
            },
            {
                fieldName: 'naturalArmor',
                location: {
                    rowIdx: 0,
                    colIdx: 3,
                },
                spellIds: [61689],
                maxPoints: 2,
            },
            {
                fieldName: 'spikedCollar',
                location: {
                    rowIdx: 1,
                    colIdx: 0,
                },
                spellIds: [53182],
                maxPoints: 3,
            },
            {
                fieldName: 'boarsSpeed',
                location: {
                    rowIdx: 1,
                    colIdx: 1,
                },
                spellIds: [19596],
                maxPoints: 1,
            },
            {
                fieldName: 'bloodOfTheRhino',
                location: {
                    rowIdx: 1,
                    colIdx: 2,
                },
                prereqLocation: {
                    rowIdx: 0,
                    colIdx: 2,
                },
                spellIds: [53481],
                maxPoints: 2,
            },
            {
                fieldName: 'petBarding',
                location: {
                    rowIdx: 1,
                    colIdx: 3,
                },
                prereqLocation: {
                    rowIdx: 0,
                    colIdx: 3,
                },
                spellIds: [53175],
                maxPoints: 2,
            },
            {
                fieldName: 'cullingTheHerd',
                location: {
                    rowIdx: 2,
                    colIdx: 0,
                },
                spellIds: [61680, 61681, 52858],
                maxPoints: 3,
            },
            {
                fieldName: 'guardDog',
                location: {
                    rowIdx: 2,
                    colIdx: 1,
                },
                spellIds: [53178],
                maxPoints: 2,
            },
            {
                fieldName: 'lionhearted',
                location: {
                    rowIdx: 2,
                    colIdx: 2,
                },
                spellIds: [53409, 53411],
                maxPoints: 2,
            },
            {
                fieldName: 'thunderstomp',
                location: {
                    rowIdx: 2,
                    colIdx: 3,
                },
                spellIds: [63900],
                maxPoints: 1,
            },
            {
                fieldName: 'graceOfTheMantis',
                location: {
                    rowIdx: 3,
                    colIdx: 2,
                },
                spellIds: [53450],
                maxPoints: 2,
            },
            {
                fieldName: 'greatResistance',
                location: {
                    rowIdx: 3,
                    colIdx: 3,
                },
                spellIds: [53427, 53429],
                maxPoints: 3,
            },
            {
                fieldName: 'lastStand',
                location: {
                    rowIdx: 4,
                    colIdx: 0,
                },
                spellIds: [53478],
                maxPoints: 1,
            },
            {
                fieldName: 'taunt',
                location: {
                    rowIdx: 4,
                    colIdx: 1,
                },
                prereqLocation: {
                    rowIdx: 2,
                    colIdx: 1,
                },
                spellIds: [53477],
                maxPoints: 1,
            },
            {
                fieldName: 'roarOfSacrifice',
                location: {
                    rowIdx: 4,
                    colIdx: 2,
                },
                prereqLocation: {
                    rowIdx: 3,
                    colIdx: 2,
                },
                spellIds: [53480],
                maxPoints: 1,
            },
            {
                fieldName: 'intervene',
                location: {
                    rowIdx: 4,
                    colIdx: 3,
                },
                spellIds: [53476],
                maxPoints: 1,
            },
            {
                fieldName: 'silverback',
                location: {
                    rowIdx: 5,
                    colIdx: 1,
                },
                spellIds: [62764],
                maxPoints: 2,
            },
            {
                fieldName: 'wildHunt',
                location: {
                    rowIdx: 5,
                    colIdx: 2,
                },
                prereqLocation: {
                    rowIdx: 4,
                    colIdx: 2,
                },
                spellIds: [62758, 62762],
                maxPoints: 2,
            },
        ],
    },
]);
const petTalentsConfig = [
    cunningPetTalentsConfig,
    ferocityPetTalentsConfig,
    tenacityPetTalentsConfig,
];

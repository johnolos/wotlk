import { Spec } from '/wotlk/core/proto/common.js';
import { HunterPetTalents } from '/wotlk/core/proto/hunter.js';
import { Player } from '/wotlk/core/player.js';
import { Component } from '/wotlk/core/components/component.js';
import { EnumPickerConfig } from '/wotlk/core/components/enum_picker.js';
export declare function makePetTypeInputConfig(includeLabel: boolean): EnumPickerConfig<Player<Spec.SpecHunter>>;
declare enum PetCategory {
    Cunning = 0,
    Ferocity = 1,
    Tenacity = 2
}
export declare class HunterPetTalentsPicker extends Component {
    private readonly player;
    private curCategory;
    private curTalents;
    private savedSets;
    constructor(parent: HTMLElement, player: Player<Spec.SpecHunter>);
    getPetTalentsFromPlayer(): HunterPetTalents;
    getCategoryFromPlayer(): PetCategory;
}
export declare const cunningDefault: HunterPetTalents;
export declare const ferocityDefault: HunterPetTalents;
export declare const tenacityDefault: HunterPetTalents;
export {};

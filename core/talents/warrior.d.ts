import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { TalentsConfig, TalentsPicker } from './talents_picker.js';
export declare class WarriorTalentsPicker extends TalentsPicker<Spec.SpecWarrior> {
    constructor(parent: HTMLElement, player: Player<Spec.SpecWarrior>);
}
export declare const warriorTalentsConfig: TalentsConfig<Spec.SpecWarrior>;

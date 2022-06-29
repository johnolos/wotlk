import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { TalentsConfig, TalentsPicker } from './talents_picker.js';
export declare class ShamanTalentsPicker extends TalentsPicker<Spec.SpecElementalShaman> {
    constructor(parent: HTMLElement, player: Player<Spec.SpecElementalShaman>);
}
export declare const shamanTalentsConfig: TalentsConfig<Spec.SpecElementalShaman>;

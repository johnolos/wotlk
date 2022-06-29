import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { TalentsConfig, TalentsPicker } from './talents_picker.js';
export declare class PaladinTalentsPicker extends TalentsPicker<Spec.SpecRetributionPaladin> {
    constructor(parent: HTMLElement, player: Player<Spec.SpecRetributionPaladin>);
}
export declare const paladinTalentsConfig: TalentsConfig<Spec.SpecRetributionPaladin>;

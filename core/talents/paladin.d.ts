import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { GlyphsConfig, GlyphsPicker } from './glyphs_picker.js';
import { TalentsConfig, TalentsPicker } from './talents_picker.js';
export declare class PaladinTalentsPicker extends TalentsPicker<Spec.SpecRetributionPaladin> {
    constructor(parent: HTMLElement, player: Player<Spec.SpecRetributionPaladin>);
}
export declare class PaladinGlyphsPicker extends GlyphsPicker {
    constructor(parent: HTMLElement, player: Player<any>);
}
export declare const paladinTalentsConfig: TalentsConfig<Spec.SpecRetributionPaladin>;
export declare const paladinGlyphsConfig: GlyphsConfig;

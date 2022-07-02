import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { GlyphsConfig, GlyphsPicker } from './glyphs_picker.js';
import { TalentsConfig, TalentsPicker } from './talents_picker.js';
export declare class HunterTalentsPicker extends TalentsPicker<Spec.SpecHunter> {
    constructor(parent: HTMLElement, player: Player<Spec.SpecHunter>);
}
export declare class HunterGlyphsPicker extends GlyphsPicker {
    constructor(parent: HTMLElement, player: Player<any>);
}
export declare const hunterTalentsConfig: TalentsConfig<Spec.SpecHunter>;
export declare const hunterGlyphsConfig: GlyphsConfig;

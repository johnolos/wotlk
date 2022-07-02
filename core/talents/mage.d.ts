import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { GlyphsConfig, GlyphsPicker } from './glyphs_picker.js';
import { TalentsConfig, TalentsPicker } from './talents_picker.js';
export declare class MageTalentsPicker extends TalentsPicker<Spec.SpecMage> {
    constructor(parent: HTMLElement, player: Player<Spec.SpecMage>);
}
export declare class MageGlyphsPicker extends GlyphsPicker {
    constructor(parent: HTMLElement, player: Player<any>);
}
export declare const mageTalentsConfig: TalentsConfig<Spec.SpecMage>;
export declare const mageGlyphsConfig: GlyphsConfig;

import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { GlyphsConfig, GlyphsPicker } from './glyphs_picker.js';
import { TalentsConfig, TalentsPicker } from './talents_picker.js';
export declare class PriestTalentsPicker extends TalentsPicker<Spec.SpecShadowPriest> {
    constructor(parent: HTMLElement, player: Player<Spec.SpecShadowPriest>);
}
export declare class PriestGlyphsPicker extends GlyphsPicker {
    constructor(parent: HTMLElement, player: Player<any>);
}
export declare const priestTalentsConfig: TalentsConfig<Spec.SpecShadowPriest>;
export declare const priestGlyphsConfig: GlyphsConfig;

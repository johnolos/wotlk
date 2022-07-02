import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { GlyphsConfig, GlyphsPicker } from './glyphs_picker.js';
import { TalentsConfig, TalentsPicker } from './talents_picker.js';
export declare class WarlockTalentsPicker extends TalentsPicker<Spec.SpecWarlock> {
    constructor(parent: HTMLElement, player: Player<Spec.SpecWarlock>);
}
export declare class WarlockGlyphsPicker extends GlyphsPicker {
    constructor(parent: HTMLElement, player: Player<any>);
}
export declare const warlockTalentsConfig: TalentsConfig<Spec.SpecWarlock>;
export declare const warlockGlyphsConfig: GlyphsConfig;

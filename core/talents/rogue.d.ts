import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { GlyphsConfig, GlyphsPicker } from './glyphs_picker.js';
import { TalentsConfig, TalentsPicker } from './talents_picker.js';
export declare class RogueTalentsPicker extends TalentsPicker<Spec.SpecRogue> {
    constructor(parent: HTMLElement, player: Player<Spec.SpecRogue>);
}
export declare class RogueGlyphsPicker extends GlyphsPicker {
    constructor(parent: HTMLElement, player: Player<any>);
}
export declare const rogueTalentsConfig: TalentsConfig<Spec.SpecRogue>;
export declare const rogueGlyphsConfig: GlyphsConfig;

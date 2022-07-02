import { Spec } from '/wotlk/core/proto/common.js';
import { Player } from '/wotlk/core/player.js';
import { GlyphsConfig, GlyphsPicker } from './glyphs_picker.js';
import { TalentsConfig, TalentsPicker } from './talents_picker.js';
export declare class WarriorTalentsPicker extends TalentsPicker<Spec.SpecWarrior> {
    constructor(parent: HTMLElement, player: Player<Spec.SpecWarrior>);
}
export declare class WarriorGlyphsPicker extends GlyphsPicker {
    constructor(parent: HTMLElement, player: Player<any>);
}
export declare const warriorTalentsConfig: TalentsConfig<Spec.SpecWarrior>;
export declare const warriorGlyphsConfig: GlyphsConfig;

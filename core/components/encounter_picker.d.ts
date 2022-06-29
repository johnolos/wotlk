import { Stat } from '/wotlk/core/proto/common.js';
import { Encounter } from '/wotlk/core/encounter.js';
import { Component } from './component.js';
import { SimUI } from '../sim_ui.js';
export interface EncounterPickerConfig {
    simpleTargetStats?: Array<Stat>;
    showExecuteProportion: boolean;
}
export declare class EncounterPicker extends Component {
    constructor(parent: HTMLElement, modEncounter: Encounter, config: EncounterPickerConfig, simUI: SimUI);
}

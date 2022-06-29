import { Alchohol } from '/wotlk/core/proto/common.js';
import { BattleElixir } from '/wotlk/core/proto/common.js';
import { BooleanPickerConfig } from '/wotlk/core/components/boolean_picker.js';
import { StatMods } from '/wotlk/core/components/character_stats.js';
import { Conjured } from '/wotlk/core/proto/common.js';
import { Consumes } from '/wotlk/core/proto/common.js';
import { Debuffs } from '/wotlk/core/proto/common.js';
import { EncounterPickerConfig } from '/wotlk/core/components/encounter_picker.js';
import { EnumPickerConfig } from '/wotlk/core/components/enum_picker.js';
import { EquipmentSpec } from '/wotlk/core/proto/common.js';
import { EventID, TypedEvent } from './typed_event.js';
import { Flask } from '/wotlk/core/proto/common.js';
import { Food } from '/wotlk/core/proto/common.js';
import { Gear } from '/wotlk/core/proto_utils/gear.js';
import { GuardianElixir } from '/wotlk/core/proto/common.js';
import { IconEnumPickerConfig } from '/wotlk/core/components/icon_enum_picker.js';
import { IconPickerConfig } from '/wotlk/core/components/icon_picker.js';
import { IndividualBuffs } from '/wotlk/core/proto/common.js';
import { IndividualSimSettings } from '/wotlk/core/proto/ui.js';
import { NumberPickerConfig } from '/wotlk/core/components/number_picker.js';
import { Party } from './party.js';
import { PartyBuffs } from '/wotlk/core/proto/common.js';
import { Player } from './player.js';
import { Potions } from '/wotlk/core/proto/common.js';
import { Race } from '/wotlk/core/proto/common.js';
import { Raid } from './raid.js';
import { RaidBuffs } from '/wotlk/core/proto/common.js';
import { SavedDataConfig } from '/wotlk/core/components/saved_data_manager.js';
import { SimUI, SimWarning } from './sim_ui.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { SpecOptions } from '/wotlk/core/proto_utils/utils.js';
import { SpecRotation } from '/wotlk/core/proto_utils/utils.js';
import { Stat } from '/wotlk/core/proto/common.js';
import { StatWeightsResult } from '/wotlk/core/proto/api.js';
import { Stats } from '/wotlk/core/proto_utils/stats.js';
import { WeaponImbue } from '/wotlk/core/proto/common.js';
export declare type IndividualSimIconPickerConfig<ModObject, ValueType> = (IconPickerConfig<ModObject, ValueType> | IconEnumPickerConfig<ModObject, ValueType>) & {
    exclusivityTags?: Array<ExclusivityTag>;
};
export declare type InputConfig = {
    type: 'boolean';
    getModObject: (simUI: IndividualSimUI<any>) => any;
    config: BooleanPickerConfig<any>;
} | {
    type: 'number';
    getModObject: (simUI: IndividualSimUI<any>) => any;
    config: NumberPickerConfig<any>;
} | {
    type: 'enum';
    getModObject: (simUI: IndividualSimUI<any>) => any;
    config: EnumPickerConfig<any>;
} | {
    type: 'iconEnum';
    getModObject: (simUI: IndividualSimUI<any>) => any;
    config: IconEnumPickerConfig<any, any>;
};
export interface InputSection {
    tooltip?: string;
    inputs: Array<InputConfig>;
}
export interface ConsumeOptions {
    potions: Array<Potions>;
    conjured: Array<Conjured>;
    flasks: Array<Flask>;
    battleElixirs: Array<BattleElixir>;
    guardianElixirs: Array<GuardianElixir>;
    food: Array<Food>;
    alcohol: Array<Alchohol>;
    weaponImbues: Array<WeaponImbue>;
    pet?: Array<IndividualSimIconPickerConfig<Player<any>, any>>;
    other?: Array<IndividualSimIconPickerConfig<Player<any>, any>>;
}
export interface IndividualSimUIConfig<SpecType extends Spec> {
    cssClass: string;
    knownIssues?: Array<string>;
    warnings?: Array<(simUI: IndividualSimUI<SpecType>) => SimWarning>;
    epStats: Array<Stat>;
    epReferenceStat: Stat;
    displayStats: Array<Stat>;
    modifyDisplayStats?: (player: Player<SpecType>) => StatMods;
    defaults: {
        gear: EquipmentSpec;
        epWeights: Stats;
        consumes: Consumes;
        rotation: SpecRotation<SpecType>;
        talents: string;
        specOptions: SpecOptions<SpecType>;
        raidBuffs: RaidBuffs;
        partyBuffs: PartyBuffs;
        individualBuffs: IndividualBuffs;
        debuffs: Debuffs;
    };
    selfBuffInputs: Array<IndividualSimIconPickerConfig<Player<any>, any>>;
    raidBuffInputs: Array<IndividualSimIconPickerConfig<Raid, any>>;
    partyBuffInputs: Array<IndividualSimIconPickerConfig<Party, any>>;
    playerBuffInputs: Array<IndividualSimIconPickerConfig<Player<any>, any>>;
    debuffInputs: Array<IndividualSimIconPickerConfig<Raid, any>>;
    rotationInputs: InputSection;
    otherInputs?: InputSection;
    consumeOptions?: ConsumeOptions;
    additionalSections?: Record<string, InputSection>;
    additionalIconSections?: Record<string, Array<IndividualSimIconPickerConfig<Player<any>, any>>>;
    customSections?: Array<(simUI: IndividualSimUI<SpecType>, parentElem: HTMLElement) => string>;
    encounterPicker: EncounterPickerConfig;
    freezeTalents?: boolean;
    presets: {
        gear: Array<PresetGear>;
        talents: Array<SavedDataConfig<Player<any>, string>>;
    };
}
export interface GearAndStats {
    gear: Gear;
    bonusStats?: Stats;
}
export interface PresetGear {
    name: string;
    gear: EquipmentSpec;
    tooltip?: string;
    enableWhen?: (obj: Player<any>) => boolean;
}
export interface Settings {
    raidBuffs: RaidBuffs;
    partyBuffs: PartyBuffs;
    individualBuffs: IndividualBuffs;
    consumes: Consumes;
    race: Race;
}
export declare abstract class IndividualSimUI<SpecType extends Spec> extends SimUI {
    readonly player: Player<SpecType>;
    readonly individualConfig: IndividualSimUIConfig<SpecType>;
    private readonly exclusivityMap;
    private raidSimResultsManager;
    private settingsMuuri;
    prevEpIterations: number;
    prevEpSimResult: StatWeightsResult | null;
    constructor(parentElem: HTMLElement, player: Player<SpecType>, config: IndividualSimUIConfig<SpecType>);
    private loadSettings;
    private addSidebarComponents;
    private addTopbarComponents;
    private addGearTab;
    private addSettingsTab;
    private addTalentsTab;
    private addDetailedResultsTab;
    private addLogTab;
    applyDefaults(eventID: EventID): void;
    registerExclusiveEffect(effect: ExclusiveEffect): void;
    getSavedGearStorageKey(): string;
    getSavedRotationStorageKey(): string;
    getSavedSettingsStorageKey(): string;
    getSavedTalentsStorageKey(): string;
    private recomputeSettingsLayout;
    getStorageKey(keyPart: string): string;
    toProto(): IndividualSimSettings;
    fromProto(eventID: EventID, settings: IndividualSimSettings): void;
}
export declare type ExclusivityTag = 'Battle Elixir' | 'Drums' | 'Food' | 'Pet Food' | 'Alchohol' | 'Guardian Elixir' | 'Potion' | 'Conjured' | 'Spirit' | 'MH Weapon Imbue' | 'OH Weapon Imbue';
export interface ExclusiveEffect {
    tags: Array<ExclusivityTag>;
    changedEvent: TypedEvent<any>;
    isActive: () => boolean;
    deactivate: (eventID: EventID) => void;
}

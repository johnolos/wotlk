import { IconPickerConfig } from '/wotlk/core/components/icon_picker.js';
import { ElementalShaman_Rotation_RotationType as RotationType } from '/wotlk/core/proto/shaman.js';
import { Spec } from '/wotlk/core/proto/common.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import { Player } from '/wotlk/core/player.js';
import { IndividualSimUI } from '/wotlk/core/individual_sim_ui.js';
import { EventID, TypedEvent } from '/wotlk/core/typed_event.js';
export declare const IconBloodlust: IconPickerConfig<Player<any>, boolean>;
export declare const IconWaterShield: {
    id: ActionId;
    states: number;
    changedEvent: (player: Player<Spec.SpecElementalShaman>) => TypedEvent<void>;
    getValue: (player: Player<Spec.SpecElementalShaman>) => boolean;
    setValue: (eventID: EventID, player: Player<Spec.SpecElementalShaman>, newValue: boolean) => void;
};
export declare const ElementalShamanRotationConfig: {
    inputs: {
        type: "enum";
        cssClass: string;
        getModObject: (simUI: IndividualSimUI<any>) => Player<any>;
        config: {
            label: string;
            values: {
                name: string;
                value: RotationType;
                tooltip: string;
            }[];
            changedEvent: (player: Player<Spec.SpecElementalShaman>) => TypedEvent<void>;
            getValue: (player: Player<Spec.SpecElementalShaman>) => RotationType;
            setValue: (eventID: EventID, player: Player<Spec.SpecElementalShaman>, newValue: number) => void;
        };
    }[];
};

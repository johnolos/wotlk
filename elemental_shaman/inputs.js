import { ElementalShaman_Rotation_RotationType as RotationType, ShamanShield } from '/wotlk/core/proto/shaman.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const IconBloodlust = makeBooleanShamanBuffInput(ActionId.fromSpellId(2825), 'bloodlust');
export const IconWaterShield = {
    id: ActionId.fromSpellId(33736),
    states: 2,
    changedEvent: (player) => player.specOptionsChangeEmitter,
    getValue: (player) => player.getSpecOptions().shield == ShamanShield.WaterShield,
    setValue: (eventID, player, newValue) => {
        const newOptions = player.getSpecOptions();
        if (newValue) {
            newOptions.shield = ShamanShield.WaterShield;
        }
        else {
            newOptions.shield = ShamanShield.NoShield;
        }
        player.setSpecOptions(eventID, newOptions);
    },
};
export const ElementalShamanRotationConfig = {
    inputs: [
        {
            type: 'enum', cssClass: 'rotation-enum-picker',
            getModObject: (simUI) => simUI.player,
            config: {
                label: 'Type',
                values: [
                    {
                        name: 'Adaptive', value: RotationType.Adaptive,
                        tooltip: 'Dynamically adapts based on available mana to maximize CL casts without going OOM.',
                    },
                ],
                changedEvent: (player) => player.rotationChangeEmitter,
                getValue: (player) => player.getRotation().type,
                setValue: (eventID, player, newValue) => {
                    const newRotation = player.getRotation();
                    newRotation.type = newValue;
                    player.setRotation(eventID, newRotation);
                },
            },
        },
    ],
};
function makeBooleanShamanBuffInput(id, optionsFieldName) {
    return {
        id: id,
        states: 2,
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => player.getSpecOptions()[optionsFieldName],
        setValue: (eventID, player, newValue) => {
            const newOptions = player.getSpecOptions();
            newOptions[optionsFieldName] = newValue;
            player.setSpecOptions(eventID, newOptions);
        },
    };
}

import { EnhancementShaman_Rotation_PrimaryShock as PrimaryShock, ShamanShield } from '/wotlk/core/proto/shaman.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const IconBloodlust = makeBooleanShamanBuffInput(ActionId.fromSpellId(2825), 'bloodlust');
export const IconLightningShield = {
    id: ActionId.fromSpellId(49281),
    states: 2,
    changedEvent: (player) => player.specOptionsChangeEmitter,
    getValue: (player) => player.getSpecOptions().shield == ShamanShield.WaterShield,
    setValue: (eventID, player, newValue) => {
        const newOptions = player.getSpecOptions();
        newOptions.shield = ShamanShield.LightningShield;
        player.setSpecOptions(eventID, newOptions);
    },
};
export const IconWaterShield = {
    id: ActionId.fromSpellId(33736),
    states: 2,
    changedEvent: (player) => player.specOptionsChangeEmitter,
    getValue: (player) => player.getSpecOptions().shield == ShamanShield.WaterShield,
    setValue: (eventID, player, newValue) => {
        const newOptions = player.getSpecOptions();
        newOptions.shield = ShamanShield.WaterShield;
        player.setSpecOptions(eventID, newOptions);
    },
};
export const DelayOffhandSwings = {
    type: 'boolean',
    getModObject: (simUI) => simUI.player,
    config: {
        extraCssClasses: [
            'delay-offhand-swings-picker',
        ],
        label: 'Delay Offhand Swings',
        labelTooltip: 'Uses the startattack macro to delay OH swings, so they always follow within 0.5s of a MH swing.',
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => player.getSpecOptions().delayOffhandSwings,
        setValue: (eventID, player, newValue) => {
            const newOptions = player.getSpecOptions();
            newOptions.delayOffhandSwings = newValue;
            player.setSpecOptions(eventID, newOptions);
        },
    },
};
export const EnhancementShamanRotationConfig = {
    inputs: [
        {
            type: 'enum', cssClass: 'primary-shock-picker',
            getModObject: (simUI) => simUI.player,
            config: {
                label: 'Primary Shock',
                values: [
                    {
                        name: 'None', value: PrimaryShock.None,
                    },
                    {
                        name: 'Earth Shock', value: PrimaryShock.Earth,
                    },
                    {
                        name: 'Frost Shock', value: PrimaryShock.Frost,
                    },
                ],
                changedEvent: (player) => player.rotationChangeEmitter,
                getValue: (player) => player.getRotation().primaryShock,
                setValue: (eventID, player, newValue) => {
                    const newRotation = player.getRotation();
                    newRotation.primaryShock = newValue;
                    player.setRotation(eventID, newRotation);
                },
            },
        }
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

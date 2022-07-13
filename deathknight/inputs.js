// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const StartingRunicPower = {
    type: 'number',
    getModObject: (simUI) => simUI.player,
    config: {
        extraCssClasses: [
            'starting-runic-power-picker',
        ],
        label: 'Starting Runic Power',
        labelTooltip: 'Initial RP at the start of each iteration.',
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => player.getSpecOptions().startingRunicPower,
        setValue: (eventID, player, newValue) => {
            const newOptions = player.getSpecOptions();
            newOptions.startingRunicPower = newValue;
            player.setSpecOptions(eventID, newOptions);
        },
    },
};
export const DeathKnightRotationConfig = {
    inputs: [],
};

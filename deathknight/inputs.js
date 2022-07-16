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
export const PetUptime = {
    type: 'number',
    getModObject: (simUI) => simUI.player,
    config: {
        extraCssClasses: [
            'ghoul-uptime-picker',
        ],
        label: 'Ghoul Uptime (%)',
        labelTooltip: 'Percent of the fight duration for which your ghoul will be on target.',
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => player.getSpecOptions().petUptime * 100,
        setValue: (eventID, player, newValue) => {
            const newOptions = player.getSpecOptions();
            newOptions.petUptime = newValue / 100;
            player.setSpecOptions(eventID, newOptions);
        },
    },
};
export const PrecastGhoulFrenzy = {
    type: 'boolean',
    getModObject: (simUI) => simUI.player,
    config: {
        extraCssClasses: [
            'precast-ghoul-frenzy-picker',
        ],
        label: 'Pre-Cast Ghoul Frenzy',
        labelTooltip: 'Cast Ghoul Frenzy 10 seconds before combat starts.',
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => player.getSpecOptions().precastGhoulFrenzy,
        setValue: (eventID, player, newValue) => {
            const newOptions = player.getSpecOptions();
            newOptions.precastGhoulFrenzy = newValue;
            player.setSpecOptions(eventID, newOptions);
        },
    },
};
export const DeathKnightRotationConfig = {
    inputs: [],
};

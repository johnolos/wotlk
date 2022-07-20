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
export const PrecastHornOfWinter = {
    type: 'boolean',
    getModObject: (simUI) => simUI.player,
    config: {
        extraCssClasses: [
            'precast-horn-of-winter-picker',
        ],
        label: 'Pre-Cast Horn of Winter',
        labelTooltip: 'Precast Horn of Winter for 10 extra runic power before fight.',
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => player.getSpecOptions().precastHornOfWinter,
        setValue: (eventID, player, newValue) => {
            const newOptions = player.getSpecOptions();
            newOptions.precastHornOfWinter = newValue;
            player.setSpecOptions(eventID, newOptions);
        },
    },
};
export const RefreshHornOfWinter = {
    type: 'boolean',
    getModObject: (simUI) => simUI.player,
    config: {
        extraCssClasses: [
            'refresh-horn-of-winter-picker',
        ],
        label: 'Refresh Horn of Winter',
        labelTooltip: 'Refresh Horn of Winter on free GCDs.',
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => player.getRotation().refreshHornOfWinter,
        setValue: (eventID, player, newValue) => {
            const newRotation = player.getRotation();
            newRotation.refreshHornOfWinter = newValue;
            player.setRotation(eventID, newRotation);
        },
    },
};
export const WIPFrostRotation = {
    type: 'boolean',
    getModObject: (simUI) => simUI.player,
    config: {
        extraCssClasses: [
            'wip-frost-rotation-picker',
        ],
        label: 'Use WIP frost rotation',
        labelTooltip: 'Use sequence based rotation for frost, ***currently WIP***.',
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => player.getRotation().wipFrostRotation,
        setValue: (eventID, player, newValue) => {
            const newRotation = player.getRotation();
            newRotation.wipFrostRotation = newValue;
            player.setRotation(eventID, newRotation);
        },
    },
};
export const DiseaseRefreshDuration = {
    type: 'number',
    getModObject: (simUI) => simUI.player,
    config: {
        extraCssClasses: [
            'disease-refresh-duration-picker',
        ],
        label: 'Disease Refresh Duration',
        labelTooltip: 'Minimum duration for refreshing a disease.',
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => player.getRotation().diseaseRefreshDuration,
        setValue: (eventID, player, newValue) => {
            const newRotation = player.getRotation();
            newRotation.diseaseRefreshDuration = newValue;
            player.setRotation(eventID, newRotation);
        },
    },
};
export const UseDeathAndDecay = {
    type: 'boolean',
    getModObject: (simUI) => simUI.player,
    config: {
        extraCssClasses: [
            'use-death-and-decay-picker',
        ],
        label: 'Death and Decay',
        labelTooltip: 'Use Death and Decay based rotation.',
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => player.getRotation().useDeathAndDecay,
        setValue: (eventID, player, newValue) => {
            const newRotation = player.getRotation();
            newRotation.useDeathAndDecay = newValue;
            player.setRotation(eventID, newRotation);
        },
    },
};
export const UnholyPresenceOpener = {
    type: 'boolean',
    getModObject: (simUI) => simUI.player,
    config: {
        extraCssClasses: [
            'unholy-presence-opener-picker',
        ],
        label: 'Unholy Presence Opener',
        labelTooltip: 'Start fight in unholy presence and change to blood after gargoyle.',
        changedEvent: (player) => player.specOptionsChangeEmitter,
        getValue: (player) => player.getRotation().unholyPresenceOpener,
        setValue: (eventID, player, newValue) => {
            const newRotation = player.getRotation();
            newRotation.unholyPresenceOpener = newValue;
            player.setRotation(eventID, newRotation);
        },
    },
};
export const DeathKnightRotationConfig = {
    inputs: [
        UseDeathAndDecay,
        UnholyPresenceOpener,
        RefreshHornOfWinter,
        DiseaseRefreshDuration,
        WIPFrostRotation,
    ],
};

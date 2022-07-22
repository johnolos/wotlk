import { ShamanShield } from '/wotlk/core/proto/shaman.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import * as InputHelpers from '/wotlk/core/components/input_helpers.js';
// Configuration for spec-specific UI elements on the settings tab.
// These don't need to be in a separate file but it keeps things cleaner.
export const Bloodlust = InputHelpers.makeSpecOptionsBooleanIconInput({
    fieldName: 'bloodlust',
    id: ActionId.fromSpellId(2825),
});
export const ShamanShieldInput = InputHelpers.makeSpecOptionsEnumIconInput({
    fieldName: 'shield',
    values: [
        { color: 'grey', value: ShamanShield.NoShield },
        { actionId: ActionId.fromItemId(33736), value: ShamanShield.WaterShield },
        { actionId: ActionId.fromItemId(49281), value: ShamanShield.LightningShield },
    ],
});
export const DelayOffhandSwings = InputHelpers.makeSpecOptionsBooleanInput({
    fieldName: 'delayOffhandSwings',
    label: 'Delay Offhand Swings',
    labelTooltip: 'Uses the startattack macro to delay OH swings, so they always follow within 0.5s of a MH swing.',
});
export const EnhancementShamanRotationConfig = {
    inputs: [
    //		{
    //			type: 'enum' as const, cssClass: 'primary-shock-picker',
    //			getModObject: (simUI: IndividualSimUI<any>) => simUI.player,
    //			config: {
    //				label: 'Mainhand Imbue', //very temporary, just as a way to be able to make sure imbues are working in the meantime,
    //				values: [                //and primary shocks arent a thing anymore
    //					{
    //						name: 'None', value: WeaponImbue.None,
    //					},
    //					{
    //						name: 'Windfury', value: WeaponImbue.WeaponImbueShamanWindfury,
    //					},
    //					{
    //						name: 'Flametongue', value: WeaponImbue.WeaponImbueShamanFlametongue,
    //					},
    //				],
    //				changedEvent: (player: Player<Spec.SpecEnhancementShaman>) => player.rotationChangeEmitter,
    //				getValue: (player: Player<Spec.SpecEnhancementShaman>) => player.getRotation().WeaponImbue,
    //				setValue: (eventID: EventID, player: Player<Spec.SpecEnhancementShaman>, newValue: number) => {
    //					const newRotation = player.getRotation();
    //					newRotation.WeaponImbue = newValue;
    //					player.setRotation(eventID, newRotation);
    //				},
    //			},
    //		}
    ],
};

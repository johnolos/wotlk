import { Class } from '/wotlk/core/proto/common.js';
import { specToClass, specTypeFunctions, } from '/wotlk/core/proto_utils/utils.js';
import { druidTalentsConfig, DruidTalentsPicker, DruidGlyphsPicker } from './druid.js';
import { hunterTalentsConfig, HunterTalentsPicker, HunterGlyphsPicker } from './hunter.js';
import { mageTalentsConfig, MageTalentsPicker, MageGlyphsPicker } from './mage.js';
import { paladinTalentsConfig, PaladinTalentsPicker, PaladinGlyphsPicker } from './paladin.js';
import { priestTalentsConfig, PriestTalentsPicker, PriestGlyphsPicker } from './priest.js';
import { rogueTalentsConfig, RogueTalentsPicker, RogueGlyphsPicker } from './rogue.js';
import { shamanTalentsConfig, ShamanTalentsPicker, ShamanGlyphsPicker } from './shaman.js';
import { warlockTalentsConfig, WarlockTalentsPicker, WarlockGlyphsPicker } from './warlock.js';
import { warriorTalentsConfig, WarriorTalentsPicker, WarriorGlyphsPicker } from './warrior.js';
export function newTalentsPicker(parent, player) {
    switch (player.getClass()) {
        case Class.ClassDruid:
            return new DruidTalentsPicker(parent, player);
            break;
        case Class.ClassShaman:
            return new ShamanTalentsPicker(parent, player);
            break;
        case Class.ClassHunter:
            return new HunterTalentsPicker(parent, player);
            break;
        case Class.ClassMage:
            return new MageTalentsPicker(parent, player);
            break;
        case Class.ClassPaladin:
            return new PaladinTalentsPicker(parent, player);
            break;
        case Class.ClassRogue:
            return new RogueTalentsPicker(parent, player);
            break;
        case Class.ClassPriest:
            return new PriestTalentsPicker(parent, player);
            break;
        case Class.ClassWarlock:
            return new WarlockTalentsPicker(parent, player);
            break;
        case Class.ClassWarrior:
            return new WarriorTalentsPicker(parent, player);
            break;
        default:
            throw new Error('Unimplemented class talents: ' + player.getClass());
    }
}
export function newGlyphsPicker(parent, player) {
    switch (player.getClass()) {
        case Class.ClassDruid:
            return new DruidGlyphsPicker(parent, player);
            break;
        case Class.ClassShaman:
            return new ShamanGlyphsPicker(parent, player);
            break;
        case Class.ClassHunter:
            return new HunterGlyphsPicker(parent, player);
            break;
        case Class.ClassMage:
            return new MageGlyphsPicker(parent, player);
            break;
        case Class.ClassPaladin:
            return new PaladinGlyphsPicker(parent, player);
            break;
        case Class.ClassRogue:
            return new RogueGlyphsPicker(parent, player);
            break;
        case Class.ClassPriest:
            return new PriestGlyphsPicker(parent, player);
            break;
        case Class.ClassWarlock:
            return new WarlockGlyphsPicker(parent, player);
            break;
        case Class.ClassWarrior:
            return new WarriorGlyphsPicker(parent, player);
            break;
    }
    return null;
    //throw new Error('Unimplemented class glyphs: ' + player.getClass());
}
const classTalentsConfig = {
    [Class.ClassUnknown]: [],
    [Class.ClassDruid]: druidTalentsConfig,
    [Class.ClassShaman]: shamanTalentsConfig,
    [Class.ClassHunter]: hunterTalentsConfig,
    [Class.ClassMage]: mageTalentsConfig,
    [Class.ClassRogue]: rogueTalentsConfig,
    [Class.ClassPaladin]: paladinTalentsConfig,
    [Class.ClassPriest]: priestTalentsConfig,
    [Class.ClassWarlock]: warlockTalentsConfig,
    [Class.ClassWarrior]: warriorTalentsConfig,
};
export function talentSpellIdsToTalentString(playerClass, talentIds) {
    const talentsConfig = classTalentsConfig[playerClass];
    const talentsStr = talentsConfig.map(treeConfig => {
        const treeStr = treeConfig.talents.map(talentConfig => {
            const spellIdIndex = talentConfig.spellIds.findIndex(spellId => talentIds.includes(spellId));
            if (spellIdIndex == -1) {
                return '0';
            }
            else {
                return String(spellIdIndex + 1);
            }
        }).join('').replace(/0+$/g, '');
        return treeStr;
    }).join('-').replace(/-+$/g, '');
    return talentsStr;
}
export function talentStringToProto(spec, talentString) {
    const talentsConfig = classTalentsConfig[specToClass[spec]];
    const specFunctions = specTypeFunctions[spec];
    const proto = specFunctions.talentsCreate();
    talentString.split('-').forEach((treeString, treeIdx) => {
        const treeConfig = talentsConfig[treeIdx];
        [...treeString].forEach((talentString, i) => {
            const talentConfig = treeConfig.talents[i];
            const points = parseInt(talentString);
            if (talentConfig.fieldName) {
                if (talentConfig.maxPoints == 1) {
                    proto[talentConfig.fieldName] = points == 1;
                }
                else {
                    proto[talentConfig.fieldName] = points;
                }
            }
        });
    });
    return proto;
}

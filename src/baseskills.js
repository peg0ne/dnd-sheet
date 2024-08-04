var inspirationEle = getEle("skill-inspiration");
var proficiencyEle = getEle("skill-proficiency");
var strengthEle = getEle("skill-str");
var dexterityEle = getEle("skill-dex");
var constitutionEle = getEle("skill-con");
var intelligenceEle = getEle("skill-int");
var wisdomEle = getEle("skill-wis");
var charismaEle = getEle("skill-cha");

inspirationEle.onchange = () => { updateSkills(); }
proficiencyEle.onchange = () => { updateSkills(); }
strengthEle.onchange = () => { updateSkills(); }
dexterityEle.onchange = () => { updateSkills(); }
constitutionEle.onchange = () => { updateSkills(); }
intelligenceEle.onchange = () => { updateSkills(); }
wisdomEle.onchange = () => { updateSkills(); }
charismaEle.onchange = () => { updateSkills(); }

setSkills();

function setSkills() {
    inspirationEle.checked = DB.hasInspiration;

    var baseStats = DB.stats;
    proficiencyEle.value = baseStats.proficency;

    strengthEle.checked = baseStats.strength.isProficient;
    dexterityEle.checked = baseStats.dexterity.isProficient;
    constitutionEle.checked = baseStats.constitution.isProficient;
    intelligenceEle.checked = baseStats.intelligence.isProficient;
    wisdomEle.checked = baseStats.wisdom.isProficient;
    charismaEle.checked = baseStats.charisma.isProficient;
}

function updateSkills() {
    DB.hasInspiration = inspirationEle.checked;

    DB.stats.proficency = proficiencyEle.value;

    DB.stats.strength.isProficient = strengthEle.checked;
    DB.stats.dexterity.isProficient = dexterityEle.checked;
    DB.stats.constitution.isProficient = constitutionEle.checked;
    DB.stats.intelligence.isProficient = intelligenceEle.checked;
    DB.stats.wisdom.isProficient = wisdomEle.checked;
    DB.stats.charisma.isProficient = charismaEle.checked;

    saveData();
    updateSkillMods();
    setCombatInfo();
}
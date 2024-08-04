var acrobaticsEle = getEle("skill-acro");
var animalHandlingEle = getEle("skill-ani-han");
var arcanaEle = getEle("skill-arcana");
var athleticsEle = getEle("skill-athletics");
var deceptionEle = getEle("skill-deception");
var historyEle = getEle("skill-history");
var insightEle = getEle("skill-insight");
var intimidationEle = getEle("skill-intimidation");
var investigationEle = getEle("skill-investigation");
var medicineEle = getEle("skill-medicine");
var natureEle = getEle("skill-nature");
var perceptionEle = getEle("skill-perception");
var performanceEle = getEle("skill-performance");
var persuasionEle = getEle("skill-persuasion");
var religionEle = getEle("skill-religion");
var sleightOfHandsEle = getEle("skill-sleight-oh");
var stealthEle = getEle("skill-stealth");
var survivalEle = getEle("skill-survival");

acrobaticsEle.onchange = () => { updateSkillMods(); }
animalHandlingEle.onchange = () => { updateSkillMods(); }
arcanaEle.onchange = () => { updateSkillMods(); }
athleticsEle.onchange = () => { updateSkillMods(); }
deceptionEle.onchange = () => { updateSkillMods(); }
historyEle.onchange = () => { updateSkillMods(); }
insightEle.onchange = () => { updateSkillMods(); }
intimidationEle.onchange = () => { updateSkillMods(); }
investigationEle.onchange = () => { updateSkillMods(); }
medicineEle.onchange = () => { updateSkillMods(); }
natureEle.onchange = () => { updateSkillMods(); }
perceptionEle.onchange = () => { updateSkillMods(); }
performanceEle.onchange = () => { updateSkillMods(); }
persuasionEle.onchange = () => { updateSkillMods(); }
religionEle.onchange = () => { updateSkillMods(); }
sleightOfHandsEle.onchange = () => { updateSkillMods(); }
stealthEle.onchange = () => { updateSkillMods(); }
survivalEle.onchange = () => { updateSkillMods(); }

setSkillMods();

function setSkillMods() {
    var skillMod = DB.statSkills;
    acrobaticsEle.checked = skillMod.acrobatics;
    animalHandlingEle.checked = skillMod.animalHandling;
    arcanaEle.checked = skillMod.arcana;
    athleticsEle.checked = skillMod.athletics;
    deceptionEle.checked = skillMod.deception;
    historyEle.checked = skillMod.history;
    insightEle.checked = skillMod.insight;
    intimidationEle.checked = skillMod.intimidation;
    investigationEle.checked = skillMod.investigation;
    medicineEle.checked = skillMod.medicine;
    natureEle.checked = skillMod.nature;
    perceptionEle.checked = skillMod.perception;
    performanceEle.checked = skillMod.performance;
    persuasionEle.checked = skillMod.persuasion;
    religionEle.checked = skillMod.religion;
    sleightOfHandsEle.checked = skillMod.sleightOfHands;
    stealthEle.checked = skillMod.stealth;
    survivalEle.checked = skillMod.survival;
}

function updateSkillMods() {
    DB.statSkills.acrobatics = acrobaticsEle.checked;
    DB.statSkills.animalHandling = animalHandlingEle.checked;
    DB.statSkills.arcana = arcanaEle.checked;
    DB.statSkills.athletics = athleticsEle.checked;
    DB.statSkills.deception = deceptionEle.checked;
    DB.statSkills.history = historyEle.checked;
    DB.statSkills.insight = insightEle.checked;
    DB.statSkills.intimidation = intimidationEle.checked;
    DB.statSkills.investigation = investigationEle.checked;
    DB.statSkills.medicine = medicineEle.checked;
    DB.statSkills.nature = natureEle.checked;
    DB.statSkills.perception = perceptionEle.checked;
    DB.statSkills.performance = performanceEle.checked;
    DB.statSkills.persuasion = persuasionEle.checked;
    DB.statSkills.religion = religionEle.checked;
    DB.statSkills.sleightOfHands = sleightOfHandsEle.checked;
    DB.statSkills.stealth = stealthEle.checked;
    DB.statSkills.survival = survivalEle.checked;

    saveData();
    updateSkillMods();
}

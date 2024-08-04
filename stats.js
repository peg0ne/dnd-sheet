var stats_list = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
var strengthInputEle = getEle("stat-strength");
var dexterityInputEle = getEle("stat-dexterity");
var constitutionInputEle = getEle("stat-constitution");
var intelligenceInputEle = getEle("stat-intelligence");
var wisdomInputEle = getEle("stat-wisdom");
var charismaInputEle = getEle("stat-charisma");

strengthInputEle.onchange = () => { updateStats(); }
dexterityInputEle.onchange = () => { updateStats(); }
constitutionInputEle.onchange = () => { updateStats(); }
intelligenceInputEle.onchange = () => { updateStats(); }
wisdomInputEle.onchange = () => { updateStats(); }
charismaInputEle.onchange = () => { updateStats(); }

setStats();
updateStats();

function setStats() {
    stats_list.forEach((stat) => {
        var number = DB.stats[stat].value;
        var stat_ele = getEle(`stat-${stat}`);
        var mod_ele = getEle(`stat-mod-${stat}`);
        stat_ele.value = number ? number : 10;
        console.log(stat);
        mod_ele.textContent = Math.floor((stat_ele.value - 10) / 2);
    });
}

function updateStats() {
    stats_list.forEach((stat) => {
        var stat_ele = getEle(`stat-${stat}`);
        var mod_ele = getEle(`stat-mod-${stat}`);
        mod_ele.textContent = Math.floor((stat_ele.value - 10) / 2);
        DB.stats[stat].value = stat_ele.value;
    });
    saveData();
    updateSkillMods();
    setCombatInfo();
}

function updateSkillMods() {
    stats_list.forEach((stat) => {
        var stat_ele = getEle(`stat-${stat}`);
        var stat_value = Math.floor((stat_ele.value - 10) / 2);

        var proficiency_value = getEle("skill-proficiency").value;
        var is_proficient = DB.stats[stat].isProficient;
        {
            var skill_mod_ele = getEle(`skill-mod-${stat}`);
            if (!is_proficient) { skill_mod_ele.textContent = stat_value; }
            else { skill_mod_ele.textContent = stat_value + Number(proficiency_value); }
        }

        if (stat == "strength") {
            setSkillMod("athletics", stat_value, proficiency_value);
        } else if (stat == "dexterity") {
            setSkillMod("acro", stat_value, proficiency_value);
            setSkillMod("sleight-oh", stat_value, proficiency_value);
            setSkillMod("stealth", stat_value, proficiency_value);
        } else if (stat == "intelligence") {
            setSkillMod("arcana", stat_value, proficiency_value);
            setSkillMod("history", stat_value, proficiency_value);
            setSkillMod("investigation", stat_value, proficiency_value);
            setSkillMod("nature", stat_value, proficiency_value);
            setSkillMod("religion", stat_value, proficiency_value);
        } else if (stat == "wisdom") {
            setSkillMod("ani-han", stat_value, proficiency_value);
            setSkillMod("insight", stat_value, proficiency_value);
            setSkillMod("medicine", stat_value, proficiency_value);
            setSkillMod("perception", stat_value, proficiency_value);
            setSkillMod("survival", stat_value, proficiency_value);
        } else if (stat == "charisma") {
            setSkillMod("deception", stat_value, proficiency_value);
            setSkillMod("intimidation", stat_value, proficiency_value);
            setSkillMod("performance", stat_value, proficiency_value);
            setSkillMod("persuasion", stat_value, proficiency_value);
        }
    });
}

function setSkillMod(skill_mod_value, stat_value, proficiency_value) {
    var ele = getEle(`skill-mod-${skill_mod_value}`);
    is_proficient = getEle(`skill-${skill_mod_value}`).checked;
    if (!is_proficient) { proficiency_value = 0; }
    ele.textContent = stat_value + Number(proficiency_value);
}

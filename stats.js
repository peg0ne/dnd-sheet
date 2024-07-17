var stats = localStorage.getItem("dnd-sheet-stats") ? JSON.parse(localStorage.getItem("dnd-sheet-stats")) : {};
var stats_list = ["str", "dex", "con", "int", "wis", "cha"];
var skill_mod_list = ["acro", "ani-han", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "performance", "persuasion", "religion", "sleight-oh", "stealth", "survival"];
stats_list.forEach(stat => {
    document.getElementById(`stat-${stat}`).onchange = () => {update_stat_mods();};
    document.getElementById(`skill-${stat}`).onclick = () => {update_stat_mods();};
});
skill_mod_list.forEach(skill => {
    document.getElementById(`skill-${skill}`).onchange = () => {
        update_stat_mods();
        update_skills()
    };
});
document.getElementById("skill-proficiency").oninput = () => {update_stat_mods();};
set_stats()
update_stat_mods();

function set_stats() {
    stats_list.forEach(stat => {
        var number = stats[stat];
        var stat_ele = document.getElementById(`stat-${stat}`);
        var mod_ele = document.getElementById(`stat-mod-${stat}`);
        stat_ele.value = number ? number : 10;
        mod_ele.textContent = Math.floor((stat_ele.value - 10) / 2);
    });
}

function update_stat_mods() {
    stats_list.forEach(stat => {
        var stat_ele = document.getElementById(`stat-${stat}`);
        var mod_ele = document.getElementById(`stat-mod-${stat}`);
        mod_ele.textContent = Math.floor((stat_ele.value - 10) / 2);
        stats[stat] = stat_ele.value
    });
    localStorage.setItem("dnd-sheet-stats", JSON.stringify(stats));

    update_skill_mods();
}

function update_skill_mods() {
    stats_list.forEach(stat => {
        var stat_ele = document.getElementById(`stat-${stat}`);
        var stat_value = Math.floor((stat_ele.value - 10) / 2);

        var proficiency_value = document.getElementById("skill-proficiency").value;
        var is_proficient = document.getElementById(`skill-${stat}`).checked;
        {
            var skill_mod_ele = document.getElementById(`skill-mod-${stat}`);
            if (!is_proficient) {
                skill_mod_ele.textContent = stat_value;
            }
            else {
                skill_mod_ele.textContent = stat_value + Number(proficiency_value);
            }
        }

        if (stat == "str") {
            set_skill_mod("athletics", stat_value, proficiency_value);
        }
        else if (stat == "dex") {
            set_skill_mod("acro", stat_value, proficiency_value);
            set_skill_mod("sleight-oh", stat_value, proficiency_value);
            set_skill_mod("stealth", stat_value, proficiency_value);
        }
        else if (stat == "int") {
            set_skill_mod("arcana", stat_value, proficiency_value);
            set_skill_mod("history", stat_value, proficiency_value);
            set_skill_mod("investigation", stat_value, proficiency_value);
            set_skill_mod("nature", stat_value, proficiency_value);
            set_skill_mod("religion", stat_value, proficiency_value);
        }
        else if (stat == "wis") {
            set_skill_mod("ani-han", stat_value, proficiency_value);
            set_skill_mod("insight", stat_value, proficiency_value);
            set_skill_mod("medicine", stat_value, proficiency_value);
            set_skill_mod("perception", stat_value, proficiency_value);
            set_skill_mod("survival", stat_value, proficiency_value);
        }
        else if (stat == "cha") {
            set_skill_mod("deception", stat_value, proficiency_value);
            set_skill_mod("intimidation", stat_value, proficiency_value);
            set_skill_mod("performance", stat_value, proficiency_value);
            set_skill_mod("persuasion", stat_value, proficiency_value);
        }
    });
}

function set_skill_mod(skill_mod_value, stat_value, proficiency_value) {
    var ele = document.getElementById(`skill-mod-${skill_mod_value}`);
    is_proficient = document.getElementById(`skill-${skill_mod_value}`).checked;
    if (!is_proficient) {proficiency_value = 0;}
    ele.textContent = stat_value + Number(proficiency_value);
}
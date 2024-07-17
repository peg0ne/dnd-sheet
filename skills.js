var skills = localStorage.getItem("dnd-sheet-skills") ? JSON.parse(localStorage.getItem("dnd-sheet-skills")) : {};
var skills_list = ["inspiration", "proficiency", "str", "dex", "con", "int", "wis", "cha"];
var skill_mod_list = ["acro", "ani-han", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "performance", "persuasion", "religion", "sleight-oh", "stealth", "survival"];
skills_list.forEach(skills_entry => {
    document.getElementById(`skill-${skills_entry}`).onchange = () => {update_skills();}
});
set_skills()
set_skill_mods();
update_skills();

function set_skills() {
    skills_list.forEach(skills_entry => {
        var value = skills[skills_entry];
        var skill_ele = document.getElementById(`skill-${skills_entry}`);
        if (skill_ele.type == "checkbox") {
            skill_ele.checked = value;
        }
        else {
            skill_ele.value = value;
        }
    });
}

function set_skill_mods() {
    skill_mod_list.forEach(skill_mod => {
        var value = skills[skill_mod];
        var skill_ele = document.getElementById(`skill-${skill_mod}`);
        skill_ele.checked = value;
    });
}
    
function update_skills() {
    skills_list.forEach(skills_entry => {
        var skill_ele = document.getElementById(`skill-${skills_entry}`);
        if (skill_ele.type == "checkbox") {
            skills[skills_entry] = skill_ele.checked;
        }
        else {
            skills[skills_entry] = skill_ele.value;
        }
    });

    skill_mod_list.forEach(skill_mod => {
        var skill_ele = document.getElementById(`skill-${skill_mod}`);
        skills[skill_mod] = skill_ele.checked;
    });

    localStorage.setItem("dnd-sheet-skills", JSON.stringify(skills));
}
var combat_info = localStorage.getItem("dnd-sheet-combat") ? JSON.parse(localStorage.getItem("dnd-sheet-combat")) : {};
var combat_list = ["ac", "initiative", "speed", "max-hp", "current-hp", "temp-hp", "hp-dice", "hp-dice-nr", "hp-dice-used", "death-save-1", "death-save-2", "death-save-3", "death-fail-1", "death-fail-2", "death-fail-3"];
combat_list.forEach(combat_entry => {
    document.getElementById(`skill-${combat_entry}`).onchange = () => {update_combat_info();}
});

set_combat_info();

function set_combat_info() {
    combat_list.forEach(combat_entry => {
        var ele = document.getElementById(`skill-${combat_entry}`);
        var value = combat_info[combat_entry];
        if (combat_entry == "initiative") {
            var dex = Number(document.getElementById("skill-mod-dex").textContent);
            ele.textContent = dex;
        }
        if (ele.type == "checkbox") {
            ele.checked = value;
        }
        else {
            ele.value = value;
        }
    });
}

function update_combat_info() {
    combat_list.forEach(combat_entry => {
        var ele = document.getElementById(`skill-${combat_entry}`);
        if (ele.type == "checkbox") {
            combat_info[combat_entry] = ele.checked;
        }
        else if (combat_entry != "initiative") {
            combat_info[combat_entry] = ele.value;
        }
    });

    localStorage.setItem("dnd-sheet-combat", JSON.stringify(combat_info));
}
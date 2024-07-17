var info = localStorage.getItem("dnd-sheet-info") ? JSON.parse(localStorage.getItem("dnd-sheet-info")) : {};
var info_list = ["name", "class", "subtypeclass", "lvl", "background", "race", "alignment", "xp"];
info_list.forEach(info_entry => {
    document.getElementById(`char-${info_entry}`).onchange = () => {update_info();}
});
set_info()
update_info();

function set_info() {
    info_list.forEach(info_entry => {
        var value = info[info_entry];
        var info_ele = document.getElementById(`char-${info_entry}`);
        info_ele.value = value;
    });
}

function update_info() {
    info_list.forEach(info_entry => {
        var info_ele = document.getElementById(`char-${info_entry}`);
        info[info_entry] = info_ele.value;
    });
    localStorage.setItem("dnd-sheet-info", JSON.stringify(info));
}
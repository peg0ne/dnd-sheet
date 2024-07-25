var info_list = ["name", "class", "subtypeclass", "lvl", "background", "race", "alignment", "xp"];
info_list.forEach(info_entry => { get_ele(`char-${info_entry}`).onchange = () => {update_info();} });
set_info()
update_info();
function set_info() { info_list.forEach(info_entry => { get_ele(`char-${info_entry}`).value = info[info_entry]; }); }
function update_info() {
    info_list.forEach(info_entry => { info[info_entry] = get_ele(`char-${info_entry}`).value; });
    save_data("dnd-sheet-info", info);
}
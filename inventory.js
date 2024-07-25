var money_list = ["cp", "sp", "ep", "gp", "pp"];
money_list.forEach(money_entry => { get_ele(`inventory-${money_entry}`).onchange = () => {update_money();}; });

set_items();
set_weapons();
set_traits();
set_money();
update_money();

function set_money() {
    money_list.forEach(money_entry => { get_ele(`inventory-${money_entry}`).value = inventory[money_entry]; });
}

function update_money() {
    money_list.forEach(money_entry => { inventory[money_entry] = get_ele(`inventory-${money_entry}`).value; });
    save_data("dnd-sheet-inventory", inventory);
}

function set_items() {
    var inner = "";
    var index = 0;
    inventory.items.forEach(item => {
        inner += get_div(`inventory-item-div-${index}`, "inventory-item-div");
        inner += get_header(3, item.name);
        inner += get_header(5, item.description);
        inner += try_get_link(item.link);
        inner += get_charges("item", item.charges, index);
        inner += get_button("delete-item", `delete_inventory_item(${index})`, "X");
        inner += stop_div();
        index++;
    });
    shared_set_items("inventory", inner);
}

function set_weapons() {
    var inner = "";
    var index = 0;
    inventory.weapons.forEach(weapon => {
        inner += get_div(`inventory-weapon-div-${index}`, "inventory-item-div");
        inner += get_header(3, weapon.name);
        inner += get_header(5, weapon.type);
        inner += get_header(5, weapon.description);
        inner += try_get_link(weapon.link);
        inner += get_header(5, weapon.dmgdice);
        inner += get_header(5, weapon.dmgtype);
        inner += get_charges("weapon", weapon.charges, index);
        inner += get_button("delete-item", `delete_inventory_weapon(${index})`, "X");
        inner += stop_div();
        index++;
    });
    shared_set_items("weapon", inner);
}

function set_traits() {
    var inner = "";
    var index = 0;
    inventory.traits.forEach(trait => {
        inner += get_div(`inventory-trait-div-${index}`, "inventory-item-div");
        inner += get_header(3, trait.name);
        inner += get_header(5, trait.description);
        inner += try_get_link(trait.link);
        inner += get_charges("trait", trait.charges, index);
        inner += get_button("delete-item", `delete_inventory_trait(${index})`, "X");
        inner += stop_div();
        index++;
    });
    shared_set_items("trait", inner);
}
function try_get_link(link) { return link ? get_link(link, "ℹ") : ""; }
function get_charges(type, charges, index) {
    charges_inner = get_div(`${type}-charges-${index}`, "charges");
    for (let i = 0; i < Number(charges); i++) {
        charges_inner += get_input("checkbox", `${index}-${i}`);
    }
    charges_inner += stop_div();
    return charges_inner;
}
function shared_set_items(type, inner) {
    var div_ele = get_ele(`${type}-div`);
    div_ele.innerHTML = inner;
}

// MODAL
function add_inventory_weapon() {
    create_base_modal("weapon", "Add Weapon");
    modal_add_input("Type", "text", "weapon-type");
    modal_add_input("Dmg Dice", "text", "weapon-dmgdice");
    modal_add_input("Damage Type", "text", "weapon-dmgtype");
    modal_add_button("Save", "weapon-save");
    var save = add_save_button("weapon");
    save.onclick = () => {on_inventory_weapon_saved();};
}
function add_inventory_item() {
    create_base_modal("items", "Add Inventory Item");
    var save = add_save_button("items");
    save.onclick = () => {on_inventory_item_saved();}
}
function add_inventory_trait() {
    create_base_modal("trait", "Add Feature/Trait");
    var save = add_save_button("trait");
    save.onclick = () => {on_inventory_trait_saved();}
}
function create_base_modal(type, header) {
    open_modal();
    modal_set_header(header);
    modal_add_input("Name", "text", `${type}-name`);
    modal_add_textarea("Description", `${type}-description`);
    modal_add_input("Link", "text", `${type}-link`);
    modal_add_input("Charges", "number", `${type}-charges`);
}
function add_save_button(type) {
    modal_add_button("Save", `${type}-save`);
    return save = get_ele(`${type}-save`);
}

function on_inventory_weapon_saved() {
    var item = {}
    item["type"] = get_ele("weapon-type").value;
    item["dmgdice"] = get_ele("weapon-dmgdice").value;
    item["dmgtype"] = get_ele("weapon-dmgtype").value;
    shared_save("weapons", item);
}
function on_inventory_trait_saved() { shared_save("traits", {}); }
function on_inventory_item_saved() { shared_save("items", {}); }
function shared_save(type, item) {
    item["name"] = get_ele(`${type}-name`).value;
    item["link"] = get_ele(`${type}-link`).value;
    item["charges"] = get_ele(`${type}-charges`).value;
    item["description"] = get_ele(`${type}-description`).value;
    if (!inventory[type]) {inventory[type] = [];}
    inventory[type].push(item);
    close_modal();
    save_inventory();
}
// MODAl

function delete_inventory_trait(index) { delete_inventory_list_item(inventory.traits, index); }
function delete_inventory_item(index) { delete_inventory_list_item(inventory.items, index); }
function delete_inventory_weapon(index) { delete_inventory_list_item(inventory.weapons, index); }
function delete_inventory_list_item(list, index) {
    remove_at(list, index);
    save_inventory();
}

function save_inventory() {
    save_data("dnd-sheet-inventory", inventory);
    set_items();
    set_weapons();
    set_traits();
}


var inventory = localStorage.getItem("dnd-sheet-inventory") ? JSON.parse(localStorage.getItem("dnd-sheet-inventory")) : {"items":[], "weapons":[], "traits":[]};
var money_list = ["cp", "sp", "ep", "gp", "pp"];
money_list.forEach(money_entry => {
    document.getElementById(`inventory-${money_entry}`).onchange = () => {update_money();};
});

set_items();
set_weapons();
set_traits();
set_money();
update_money();

function set_money() {
    money_list.forEach(money_entry => {
        var ele = document.getElementById(`inventory-${money_entry}`);
        ele.value = inventory[money_entry];
    });
}

function update_money() {
    money_list.forEach(money_entry => {
        var ele = document.getElementById(`inventory-${money_entry}`);
        inventory[money_entry] = ele.value;
    });

    localStorage.setItem("dnd-sheet-inventory", JSON.stringify(inventory));
}

function set_items() {
    var div_ele = document.getElementById("inventory-div");
    div_ele.innerHTML = "";
    var index = 0;
    inventory.items.forEach(item => {
        var inner = `<div id="inventory-item-div-${index}" class="inventory-item-div"><h3>${item.name}</h3><h5>${item.description}</h5>`;
        if (item.link) { inner += `<a href="${item.link}">ℹ</a>`}
        inner += "<div>"
        for (let index = 0; index < Number(item.charges); index++) {
            inner +=`<input id="${index}" type="checkbox">`
        }
        inner += `</div><button class="delete-item" onclick="delete_inventory_item(${index})">X</button></div>`
        div_ele.innerHTML += inner;
        index++;
    });
}

function add_inventory_item() {
    open_modal();
    modal_add_input("Name", "text", "inventory-name");
    modal_add_textarea("Description", "inventory-description");
    modal_add_input("Link", "text", "inventory-link");
    modal_add_input("Charges", "number", "inventory-charges");
    modal_add_button("Save", "inventory-save");
    modal_set_header("Add Inventory Item");

    var save = document.getElementById("inventory-save");
    save.onclick = () => {on_inventory_item_saved();}
}

function on_inventory_item_saved() {
    var item = {}
    item["name"] = document.getElementById("inventory-name").value;
    item["link"] = document.getElementById("inventory-link").value;
    item["charges"] = document.getElementById("inventory-charges").value;
    item["description"] = document.getElementById("inventory-description").value;
    if (!inventory.items) {inventory["items"] = [];}
    inventory["items"].push(item);
    close_modal();
    save_inventory();
}

function set_weapons() {
    var div_ele = document.getElementById("weapon-div");
    div_ele.innerHTML = "";
    var index = 0;
    inventory.weapons.forEach(weapon => {
        var inner = `<div id="inventory-item-div-${index}" class="inventory-item-div">`;
        inner += `<h3>${weapon.name}</h3>`;
        inner += `<h5>${weapon.type}</h5>`;
        inner += `<h5>${weapon.description}</h5>`;
        if (weapon.link) { inner += `<a href="${weapon.link}">ℹ</a>`}
        inner += `<h5>${weapon.dmgdice}</h5>`;
        inner += `<h5>${weapon.dmgtype}</h5>`;
        inner += "<div>"
        for (let index = 0; index < Number(weapon.charges); index++) {
            inner +=`<input id="${index}" type="checkbox">`
        }
        inner += "</div>"
        inner += `<button class="delete-item" onclick="delete_inventory_weapon(${index})">X</button></div>`
        div_ele.innerHTML += inner;
        index++;
    });
}

function add_inventory_weapon() {
    open_modal();
    modal_add_input("Name", "text", "weapon-name");
    modal_add_input("Type", "text", "weapon-type");
    modal_add_textarea("Description", "weapon-description");
    modal_add_input("Link", "text", "weapon-link");
    modal_add_input("Charges", "number", "weapon-charges");
    modal_add_input("Dmg Dice", "text", "weapon-dmgdice");
    modal_add_input("Damage Type", "text", "weapon-dmgtype");
    modal_add_button("Save", "weapon-save");
    modal_set_header("Add Weapon");

    var save = document.getElementById("weapon-save");
    save.onclick = () => {on_inventory_weapon_saved();}
}

function on_inventory_weapon_saved() {
    var item = {}
    item["name"] = document.getElementById("weapon-name").value;
    item["link"] = document.getElementById("weapon-link").value;
    item["type"] = document.getElementById("weapon-type").value;
    item["charges"] = document.getElementById("weapon-charges").value;
    item["description"] = document.getElementById("weapon-description").value;
    item["dmgdice"] = document.getElementById("weapon-dmgdice").value;
    item["dmgtype"] = document.getElementById("weapon-dmgtype").value;
    if (!inventory.weapons) {inventory["weapons"] = [];}
    inventory["weapons"].push(item);
    close_modal();
    save_inventory();
}

function set_traits() {
    var div_ele = document.getElementById("trait-div");
    div_ele.innerHTML = "";
    var index = 0;
    inventory.traits.forEach(trait => {
        var inner = `<div id="inventory-item-div-${index}" class="inventory-item-div">`;
        inner += `<h3>${trait.name}</h3>`;
        inner += `<h5>${trait.description}</h5>`;
        if (trait.link) { inner += `<a href="${trait.link}">ℹ</a>`}
        inner += "<div>"
        for (let index = 0; index < Number(trait.charges); index++) {
            inner +=`<input id="${index}" type="checkbox">`
        }
        inner += "</div>"
        inner += `<button class="delete-item" onclick="delete_inventory_trait(${index})">X</button></div>`
        div_ele.innerHTML += inner;
        index++;
    });
}

function add_inventory_trait() {
    open_modal();
    modal_add_input("Name", "text", "trait-name");
    modal_add_textarea("Description", "trait-description");
    modal_add_input("Link", "text", "trait-link");
    modal_add_input("Charges", "number", "trait-charges");
    modal_add_button("Save", "trait-save");
    modal_set_header("Add Feature/Trait");

    var save = document.getElementById("trait-save");
    save.onclick = () => {on_inventory_trait_saved();}
}

function on_inventory_trait_saved() {
    var item = {}
    item["name"] = document.getElementById("trait-name").value;
    item["link"] = document.getElementById("trait-link").value;
    item["charges"] = document.getElementById("trait-charges").value;
    item["description"] = document.getElementById("trait-description").value;
    if (!inventory.traits) {inventory["traits"] = [];}
    inventory["traits"].push(item);
    close_modal();
    save_inventory();
}

function delete_inventory_trait(index) { delete_inventory_list_item(inventory.traits, index); }
function delete_inventory_item(index) { delete_inventory_list_item(inventory.items, index); }
function delete_inventory_weapon(index) { delete_inventory_list_item(inventory.weapons, index); }
function delete_inventory_list_item(list, index) {
    remove_at(list, index);
    save_inventory();
}

function save_inventory() {
    localStorage.setItem("dnd-sheet-inventory", JSON.stringify(inventory));
    set_items();
    set_weapons();
    set_traits();
}


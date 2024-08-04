var weaponDiv = getEle("weapon-div");

setWeapons();

function setWeapons() {
    var inner = "";
    var index = 0;
    DB.inventory.weapons.forEach((weapon) => {
        inner += getDiv(`inventory-weapon-div-${index}`, "inventory-item-div");
        inner += getHeader(3, weapon.name);
        inner += getHeader(5, weapon.type);
        inner += getHeader(5, weapon.description);
        inner += tryGetLink(weapon.link);
        inner += getHeader(5, weapon.dmgdice);
        inner += getHeader(5, weapon.dmgtype);
        inner += getCharges("weapons", weapon.charges, index);
        inner += getButton("delete-item", `deleteInventoryWeapon(${index})`, "X");
        inner += closeDiv();
        index++;
    });
    weaponDiv.innerHTML = inner;
}

function addInventoryWeapon() {
    createBaseModal("weapons", "Add Weapon");
    modalAddInput("Type", "text", "weapons-type");
    modalAddInput("Dmg Dice", "text", "weapons-dmgdice");
    modalAddInput("Damage Type", "text", "weapons-dmgtype");
    var save = addSaveButton("weapons");
    save.onclick = () => { onInventoryWeaponSaved(); };
}

function onInventoryWeaponSaved() {
    var item = {};
    item["type"] = getEle("weapons-type").value;
    item["dmgdice"] = getEle("weapons-dmgdice").value;
    item["dmgtype"] = getEle("weapons-dmgtype").value;
    sharedSave("weapons", item);
}
function deleteInventoryWeapon(index) { deleteInventoryListItem(DB.inventory.weapons, index); }
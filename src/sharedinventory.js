function tryGetLink(link) { return link ? getLink(link, "ℹ") : ""; }
function getCharges(type, charges, index) {
    charges_inner = getDiv(`${type}-charges-${index}`, "charges");
    for (let i = 0; i < Number(charges); i++) {
        charges_inner += getInput("checkbox", `${index}-${i}`);
    }
    charges_inner += closeDiv();
    return charges_inner;
}

// MODAL
function createBaseModal(type, header) {
    openModal();
    modalSetHeader(header);
    modalAddInput("Name", "text", `${type}-name`);
    modalAddTextarea("Description", `${type}-description`);
    modalAddInput("Link", "text", `${type}-link`);
    modalAddInput("Charges", "number", `${type}-charges`);
}
function addSaveButton(type) {
    modalAddButton("Save", `${type}-save`);
    return (save = getEle(`${type}-save`));
}

function sharedSave(type, item) {
    item["name"] = getEle(`${type}-name`).value;
    item["link"] = getEle(`${type}-link`).value;
    item["charges"] = getEle(`${type}-charges`).value;
    item["description"] = getEle(`${type}-description`).value;
    DB.inventory[type].push(item);
    closeModal();
    saveInventory();
}
// MODAl
function deleteInventoryListItem(list, index) {
    removeAt(list, index);
    saveInventory();
}

function saveInventory() {
    saveData();
    setTraits();
    setWeapons();
    setItems();
}

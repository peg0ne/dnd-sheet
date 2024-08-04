var inventoryDiv = getEle("inventory-div");

setItems();

function setItems() {
    var inner = "";
    var index = 0;
    DB.inventory.items.forEach((item) => {
        inner += getDiv(`inventory-item-div-${index}`, "inventory-item-div");
        inner += getHeader(3, item.name);
        inner += getHeader(5, item.description);
        inner += tryGetLink(item.link);
        inner += getCharges("item", item.charges, index);
        inner += getButton("delete-item", `deleteInventoryItem(${index})`, "X");
        inner += closeDiv();
        index++;
    });
    inventoryDiv.innerHTML = inner;
}

function addInventoryItem() {
    createBaseModal("items", "Add Inventory Item");
    var save = addSaveButton("items");
    save.onclick = () => { onInventoryItemSaved(); };
}
function deleteInventoryItem(index) { deleteInventoryListItem(DB.inventory.items, index); }
function onInventoryItemSaved() { sharedSave("items", {}); }
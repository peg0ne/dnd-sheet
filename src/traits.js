var traitDiv = getEle("trait-div");

setTraits();

function setTraits() {
    var inner = "";
    var index = 0;
    DB.inventory.traits.forEach((trait) => {
        inner += getDiv(`inventory-trait-div-${index}`, "inventory-item-div");
        inner += getHeader(3, trait.name);
        inner += getHeader(5, trait.description);
        inner += tryGetLink(trait.link);
        inner += getCharges("traits", trait.charges, index);
        inner += getButton("delete-item", `deleteInventoryTrait(${index})`, "X");
        inner += closeDiv();
        index++;
    });
    traitDiv.innerHTML = inner;
}

function addInventoryTrait() {
    createBaseModal("traits", "Add Feature/Trait");
    var save = addSaveButton("traits");
    save.onclick = () => { onInventoryTraitSaved(); };
}

function onInventoryTraitSaved() { sharedSave("traits", {}); }
function deleteInventoryTrait(index) { deleteInventoryListItem(DB.inventory.traits, index); }
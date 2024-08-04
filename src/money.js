var copperEle = getEle("inventory-copper");
var silverEle = getEle("inventory-silver");
var electroEle = getEle("inventory-electro");
var goldEle = getEle("inventory-gold");
var platinumEle = getEle("inventory-platinum");

copperEle.onchange = () => { updateMoney(); };
silverEle.onchange = () => { updateMoney(); };
electroEle.onchange = () => { updateMoney(); };
goldEle.onchange = () => { updateMoney(); };
platinumEle.onchange = () => { updateMoney(); };

setMoney();
updateMoney();

function setMoney() {
    var currency = DB.inventory.currency;
    copperEle.value = currency.copper;
    silverEle.value = currency.silver;
    electroEle.value = currency.electro;
    goldEle.value = currency.gold;
    platinumEle.value = currency.platinum;
}

function updateMoney() {
    DB.inventory.currency.copper = copperEle.value;
    DB.inventory.currency.silver = silverEle.value;
    DB.inventory.currency.electro = electroEle.value;
    DB.inventory.currency.gold = goldEle.value;
    DB.inventory.currency.platinum = platinumEle.value;
    saveData();
}

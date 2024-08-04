var armorClassEle = getEle("skill-ac");
var initiativeEle = getEle("skill-initiative");
var speedEle = getEle("skill-speed");
var maxHpEle = getEle("skill-max-hp");
var currentHpEle = getEle("skill-current-hp");
var tempHpEle = getEle("skill-temp-hp");
var hpDiceEle = getEle("skill-hp-dice");
var hpDiceAmountEle = getEle("skill-hp-dice-nr");
var hpDiceUsedEle = getEle("skill-hp-dice-used");
var deathSave1 = getEle("skill-death-save-1");
var deathSave2 = getEle("skill-death-save-2");
var deathSave3 = getEle("skill-death-save-3");
var deathFail1 = getEle("skill-death-fail-1");
var deathFail2 = getEle("skill-death-fail-2");
var deathFail3 = getEle("skill-death-fail-3");

armorClassEle.onchange = () => { updateCombatInfo(); };
speedEle.onchange = () => { updateCombatInfo(); };
maxHpEle.onchange = () => { updateCombatInfo(); };
currentHpEle.onchange = () => { updateCombatInfo(); };
tempHpEle.onchange = () => { updateCombatInfo(); };
hpDiceEle.onchange = () => { updateCombatInfo(); };
hpDiceAmountEle.onchange = () => { updateCombatInfo(); };
hpDiceUsedEle.onchange = () => { updateCombatInfo(); };
deathSave1.onchange = () => { updateCombatInfo(); };
deathSave2.onchange = () => { updateCombatInfo(); };
deathSave3.onchange = () => { updateCombatInfo(); };
deathFail1.onchange = () => { updateCombatInfo(); };
deathFail2.onchange = () => { updateCombatInfo(); };
deathFail3.onchange = () => { updateCombatInfo(); };

setCombatInfo();

function setCombatInfo() {
    var battleStats = DB.battleStats;
    updateCombatElement(armorClassEle, battleStats.armorClass);
    updateCombatElement(speedEle, battleStats.speed);

    var hpStats = battleStats.hp;
    updateCombatElement(maxHpEle, hpStats.maxHp);
    updateCombatElement(currentHpEle, hpStats.currentHp);
    updateCombatElement(tempHpEle, hpStats.tempHp);
    updateCombatElement(hpDiceEle, hpStats.hpDice);
    updateCombatElement(hpDiceAmountEle, hpStats.hpDiceAmount);
    updateCombatElement(hpDiceUsedEle, hpStats.hpDiceUsed);

    var deathSaveStats = battleStats.deathSaves;
    updateCombatElement(deathSave1, deathSaveStats.success > 0);
    updateCombatElement(deathSave2, deathSaveStats.success > 1);
    updateCombatElement(deathSave3, deathSaveStats.success > 2);
    updateCombatElement(deathFail1, deathSaveStats.fails > 0);
    updateCombatElement(deathFail2, deathSaveStats.fails > 1);
    updateCombatElement(deathFail3, deathSaveStats.fails > 2);

    var dexterityStat = DB.stats.dexterity;
    var initiative = Math.floor((dexterityStat.value - 10) / 2);
    initiative += dexterityStat.isProficient ? Number(DB.stats.proficency) : 0;
    initiativeEle.textContent = initiative;
}

function updateCombatInfo() {
    DB.battleStats.armorClass = getValue(armorClassEle);
    DB.battleStats.speed = getValue(speedEle);

    DB.battleStats.hp.maxHp = getValue(maxHpEle);
    DB.battleStats.hp.currentHp = getValue(currentHpEle);
    DB.battleStats.hp.tempHp = getValue(tempHpEle);
    DB.battleStats.hp.currentHp = getValue(currentHpEle);
    DB.battleStats.hp.hpDiceEle = getValue(hpDiceEle);
    DB.battleStats.hp.hpDiceAmount = getValue(hpDiceAmountEle);
    DB.battleStats.hp.hpDiceUsed = getValue(hpDiceUsedEle);

    var success = 0;
    if (deathSave1.checked) { success++; }
    if (deathSave2.checked) { success++; }
    if (deathSave3.checked) { success++; }
    DB.battleStats.deathSaves.success = success;

    var fails = 0;
    if (deathFail1.checked) { fails++; }
    if (deathFail2.checked) { fails++; }
    if (deathFail3.checked) { fails++; }
    DB.battleStats.deathSaves.fails = fails;

    saveData();
}

function updateCombatElement(ele, value) {
    if (ele.type == "checkbox") {
        ele.checked = value;
    } else {
        ele.value = value;
    }
}

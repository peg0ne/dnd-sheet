var playerNameEle = getEle("char-name");
var classEle = getEle("char-class");
var subTypeClassEle = getEle("char-subtypeclass");
var raceEle = getEle("char-race");
var alignmentEle = getEle("char-alignment");
var backgroundEle = getEle("char-background");
var levelEle = getEle("char-lvl");
var xpEle = getEle("char-xp");

playerNameEle.onchange = () => { updateInfo(); };
classEle.onchange = () => { updateInfo(); };
subTypeClassEle.onchange = () => { updateInfo(); };
raceEle.onchange = () => { updateInfo(); };
alignmentEle.onchange = () => { updateInfo(); };
backgroundEle.onchange = () => { updateInfo(); };
levelEle.onchange = () => { updateInfo(); };
xpEle.onchange = () => { updateInfo(); };

setInfo();
updateInfo();

function setInfo() {
    var info = DB.info;
    playerNameEle.value = info.playerName;
    classEle.value = info.class;
    subTypeClassEle.value = info.subTypeClass;
    raceEle.value = info.race;
    alignmentEle.value = info.alignment;
    backgroundEle.value = info.background;
    levelEle.value = info.lvl;
    xpEle.value = info.xp;
}

function updateInfo() {
    DB.info.playerName = playerNameEle.value;
    DB.info.class = classEle.value;
    DB.info.subTypeClass = subTypeClassEle.value;
    DB.info.race = raceEle.value;
    DB.info.alignment = alignmentEle.value;
    DB.info.background = backgroundEle.value;
    DB.info.lvl = levelEle.value;
    DB.info.xp = xpEle.value;
    saveData();
}

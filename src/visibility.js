var statsBlockEle = getEle("stats-block-ele");
var hideStatsEle = getEle("hide-stats");
hideStatsEle.onclick = () => { hideStats(); };

setVisibility();

function setVisibility() {
    if (DB.visibility.stats) { return; }
    toggleVisibilityDisplay(DB.visibility.stats);
}

function hideStats() {
    toggleVisibilityDisplay(!isVisible(statsBlockEle));
    DB.visibility.stats = isVisible(statsBlockEle);
    saveData();
}

function toggleVisibilityDisplay(isHidden) {
    statsBlockEle.style.display = isHidden ? "flex" : "none";
    hideStatsEle.textContent = !isVisible(statsBlockEle) ? "⬛ Show Base Stats" : "⬜ Hide Base Stats";
}

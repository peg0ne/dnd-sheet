var stats_block_ele = document.getElementById("stats-block-ele");
var hide_stats_ele = document.getElementById("hide-stats");
hide_stats_ele.onclick = () => {hide_stats();} 

function hide_stats() {
    stats_block_ele.style.display = stats_block_ele.style.display == "none" ? "flex" : "none";
    hide_stats_ele.textContent = stats_block_ele.style.display == "none" ? "⬛ Stats" : "⬜ Stats";
}
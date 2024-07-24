var visibility_info = localStorage.getItem("dnd-sheet-visibility") ? JSON.parse(localStorage.getItem("dnd-sheet-visibility")) : {};
var stats_block_ele = document.getElementById("stats-block-ele");
var hide_stats_ele = document.getElementById("hide-stats");
hide_stats_ele.onclick = () => {hide_stats();} 

set_visibility()

function set_visibility()
{
    if (visibility_info["base_stats"]) { return; }
    stats_block_ele.style.display = visibility_info["base_stats"] ? "flex" : "none";
    hide_stats_ele.textContent = stats_block_ele.style.display == "none" ? "⬛ Show Base Stats" : "⬜ Hide Base Stats";
}

function hide_stats() {
    stats_block_ele.style.display = stats_block_ele.style.display == "none" ? "flex" : "none";
    hide_stats_ele.textContent = stats_block_ele.style.display == "none" ? "⬛ Show Base Stats" : "⬜ Hide Base Stats";
    visibility_info["base_stats"] = stats_block_ele.style.display != "none";

    localStorage.setItem("dnd-sheet-visibility", JSON.stringify(visibility_info));
}
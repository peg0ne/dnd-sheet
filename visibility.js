var stats_block_ele = get_ele("stats-block-ele");
var hide_stats_ele = get_ele("hide-stats");
hide_stats_ele.onclick = () => {hide_stats();}

set_visibility()

function set_visibility()
{
    if (visibility_info["base_stats"]) { return; }
    stats_block_ele.style.display = visibility_info["base_stats"] ? "flex" : "none";
    hide_stats_ele.textContent = !is_visible(stats_block_ele) ? "⬛ Show Base Stats" : "⬜ Hide Base Stats";
}

function hide_stats() {
    stats_block_ele.style.display = !is_visible(stats_block_ele) ? "flex" : "none";
    hide_stats_ele.textContent = !is_visible(stats_block_ele) ? "⬛ Show Base Stats" : "⬜ Hide Base Stats";
    visibility_info["base_stats"] = is_visible(stats_block_ele);

    save_data("dnd-sheet-visibility", visibility_info);
}
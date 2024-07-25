var combat_info = load_data("dnd-sheet-combat", {});
var info = load_data("dnd-sheet-info");
var inventory = load_data("dnd-sheet-inventory", {"items":[], "weapons":[], "traits":[]});
var spells = load_data("dnd-sheet-spells", {});
var stats = load_data("dnd-sheet-stats", {});
var visibility_info = load_data("dnd-sheet-visibility", {});

function get_button(class_name, func, content) { return `<button class="${class_name}" onclick="${func}">${content}</button>`; }
function get_div(id, class_name) { return `<div id="${id}" class="${class_name}">`; }
function get_ele(id) { return document.getElementById(id); }
function get_header(type, content) { return `<h${type}>${content.replace("\n", "<br>")}</h${type}>`; }
function get_input(type, id) { return `<input id="${id}" type="${type}">`; }
function get_link(link, content) { return `<a href="${link}">${content.replace("\n", "<br>")}</a>`; }
function get_value(ele) { return ele.type == "checkbox" ? ele.checked : ele.value; }
function is_visible(ele) { return !(ele.style.display == "none"); }
function load_data(name, default_data) { return localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : default_data; }
function remove_at(list, index) { if (Number(index) > -1) { list.splice(index, 1); } }
function save_data(name, data) { localStorage.setItem(name, JSON.stringify(data)); }
function stop_div() { return "</div>"; }
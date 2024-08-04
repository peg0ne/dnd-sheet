
var stats = load_data("dnd-sheet-stats", {});
function load_data(name, default_data) { return localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : default_data; }
function save_data(name, data) { localStorage.setItem(name, JSON.stringify(data)); }

var DB = load_data("dnd-data", baseData);
function saveData() { localStorage.setItem("dnd-data", JSON.stringify(DB)); }
function getEle(id) { return document.getElementById(id); }
function getValue(ele) { return ele.type == "checkbox" ? ele.checked : ele.value; }
function getParam(param, value) { return `${param}="${value}"`; }
function getId(id) { return getParam("id", id); }
function getClass(className) { return getParam("class", className); }
function getDiv(id, className) { return `<div ${getId(id)} ${getClass(className)}>`; }
function getHeader(type, content) { return `<h${type}>${content.replace("\n", "<br>")}</h${type}>`; }
function getInput(type, id) { return `<input id="${id}" type="${type}">`; }
function getButton(class_name, func, content) { return `<button class="${class_name}" onclick="${func}">${content}</button>`; }
function getLink(link, content) { return `<a href="${link}">${content.replace("\n", "<br>")}</a>`; }
function closeDiv() { return "</div>"; }
function isVisible(ele) { return !(ele.style.display == "none"); }
function removeAt(list, index) { if (Number(index) > -1) { list.splice(index, 1); } }

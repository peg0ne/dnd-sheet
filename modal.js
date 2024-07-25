var modal = get_ele("modal");
var modal_header = get_ele("modal-header");
var modal_div = get_ele("modal-div");
window.onclick = function(event) { if (event.target == modal) { close_modal(); } }

var span = document.getElementsByClassName("close")[0];
span.onclick = () => close_modal();

function modal_add_input(name, type, id) {
    modal_div.innerHTML += `<div class="modal-input"><h3>${name}</h3><input type="${type}" id="${id}"></div>`
}

function modal_add_textarea(name, id) {
    modal_div.innerHTML += `<div class="modal-input"><h3>${name}</h3><textarea id="${id}"></textarea></div>`
}

function modal_add_button(text, id) {
    modal_div.innerHTML += `<button id="${id}">${text}</button>`;
}

function modal_set_header(text) { modal_header.textContent = text; }
function close_modal() { modal.style.display = "none"; }
function open_modal() {
  modal.style.display = "block";
  modal_div.innerHTML = "";
  return modal;
}

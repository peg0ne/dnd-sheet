var modal = getEle("modal");
var modalHeader = getEle("modal-header");
var modalDiv = getEle("modal-div");
window.onclick = (event) => {
    if (event.target == modal) {
        closeModal();
    }
};

var span = document.getElementsByClassName("close")[0];
span.onclick = () => {
    closeModal();
};

function modalAddInput(name, type, id) {
    modalDiv.innerHTML += `${getDiv(undefined, "modal-input")}
        ${getHeader(3, name)}
        ${getInput(type, id)}
        ${closeDiv()}`;
}

function modalAddTextarea(name, id) {
    modalDiv.innerHTML += `${getDiv(undefined, "modal-input")}
        ${getHeader(3, name)}
        <textarea id="${id}"></textarea>
        ${closeDiv()}`;
}

function modalAddButton(text, id) {
    modalDiv.innerHTML += `<button id="${id}">${text}</button>`;
}

function modalSetHeader(text) {
    modalHeader.textContent = text;
}
function closeModal() {
    modal.style.display = "none";
}
function openModal() {
    modal.style.display = "block";
    modalDiv.innerHTML = "";
    return modal;
}

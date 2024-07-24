var spells = localStorage.getItem("dnd-sheet-spells") ? JSON.parse(localStorage.getItem("dnd-sheet-spells")) : {};

function remove_at(list, index) { if (Number(index) > -1) { list.splice(index, 1); } }
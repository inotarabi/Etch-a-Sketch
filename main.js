const gridContainer = document.querySelector(".grid-container");

function createGrid(num) {}

for (i = 1; i < 257; i++) {
    const gridCellDiv = document.createElement("div");
    gridCellDiv.classList.add("grid-cell");
    gridContainer.appendChild(gridCellDiv);
    gridCellDiv.textContent = i;
}

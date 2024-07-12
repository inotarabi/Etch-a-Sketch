const gridContainer = document.querySelector(".grid-container");
let gridInput = document.getElementById("size-input");
const enterButton = document.querySelector("#size-enter");
const resetButton = document.querySelector("#size-reset");

enterButton.addEventListener("click", () => {
    let inputValue = gridInput.value;
    createGrid(inputValue);
});

resetButton.addEventListener("click", () => {
    gridContainer.textContent = "";
});

function createGrid(num) {
    numBoxes = num * num;
    for (i = 1; i < numBoxes + 1; i++) {
        var gridCellDiv = document.createElement("div");
        gridCellDiv.classList.add("grid-cell");
        gridContainer.appendChild(gridCellDiv);

        cellsize = 594 / num;
        gridCellDiv.style.width = cellsize + "px";
    }
}

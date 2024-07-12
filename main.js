const gridContainer = document.querySelector(".grid-container");
let gridInput = document.getElementById("size-input");
const enterButton = document.querySelector("#size-enter");
const resetButton = document.querySelector("#size-reset");

let isMouseDown;

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

        color(gridCellDiv);
    }
}

function color(element) {
    element.addEventListener("mousedown", () => {
        isMouseDown = true;
        // element.style.backgroundColor = "red";
    });

    element.addEventListener("mouseup", () => {
        isMouseDown = false;
    });

    element.addEventListener("mouseover", () => {
        if (isMouseDown == true) {
            element.style.backgroundColor = "red";
        }
    });
}

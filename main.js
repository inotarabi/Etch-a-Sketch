const gridContainer = document.querySelector(".grid-container");
const gridInput = document.getElementById("size-input");
const enterButton = document.querySelector("#size-enter");
const resetButton = document.querySelector("#size-reset");
const redButton = document.querySelector("#red");
const blueButton = document.querySelector("#blue");
const yellowButton = document.querySelector("#yellow");
const greenButton = document.querySelector("#green");
const orangeButton = document.querySelector("#orange");
const brownButton = document.querySelector("#brown");
const purpleButton = document.querySelector("#purple");
const whiteButton = document.querySelector("#white");

let clickSound = new Audio("sounds/click.mp3");
let isMouseDown;
let currentColor;

enterButton.addEventListener("click", () => {
    let inputValue = gridInput.value;
    createGrid(inputValue);
});

resetButton.addEventListener("click", () => {
    gridContainer.textContent = "";
});

redButton.addEventListener("click", () => {
    clickSound.play();
    currentColor = "red";
});

blueButton.addEventListener("click", () => {
    clickSound.play();
    currentColor = "blue";
});

yellowButton.addEventListener("click", () => {
    clickSound.play();
    currentColor = "yellow";
});

greenButton.addEventListener("click", () => {
    clickSound.play();
    currentColor = "green";
});

orangeButton.addEventListener("click", () => {
    clickSound.play();
    currentColor = "orange";
});

brownButton.addEventListener("click", () => {
    clickSound.play();
    currentColor = "rgb(97, 18, 18)";
});

purpleButton.addEventListener("click", () => {
    clickSound.play();
    currentColor = "purple";
});

whiteButton.addEventListener("click", () => {
    clickSound.play();
    currentColor = "white";
});

function createGrid(num) {
    numBoxes = num * num;
    for (i = 1; i < numBoxes + 1; i++) {
        var gridCellDiv = document.createElement("div");
        gridCellDiv.classList.add("grid-cell");
        gridContainer.appendChild(gridCellDiv);

        cellsize = 594 / num;

        gridCellDiv.style.width = cellsize + "px";

        color(gridCellDiv, currentColor);
    }
}

function color(element) {
    element.addEventListener("mousedown", () => {
        element.style.backgroundColor = currentColor;
        isMouseDown = true;
    });

    element.addEventListener("mouseup", () => {
        isMouseDown = false;
    });

    element.addEventListener("mouseover", () => {
        if (isMouseDown == true) {
            element.style.backgroundColor = currentColor;
        }
    });
}

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

const shadeButton = document.querySelector("#shade");
const lightenButton = document.querySelector("#lighten");

let clickSound = new Audio("sounds/click.mp3");
let isMouseDown;
let currentColor;
let isShade = false;
let isLighten = false;

let R;
let G;
let B;
let A;

enterButton.addEventListener("click", () => {
    let inputValue = gridInput.value;
    createGrid(inputValue);
});

resetButton.addEventListener("click", () => {
    gridContainer.textContent = "";
});

redButton.addEventListener("click", () => {
    clickSound.play();
    R = 255;
    G = 0;
    B = 0;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

blueButton.addEventListener("click", () => {
    clickSound.play();
    R = 0;
    G = 0;
    B = 255;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

yellowButton.addEventListener("click", () => {
    clickSound.play();
    R = 255;
    G = 255;
    B = 0;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

greenButton.addEventListener("click", () => {
    clickSound.play();
    R = 0;
    G = 255;
    B = 0;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

orangeButton.addEventListener("click", () => {
    clickSound.play();
    R = 255;
    G = 165;
    B = 0;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

brownButton.addEventListener("click", () => {
    clickSound.play();
    R = 97;
    G = 18;
    B = 18;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

purpleButton.addEventListener("click", () => {
    clickSound.play();
    R = 160;
    G = 32;
    B = 240;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

whiteButton.addEventListener("click", () => {
    clickSound.play();
    R = 255;
    G = 255;
    B = 255;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

shadeButton.addEventListener("click", () => {
    shadeButton.classList.toggle("hover");

    if (isShade == false) {
        isShade = true;
    } else {
        isShade = false;
        isLighten = false;
    }
    console.log(isShade);
});

function shade() {
    if (isShade) {
    }
}

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

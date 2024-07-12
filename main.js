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

const colorButtonGeneral = document.querySelector(".colors");
const shadeButton = document.querySelector("#shade");
const lightenButton = document.querySelector("#lighten");

let clickSound = new Audio("sounds/click.mp3");
let isMouseDown;
let currentColor;
let isShade = false;
let isLighten = false;
let isColorButtonPressed = false;
let isTileEmpty = true;

let rgbaArray = [];
let R;
let G;
let B;
let A = 1;

function isAnyColorButtonPressed() {
    if (isColorButtonPressed == true) {
        return (isColorButtonPressed = false);
    } else {
        return (isColorButtonPressed = true);
    }
}

enterButton.addEventListener("click", () => {
    let inputValue = gridInput.value;
    createGrid(inputValue);
});

resetButton.addEventListener("click", () => {
    gridContainer.textContent = "";
});

redButton.addEventListener("click", () => {
    isAnyColorButtonPressed();
    clickSound.play();
    R = 255;
    G = 0;
    B = 0;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

blueButton.addEventListener("click", () => {
    isAnyColorButtonPressed();
    clickSound.play();
    R = 0;
    G = 0;
    B = 255;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

yellowButton.addEventListener("click", () => {
    isAnyColorButtonPressed();
    clickSound.play();
    R = 255;
    G = 255;
    B = 0;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

greenButton.addEventListener("click", () => {
    isAnyColorButtonPressed();
    clickSound.play();
    R = 0;
    G = 255;
    B = 0;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

orangeButton.addEventListener("click", () => {
    isAnyColorButtonPressed();
    clickSound.play();
    R = 255;
    G = 165;
    B = 0;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

brownButton.addEventListener("click", () => {
    isAnyColorButtonPressed();
    clickSound.play();
    R = 97;
    G = 18;
    B = 18;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

purpleButton.addEventListener("click", () => {
    isAnyColorButtonPressed();
    clickSound.play();
    R = 160;
    G = 32;
    B = 240;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

whiteButton.addEventListener("click", () => {
    isAnyColorButtonPressed();
    clickSound.play();
    R = 255;
    G = 255;
    B = 255;
    A = 1;
    currentColor = `rgba(${R}, ${G}, ${B}, ${A})`;
});

shadeButton.addEventListener("click", () => {
    if (isShade == false) {
        isShade = true;
        isLighten = false;
        shadeButton.classList.add("hover");
        lightenButton.classList.remove("hover");
    } else {
        isShade = false;
        shadeButton.classList.remove("hover");
    }
    console.log(isShade);
});

lightenButton.addEventListener("click", () => {
    if (isLighten == false) {
        isLighten = true;
        isShade = false;
        lightenButton.classList.add("hover");
        shadeButton.classList.remove("hover");
    } else {
        isLighten = false;
        lightenButton.classList.remove("hover");
    }
    console.log(isLighten);
});

function lighten(color) {
    rgbaArray = color.match(/\d+/g);
    R = rgbaArray[0];
    G = rgbaArray[1];
    B = rgbaArray[2];
    A -= 0.03;
    return (currentColor = `rgba(${R}, ${G}, ${B}, ${A})`);
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
            if (isColorButtonPressed && isLighten) {
                lighten(currentColor);
            }
            element.style.backgroundColor = currentColor;
        }
    });
}

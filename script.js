let css = document.querySelector("h3");
let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let body = document.getElementById("gradient");
let button = document.querySelector(".random");
body.style.background = "linear-gradient(to right, " + c1.value + ", " + c2.value + ")";
css.textContent = body.style.background + ";";


// body.style.background = "red"

function setGradient() {
    body.style.background = "linear-gradient(to right," + c1.value + ", " + c2.value + ")";
    css.textContent = body.style.background + ";";
}

function dec2Hex(dec) {
    return Math.abs(dec).toString(16);
}

function createRandomHexColor() {
    let r = String(dec2Hex(Math.floor(Math.random() * 256)));
    let g = String(dec2Hex(Math.floor(Math.random() * 256)));
    let b = String(dec2Hex(Math.floor(Math.random() * 256)));

    let hexColor = "#"+r+g+b;
    return hexColor;
}

function setRandomGradient() {
    c1.value = createRandomHexColor();
    c2.value = createRandomHexColor();
    if(c1.value !== c2.value) {
        setGradient();
    }
}

c1.addEventListener("input", setGradient);

c2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);


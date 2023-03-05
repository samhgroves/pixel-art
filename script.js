//Make initial grid
const container = document.querySelector(".container");
let gridSize = 16;
let root = document.querySelector(":root");
root.style.setProperty("--gridSize", gridSize);
function resetGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
function makeGrid(gridSize) {
  resetGrid();
  for (let i = 0; i < gridSize * gridSize; i++) {
    box = document.createElement("box");
    box.className = "box";
    box.style.backgroundColor = "white";
    box.style.filter = "brightness(1)";
    container.appendChild(box);
  }
}
makeGrid(gridSize);

//Listen for mouse drag or click
window.mouseDown = false;
document.onmousedown = function () {
  window.mouseDown = true;
};

document.onmouseup = function () {
  window.mouseDown = false;
};

document.addEventListener("mouseover", handler, false);
document.addEventListener("mousedown", handler, false);
function handler(e) {
  const target = e.target.closest(".box");
  if (window.mouseDown == true) {
    if (target) {
      let style = getComputedStyle(target);
      let brightness = style.filter;
      console.log(brightness);
      if (highlight.classList.contains("active")) {
        if (brightness == "brightness(0)") {
          target.style.filter = "brightness(0.1)";
        } else if (brightness == "brightness(0.1)") {
          target.style.filter = "brightness(0.2)";
        } else if (brightness == "brightness(0.2)") {
          target.style.filter = "brightness(0.3)";
        } else if (brightness == "brightness(0.3)") {
          target.style.filter = "brightness(0.4)";
        } else if (brightness == "brightness(0.4)") {
          target.style.filter = "brightness(0.5)";
        } else if (brightness == "brightness(0.5)") {
          target.style.filter = "brightness(0.6)";
        } else if (brightness == "brightness(0.6)") {
          target.style.filter = "brightness(0.7)";
        } else if (brightness == "brightness(0.7)") {
          target.style.filter = "brightness(0.8)";
        } else if (brightness == "brightness(0.8)") {
          target.style.filter = "brightness(0.9)";
        } else if (brightness == "brightness(0.9)") {
          target.style.filter = "brightness(1)";
        } else if (brightness == "brightness(1)") {
          target.style.filter = "brightness(1.1)";
        } else if (brightness == "brightness(1.1)") {
          target.style.filter = "brightness(1.2)";
        } else if (brightness == "brightness(1.2)") {
          target.style.filter = "brightness(1.3)";
        } else if (brightness == "brightness(1.3)") {
          target.style.filter = "brightness(1.4)";
        } else if (brightness == "brightness(1.4)") {
          target.style.filter = "brightness(1.5)";
        } else if (brightness == "brightness(1.5)") {
          target.style.filter = "brightness(1.6)";
        } else if (brightness == "brightness(1.6)") {
          target.style.filter = "brightness(1.7)";
        } else if (brightness == "brightness(1.7)") {
          target.style.filter = "brightness(1.8)";
        } else if (brightness == "brightness(1.8)") {
          target.style.filter = "brightness(1.9)";
        } else if (brightness == "brightness(1.9)") {
          target.style.filter = "brightness(2)";
        } else if (brightness == "brightness(2)") {
          target.style.filter = "brightness(2.5)";
        } else if (brightness == "brightness(2.5)") {
          target.style.filter = "brightness(3.5)";
        } else if (brightness == "brightness(3.5)") {
          target.style.filter = "brightness(5)";
        }
      } else if (shade.classList.contains("active")) {
        if (brightness == "brightness(5)") {
          target.style.filter = "brightness(3.5)";
        } else if (brightness == "brightness(3.5)") {
          target.style.filter = "brightness(2.5)";
        } else if (brightness == "brightness(2.5)") {
          target.style.filter = "brightness(2)";
        } else if (brightness == "brightness(2)") {
          target.style.filter = "brightness(1.9)";
        } else if (brightness == "brightness(1.9)") {
          target.style.filter = "brightness(1.8)";
        } else if (brightness == "brightness(1.8)") {
          target.style.filter = "brightness(1.7)";
        } else if (brightness == "brightness(1.7)") {
          target.style.filter = "brightness(1.6)";
        } else if (brightness == "brightness(1.6)") {
          target.style.filter = "brightness(1.5)";
        } else if (brightness == "brightness(1.5)") {
          target.style.filter = "brightness(1.4)";
        } else if (brightness == "brightness(1.4)") {
          target.style.filter = "brightness(1.3)";
        } else if (brightness == "brightness(1.3)") {
          target.style.filter = "brightness(1.2)";
        } else if (brightness == "brightness(1.2)") {
          target.style.filter = "brightness(1.1)";
        } else if (brightness == "brightness(1.1)") {
          target.style.filter = "brightness(1)";
        } else if (brightness == "brightness(1)") {
          target.style.filter = "brightness(0.9)";
        } else if (brightness == "brightness(0.9)") {
          target.style.filter = "brightness(0.8)";
        } else if (brightness == "brightness(0.8)") {
          target.style.filter = "brightness(0.7)";
        } else if (brightness == "brightness(0.7)") {
          target.style.filter = "brightness(0.6)";
        } else if (brightness == "brightness(0.6)") {
          target.style.filter = "brightness(0.5)";
        } else if (brightness == "brightness(0.5)") {
          target.style.filter = "brightness(0.4)";
        } else if (brightness == "brightness(0.4)") {
          target.style.filter = "brightness(0.3)";
        } else if (brightness == "brightness(0.3)") {
          target.style.filter = "brightness(0.2)";
        } else if (brightness == "brightness(0.2)") {
          target.style.filter = "brightness(0.1)";
        } else if (brightness == "brightness(0.1)") {
          target.style.filter = "brightness(0)";
        }
      } else {
        target.style.backgroundColor = color;
        target.style.filter = "brightness(1)";
      }
    }
  }
}

//Grid Size Slider
let slider = document.getElementById("myRange");
let output = document.getElementById("sliderValue");
output.innerText = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
  gridSize = this.value;
  makeGrid(this.value);
  root.style.setProperty("--gridSize", this.value);
};

let color = "#30D5C8";

//Color Picker
const colorPicker = document.getElementById("colorpicker");
let pickColor = "#0A0A0A";
colorPicker.oninput = function () {
  pickColor = this.value;
  if (colorBtn.classList.contains("active")) {
    color = pickColor;
  }
};

//Color Button
const colorBtn = document.getElementById("color");
function colorMode() {
  color = pickColor;
  colorBtn.className = "active";
  eraser.className = "";
  highlight.className = "";
  shade.className = "";
}
colorBtn.addEventListener("click", colorMode);

//Eraser
const eraser = document.getElementById("eraser");
eraser.addEventListener("click", erase);
function erase() {
  color = "#ffffff";
  eraser.className = "active";
  colorBtn.className = "";
  highlight.className = "";
  shade.className = "";
}

//Highlight
const highlight = document.getElementById("highlight");
highlight.addEventListener("click", lighten);
function lighten() {
  highlight.className = "active";
  eraser.className = "";
  colorBtn.className = "";
  shade.className = "";
}

//Shade
const shade = document.getElementById("shade");
shade.addEventListener("click", darken);
function darken() {
  shade.className = "active";
  highlight.className = "";
  eraser.className = "";
  colorBtn.className = "";
}

//Reset
const reset = document.getElementById("reset");
reset.addEventListener("click", newGrid);
function newGrid() {
  resetGrid();
  makeGrid(gridSize);
}

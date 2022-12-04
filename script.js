//Make initial grid
const container = document.querySelector('.container');
let gridSize = 16;
let root = document.querySelector(':root');
root.style.setProperty('--gridSize', gridSize);

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function makeGrid(gridSize) {
    resetGrid();
    for (let i = 0; i < gridSize * gridSize ; i++) {
        box = document.createElement('box');
        box.className = 'box';
        
        container.appendChild(box);
    }
}
makeGrid(gridSize);

//Listen for mouse drag or click
window.mouseDown = false;
document.onmousedown = function() {
    window.mouseDown = true;
}
document.onmouseup = function() {
    window.mouseDown = false;
}
document.addEventListener("mouseover", function(e){
    const target = e.target.closest(".box"); 
    if (window.mouseDown == true) {
        if(target){
            target.style.backgroundColor = color;
          }
    }
  });

document.addEventListener("mousedown", function(e){
    const target = e.target.closest(".box");
        if(target){
            target.style.backgroundColor = color;
          }
  });

//Slider
let slider = document.getElementById('myRange');
let output = document.getElementById('sliderValue');
output.innerText = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    gridSize = this.value;
    makeGrid(this.value);
    root.style.setProperty('--gridSize', this.value);
  }


let colorPicker = document.getElementById('colorpicker');
let color = '#000000';
colorPicker. oninput = function () {
color = this.value;
  }
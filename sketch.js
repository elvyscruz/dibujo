let drawing = false;
let currentColor = '#000000';
let currentSize = 5;

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent('canvas-container');
  background(255);

  strokeWeight(currentSize);
  stroke(currentColor);
  noFill();

  setupControls();
}

function setupControls() {
  let colorPicker = document.getElementById('colorPicker');
  let brushSize = document.getElementById('brushSize');
  let brushSizeValue = document.getElementById('brushSizeValue');
  let clearButton = document.getElementById('clearCanvas');

  colorPicker.addEventListener('change', function() {
    currentColor = this.value;
    stroke(currentColor);
  });

  brushSize.addEventListener('input', function() {
    currentSize = this.value;
    brushSizeValue.textContent = this.value;
    strokeWeight(currentSize);
  });

  clearButton.addEventListener('click', function() {
    background(255);
  });
}

function draw() {
  if (drawing && mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function mousePressed() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    drawing = true;
    strokeWeight(currentSize);
    stroke(currentColor);
  }
}

function mouseReleased() {
  drawing = false;
}

function mouseDragged() {
  if (drawing) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function windowResized() {
  resizeCanvas(800, 600);
}
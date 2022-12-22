
/* global
background createCanvas fill rect random
width height
textSize text textAlign CENTER 
mouse mouseIsPressed
Canvas Sprite Group Tiles
*/

let player, floor;
let img;
let x1;
let x2;
let y;
const STEP = 5;
let currStep = 0;
let prevStep = 0;
const OVERLAP = 20;
let centerX = 0;
let sliceWidth = 0;
let arrowBuffer = 50;
let arrowRadius = 50;

function preload() {
  img = loadImage('bread.jpg');
}

function setup() {
  createCanvas(windowWidth>600?600:windowWidth, windowHeight>600?600:windowHeight);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  setImageSize();
  x1 = 0;
  x2 = width;
  sliceWidth = width/10;
}

function draw() {
  background(255);
  image(img, x1, y);
  image(img, x2, y);
  if (keyIsDown(LEFT_ARROW)) {
    currStep = STEP;
  } else if (prevStep > 0) {
    currStep -= 0.5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    currStep = -STEP;
  } else if (prevStep < 0) {
    currStep += 0.5;
  }
  moveX(currStep);
  prevStep = currStep;
  drawScale();
  drawArrows();
}

function drawArrows() {
  textSize(50);
  noStroke();
  if (dist(mouseX,mouseY,width-arrowBuffer,arrowBuffer) < arrowRadius) {
    fill(200, 50, 50);
    if (mouseIsPressed) {
      currStep = -STEP;
      fill(255, 0, 0);
    }
    text("🡲", width-50, 50);
  } else {
    fill(150);
    text("🡲", width-50, 50);
  }
  if (dist(mouseX,mouseY,arrowBuffer,arrowBuffer) < arrowRadius) {
    fill(200, 50, 50);
    if (mouseIsPressed) {
      currStep = STEP;
      fill(255, 0, 0);
    }
    text("🡰", 50, 50);
  } else {
    fill(150);
    text("🡰", 50, 50);
  }
  
}

function drawScale() {
  fill(0);
  rect(width/2, y, width, 10);
  drawNums();
}

function drawNums() {
  push();
  translate(width/2, y);
  let centerishNum = -centerX / sliceWidth;
  const RANGE = 25;
  let minNum = Math.floor(centerishNum - RANGE/2);
  let maxNum = Math.floor(centerishNum + RANGE/2);
  for (let num = minNum; num < maxNum; num++) {
    let x = centerX + sliceWidth * num;
    if (num % 5 == 0) {
      rect(x, -10, 5, 20);
      textSize(30);
      text(num, x-fudge(num), -40);     
    } else {
      rect(x, -5, 2, 10);
      textSize(15);
      text(num, x-fudge(num), -20);
    }
  }
  pop();
}

function fudge(n) {
  let output = 0;
  if (n < 0) {
    output = textWidth("-")/2;
  }
  return output;
}

function moveX(step) {
  centerX += step;
  x1 += step;
  if (x1 > width) {
    x1 = -width + (STEP + OVERLAP);
  }
  if (x1 < -width) {
    x1 = width - (STEP + OVERLAP);
  }
  x2 += step;
  if (x2 > width) {
    x2 = -width + (STEP + OVERLAP);
  }
  if (x2 < -width) {
    x2 = width - (STEP + OVERLAP);
  }
}

function setImageSize() {
  let widthFactor = img.width / width;
  img.resize(img.width / widthFactor, img.height / widthFactor);
  y = height - img.height;
}

function windowResized() {
  // resizeCanvas(windowWidth, windowHeight);
  // setImageSize();
}

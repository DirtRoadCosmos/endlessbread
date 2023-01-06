window.location.replace("wow-endless-bread.glitch.me");

// /* global
// background createCanvas fill rect random
// width height
// textSize text textAlign CENTER 
// mouse mouseIsPressed
// Canvas Sprite Group Tiles
// */

// let player, floor;
// let img;
// let y;
// const ARROW_BUFFER = 80;
// const ARROW_RADIUS = 80;
// const STEP = 5;
// let currStep = 0;
// let prevStep = 0;
// const OVERLAP = 20;
// let centerX = 0;
// let sliceWidth = 0;
// let scorePos = 0;
// let scoreNeg = 0;

// function preload() {
//   img = loadImage('bread.png');
//   bg = loadImage('background-panera.png')
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   // createCanvas(windowWidth>600?600:windowWidth, windowHeight>600?600:windowHeight);
//   rectMode(CENTER);
//   textAlign(CENTER, CENTER);
//   setImageSize();
// }

// function draw() {
//   background(255);
//   if (keyIsDown(LEFT_ARROW)) {
//     currStep = STEP;
//   } else if (prevStep > 0) {
//     currStep -= 0.5;
//   }
//   if (keyIsDown(RIGHT_ARROW)) {
//     currStep = -STEP;
//   } else if (prevStep < 0) {
//     currStep += 0.5;
//   }
//   moveX(currStep);
//   prevStep = currStep;
//   drawBread();
//   drawScale();
//   drawArrows();
//   updateScore();
//   showScore();
//   showMenu();
// }

// function showMenu() {
//   textAlign(RIGHT, TOP);
//   textSize(15);
//   fill(150);
//   text("v1.1", width-10, 10);
// }

// function drawBread() {
//   let x = (centerX % img.width) - img.width * 2;
//   while (x < width) {
//     image(img, x, y);
//     x += img.width;
//   }
// }

// function setImageSize() {
//   let baselineResize = 1;
//   let zoomFactor = 1;
//   img.resize(img.width / baselineResize, img.height / baselineResize);
//   sliceWidth = img.width / 10;
//   y = height - img.height;
//   // // fit one img to screen
//   // let widthFactor = img.width / width;
//   // img.resize(img.width / widthFactor, img.height / widthFactor);
//   // y = height - img.height;
// }

// function showScore() {
//   push();
//   translate(width/2, 30);
//   fill(0);
//   textSize(20);
//   textAlign(CENTER, CENTER);
//   text("SLICES YOU'VE SEEN", 0, 0);
//   textSize(40);
//   textAlign(CENTER, CENTER);
//   text(scoreNeg + " ... " + scorePos, 0, 40);
//   pop();
// }

// function getLocation() {
//   return round(-1 * centerX / sliceWidth);
// }

// function updateScore() {
//   let currentLoc = getLocation();
//   let currentRight = round(currentLoc + (width/2 / sliceWidth));
//   let currentLeft = round(currentLoc - (width/2 / sliceWidth));
//   if (currentRight > scorePos) {
//     scorePos = currentRight;
//   }
//   if (currentLeft < scoreNeg) {
//     scoreNeg = currentLeft;
//   }
// }

// function drawArrows() {
//   textSize(ARROW_RADIUS);
//   textAlign(CENTER, CENTER);
//   noStroke();
//   if (dist(mouseX,mouseY,width-ARROW_BUFFER,ARROW_BUFFER) < ARROW_RADIUS/2) {
//     fill(200, 50, 50);
//     if (mouseIsPressed) {
//       currStep = -STEP;
//       fill(255, 0, 0);
//     }
//     text(">", width-ARROW_BUFFER, ARROW_BUFFER);
//   } else {
//     fill(0);
//     text(">", width-ARROW_BUFFER, ARROW_BUFFER);
//   }
//   if (dist(mouseX,mouseY,ARROW_BUFFER,ARROW_BUFFER) < ARROW_RADIUS/2) {
//     fill(200, 50, 50);
//     if (mouseIsPressed) {
//       currStep = STEP;
//       fill(255, 0, 0);
//     }
//     text("<", ARROW_BUFFER, ARROW_BUFFER);
//   } else {
//     fill(0);
//     text("<", ARROW_BUFFER, ARROW_BUFFER);
//   }
  
// }

// function drawScale() {
//   fill(0);
//   rect(width/2, y, width, 10);
//   drawNums();
// }

// function drawNums() {
//   push();
//   translate(width/2, y);
//   let centerishNum = -centerX / sliceWidth;
//   const RANGE = width / sliceWidth * 4;
//   let minNum = Math.floor(centerishNum - RANGE/2);
//   let maxNum = Math.floor(centerishNum + RANGE/2);
//   for (let num = minNum; num < maxNum; num++) {
//     let x = centerX + sliceWidth * num;
//     textAlign(CENTER, CENTER);
//     fill(0);
//     if (num % 5 == 0) {
//       rect(x, -10, 5, 20);
//       textSize(30);
//       text(num, x-fudge(num), -40);     
//     } else {
//       rect(x, -5, 2, 10);
//       textSize(15);
//       text(num, x-fudge(num), -20);
//     }
//   }
//   pop();
// }

// function fudge(n) {
//   let output = 0;
//   if (n < 0) {
//     output = textWidth("-")/2;
//   }
//   return output;
// }

// function moveX(step) {
//   centerX += step;
// }

// function windowResized() {
//   // resizeCanvas(windowWidth, windowHeight);
//   // setImageSize();
// }

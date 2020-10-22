var headX = 200;
var headY = 200;
var headDirection = 1;  
var noseX = 220
var noseY = 220
var noseDirection = 3;
var mouthX = 180
var mouthY = 266
var mouthDirection = 2;
var eye1X = 145
var eye1Y = 120
var eye1Direction = 1;
var eye2X = 240
var eye2Y = 140
var eye2Direction = 1;
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(360, 100, 300);
  ellipse(headX,headY,260,300);
  headX+=headDirection;
  if(headX >= 418 || headX <= 182)
  {
      headDirection *= -1;
  }
    ellipse(eye1X,eye1Y,25,60);
    eye1X+=eye1Direction;
  if(eye1X >= 200 || eye1X <= 290)
  {
      eye1Direction *= -1;
  }
    ellipse(eye2X,eye2Y,25,60);
    eye2X+=eye2Direction;
  if(eye2X >= 200 || eye2X <= 290)
  {
      eye2Direction *= -1;
  }
    triangle(175, noseX, 203, 155, 231, noseY);
    ellipse(mouthX,mouthY,80,40);
    mouthX+=mouthDirection;
  if(mouthX >= 418 || mouthX <= 82)
  {
        mouthDirection *= -2;
  }
    line(30, 20, 85, 75);
    line(370, 20, 315, 75);
    textSize(28);
      text('"Casual Onlooker"', 10, 375);
      textSize(12);
      text('By Cain Fritz', 15, 389);
}
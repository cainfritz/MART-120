var characterX = 100;
var characterY = 100;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
function draw()
{
    background(120,145,18);
    stroke(0);
    fill(0);
createBorders();
exitMessage();
winningMessage();
createCharacter();
characterMovement();
    fill(153,20,4);
    rect(shapeX, shapeY, 10);
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
    if(characterX > width && characterY > width-50)

    fill(0,0,0);
    circle(mouseShapeX, mouseShapeY, 25);
}
function createBorders ()
{
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0, height-10,width, 10);
    rect(width-10,0,10,height-50);
}
function createCharacter ()
{
    fill(12,90,153);
    circle(characterX,characterY,25);
}
function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
function exitMessage()
{
    textSize(16);
    text("This Way", width-150,height-50)
}
function winningMessage()
{
    fill(0);
    stroke(5);
    textSize(26);
    text("You Win!", width/2-50, height/2-50);
}
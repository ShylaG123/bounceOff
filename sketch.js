var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
Gameobject1 = createSprite(200,100,50,50)
Gameobject2 = createSprite(800,100,50,50)
Gameobject1.velocityX = +5
Gameobject2.velocityX = -5
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(Gameobject1,Gameobject2);
bounceOff(movingRect,fixedRect)

  
  drawSprites();
}

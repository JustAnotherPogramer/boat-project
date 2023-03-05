var spriteName
var seaImg
var shipImg
var ship
function preload(){
  seaImg = loadImage ("sea.png");
  shipImg = loadAnimation("ship-1.png", "ship-2.png");
}

function setup(){
  createCanvas(900,600); 
  spriteName = createSprite(450,300,900,600);
  spriteName.addImage(seaImg);
  spriteName.scale = 0.3
  spriteName.velocityX = -5;

  
  ship = createSprite(225,300,200,200);
  ship.addAnimation("moving", shipImg);
  ship.scale=0.3;
}

function draw() {
  background("white");
  drawSprites();



if(spriteName.x < 9){
  spriteName.x = spriteName.width/6;
}
}

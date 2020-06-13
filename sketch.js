var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(200, 200, 100, 50);
 fixedRect.shapeColor = "purple";
 movingRect = createSprite(400,200,200,100);
 movingRect.shapeColor = "purple";
 movingRect.debug = true;
 fixedRect.debug = true;
}

function draw() {
  background(75,155,210); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x-fixedRect.x <=fixedRect.width/2 + movingRect.width/2
  && fixedRect.x-movingRect.x<=movingRect.width/2 + fixedRect.width/2
  && movingRect.y-fixedRect.y <=fixedRect.height/2 + movingRect.height/2
  && fixedRect.y-movingRect.y<=movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  else {
    movingRect.shapeColor="purple";
    fixedRect.shapeColor="purple";
  }
  
  drawSprites();
}
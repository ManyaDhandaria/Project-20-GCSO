var car,wall;
var speed,weight,deformation;
var border1,border2;

function setup() {
  createCanvas(800,400);
  
  border1=createSprite(0,0,1700,10);
  border1.shapeColor="blue";
  border2=createSprite(0,400,1700,10);
  border2.shapeColor="blue";

  car=createSprite(50,200,50,50);
  car.shapeColor="Pink";
  wall=createSprite(700,200,40,100);
  wall.shapeColor="Magenta";
  
  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;
}

function draw() {
  background("black");  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22500;
    if (deformation>180){
      car.shapeColor="red";
    }
    else if (deformation<180 && deformation >100){
      car.shapeColor="yellow";
    }
    else{
      car.shapeColor="green";
    }
  }
  drawSprites();
}

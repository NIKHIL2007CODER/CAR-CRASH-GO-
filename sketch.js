var car , wall;
var speed,weight;
var deformation;
var carName;
function setup() {
  createCanvas(1365,620);
  car = createSprite(100,310, 99, 50);
 car.shapeColor='aqua'
 
 

 wall = createSprite(1300,310,60,400);
wall.shapeColor = (10,32,175);


speed=Math.round(random(55,90));
weight=Math.round(random(400,1500));

}

function draw() {
  background('black');

  car.velocityX=speed;

  var deformation=0.5*weight*speed*speed/22500;
  
  isTouching(car,wall);
  textSize(25);
  stroke('aqua')
  text('SPEED :' + speed,430,50);
  
  textSize(25);
  stroke('white')
  text("WEIGHT :" + weight + "KG",580,50);
  
  textSize(25);
  stroke('Magenta')
  text("DEFORMATION :" + deformation,800,50)

  drawSprites();
 
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
     
      wall.x = 1300;
      car.x = 1290;
      car.velocityX=0;
      var deformation=0.5*weight*speed*speed/22500;
      if(deformation>180)
      {
        car.shapeColor='red';
        textSize(25);
        stroke('red')
        text("CAR MODEL : ZENIA",100,50)
      
      }
      if(deformation<170 || deformation>100)
      {
        car.shapeColor='yellow';
        textSize(25)
        stroke('yellow')
        text("CAR MODEL : TOURUS",100,50)
      
      }
      if(deformation<95)
      {
        car.shapeColor='limegreen';
        textSize(25)
        stroke("limegreen")
        text("CAR MODEL : CYCLAP",100,50)
      
      }
      
      
    return true;
  }
  else {
    
    return false;
  } 
 
}

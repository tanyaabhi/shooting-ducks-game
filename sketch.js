var PLAY = 1;
var END = 0;
var gameState = PLAY;


var score=0;

var gameOver, restart;



function preload(){
  
  duck1=loadImage("duck.png");
  bowIg=loadImage("bow.png");
  arrowIg=loadImage("arrow.png");

  //gameOverImg = loadImage("gameOver.png");
 // restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(600, 600);
  
  bow=createSprite(75,300)
  bow.addImage(bowIg);
  bow.scale=0.1;
  
  gameOver = createSprite(300,100);
  //gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  //restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
  
  duckGroup=new Group();
}

function draw() {
  //trex.debug = true;
  background(180);
  text("Score: "+ score, 500,50);
  
  spawnducks()
  bow.y=mouseY;
  
  if(keyDown("space")){
    createArrow();
  }
    
  drawSprites();
}

function createArrow() {
   arrow=createSprite(370,200,50,10);
   arrow.addImage(arrowIg);
    arrow.velocityX=8; 
    arrow.scale=0.3; 
    //return arrow;
 }

function spawnducks() {
  if(frameCount % 60 === 0) {
    var duck = createSprite(600,Math.round(random(50,550)),10,40);
    //obstacle.debug = true;
    duck.velocityX = -(6);
    
    //generate random obstacles
    //var rand = Math.round(random(1,6));
    
      duck.addImage(duck1)

    
    //assign scale and lifetime to the obstacle           
    duck.scale = 0.1;
    duck.lifetime = 300;
    //add each obstacle to the group
    duckGroup.add(duck);
  }
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  
  
  
  
  
  score = 0;
  
}
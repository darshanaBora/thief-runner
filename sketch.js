const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var thief,coin,coin1,coin2,coin3,coin4,coin5,policeman1,policeman,invisibleGround,gameOver,restart,cityBackground;
var thiefImg,coinImg,policemanImg,gameOverImg,restartImg,backgroundImg;
var policemanGroup,coinsGroup;
var score,Coins;

function preload(){
  thiefImg = loadImage("images/thief.png");
  coinImg = loadImage("images/coin.png");
  policemanImg = loadImage("images/policeman.png");
  gameOverImg = loadImage("images/gameOver.png");
  restartImg = loadImage("images/restart.png");
  backgroundImg = loadImage("images/background.png");
}
function setup(){
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  cityBackground = createSprite(10,90,10,10);
  cityBackground.addImage("background", backgroundImg);
  cityBackground.scale = 0.5;
  cityBackground.velocityX = -3;

  policeman = createSprite(1250,489,0,0);
  policeman.addImage("policeman", policemanImg);
  policeman.scale = 0.3;
  policeman.velocityX = -3;
  policeman.setCollider("rectangle",0,0,200,policeman.height);
  policeman.debug = true

  thief = createSprite(200, 500, 50, 50);
  thief.addImage("thief", thiefImg);
  thief.scale = 0.5;
  thief.setCollider("rectangle",0,0,255,thief.height);
  thief.debug = true

  invisibleGround = createSprite(600,580,1200,5);
  invisibleGround.visible = false;
  
  restart = createSprite(500,400,20,20);
  restart.addImage("restart", restartImg);
  restart.scale = 0.5;
  restart.visible = false;

  gameOver = createSprite(500,250,20,20);
  gameOver.addImage("gameOver",gameOverImg);
  gameOver.scale = 2;
  gameOver.visible = false;

  coin = createSprite(900,500,10,10);
  coin.addImage("coinImg", coinImg);
  coin.scale = 0.20
  coin.velocityX = -3;
  coin.setCollider("rectangle",0,0,300,310);
  coin.debug = true

  coin1 = createSprite(1000,500,10,10);
  coin1.addImage("coinImg", coinImg);
  coin1.scale = 0.20
  coin1.velocityX = -3;
  coin1.setCollider("rectangle",0,0,300,310);
  coin1.debug = true

  coin2 = createSprite(1100,500,10,10);
  coin2.addImage("coinImg", coinImg);
  coin2.scale = 0.20
  coin2.velocityX = -3;
  coin2.setCollider("rectangle",0,0,300,310);
  coin2.debug = true

  coin3 = createSprite(1400,500,10,10);
  coin3.addImage("coinImg", coinImg);
  coin3.scale = 0.20
  coin3.velocityX = -3;
  coin3.setCollider("rectangle",0,0,300,310);
  coin3.debug = true

  score = 0;
  Coins = 0;
 
}

function draw() {
  background("black");

  if(cityBackground.x < 0){
    cityBackground.x = width/2;
  }

  if(policeman.x < 0){
    policeman.x = 1200;
  }

  if(keyDown("SPACE")&& thief.y >= 100){
    thief.velocityY = -13;
  }
  thief.velocityY = thief.velocityY + 0.8
  
  if(thief.isTouching(policeman)){
    cityBackground.visible = false;
    policeman.visible = false
    thief.visible = false
    policeman.velocityX = 0;
    restart.visible = true;
    gameOver.visible = true;
  }

  if(thief.isTouching(coin)){
    Coins=+1
    coin.destroy();
  }

  if(thief.isTouching(coin1)){
    Coins=+1
    coin1.destroy();
  }

  if(thief.isTouching(coin2)){
    Coins=+1
    coin2.destroy();
  }

  if(thief.isTouching(coin3)){
    Coins=+1
    coin3.destroy();
  }
  thief.collide(invisibleGround);

  score = score + Math.round(frameCount/60);

  drawSprites();

  stroke("black");
  strokeWeight(2);
  fill("white"); 
  textSize(30);
  text("Score: "+ score, 700,100);
  fill("white");
  textSize(30);
  text("Coin: "+ Coins, 500,100);
}

function Reset(){
  
}

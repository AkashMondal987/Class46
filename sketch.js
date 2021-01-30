var pokeBall, pikachu, obstacles, score, ground, background;
var pokeBallImage, pikachuAnimation, obstaclesImage, backgroundImage;
var pokeBallGroup, obstaclesGroup;

function preload(){
  pokeBallImage = loadImage("sprites/pokeBalls.png");
  pikachuAnimation = loadAnimation("sprites/PikachuGif.gif");
  obstaclesImage = loadImage("sprites/TeamRocket.png");
  backgroundImage = loadImage("sprites/Jungle.jpg");
}

function setup(){
  background = createSprite(0,0,1600,800);
  background.addImage("background", backgroundImage);
  background.scale = 10;

  pikachu = createSprite(100, 300, 20, 50);
  pikachu.addAnimation("pikachu", pikachuAnimation);
  pikachu.scale = 0.5;

  ground = createSprite(1600 ,780, 1600, 20);
  ground.x = ground.width /2;
  ground.velocityX = -5

  pokeBallGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;

}

function draw(){
  createCanvas(1600,800);

  textSize(15);
  stroke("black");
  strokeWeight(15);
  text("Score: " + score, 800, 100);
  

  background.velocityX = -5;

  if(background.x < 0){
    background.x = background.width/2;
  }
  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  if(keyDown("space")&& pikachu.y >= 159) {
    pikachu.velocityY = -12;
  }

  ground.visible = false;

  pikachu.velocityY = pikachu.velocityY + 0.8;

  pikachu.collide(ground);

  pokeBalls();

  if (pokeBallGroup.isTouching(pikachu)){
    score = score + 1;
    //pokeBall.destroyEach();
  }

  drawSprites();
}

function pokeBalls(){
  if (frameCount % 60 === 0){
    pokeBall = createSprite(1600, 600, 10, 10);
    pokeBall.addImage("pokeBall", pokeBallImage);
    pokeBall.y = Math.round(random(50,750));
    pokeBall.velocityX = -25;
    pokeBall.scale = 0.15

    pokeBallGroup.add(pokeBall);
  }
}
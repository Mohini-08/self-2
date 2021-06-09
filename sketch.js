var mon1,mon2,mon3,player,prize,loser,dot, dotsGroup;
var monster1_img,monster2_img,monster3_img,player_img,prize_img,loser_img;
var score = 0;
var lives = 3;
var point1_img;

function preload(){
  monster1_img = loadImage("monster1.png");
  monster2_img = loadImage("monster2.png");
  player_img = loadImage("tomb.jpg");
  point1_img = loadImage("point1.png");
  monster3_img = loadImage("monster3.png");
  prize_img = loadImage("prize-cup-.png");
  loser_img = loadImage("loser-trophy.png")
}

function setup() {
  createCanvas(1000,500);

  dotsGroup = new Group();
  wallGroup = new Group();

  mon1 = createSprite(207,408,85,100);
  mon1.addImage(monster1_img);
  mon1.scale = 0.1;

  mon2 = createSprite(390,180,85,100);
  mon2.addImage(monster2_img);
  mon2.scale = 0.3;
  
  mon3 = createSprite(659,159,100,100);
  mon3.addImage(monster3_img);
  mon3.scale = 0.3;

  player = createSprite(900,430,85,100);
  player.addImage(player_img);
  player.scale = 0.1;

  prize = createSprite(390,300,100,100);
  prize.addImage(prize_img);
  prize.scale = 0.5;
  prize.visible = false;

  loser = createSprite(390,300,100,100);
  loser.addImage(loser_img);
  loser.scale = 0.5;
  loser.visible = false;
  
 //vertical line
  createWall(30,190,20,100);
 //horizontal line
 createWall(90,125,100,20);
 createWall(195,125,100,20);
 createWall(300,125,100,20);
 createWall(405,125,100,20);
 createWall(555,125,100,20);
 createWall(510,125,100,20);
 createWall(660,125,100,20);
 createWall(766,125,100,20);  
 createWall(870,125,100,20);
//vertical line
createWall(930,190,20,100);
createWall(30,297,20,100);
createWall(930,297,20,100);
createWall(30,402,20,100);
createWall(930,402,20,100);
 //horizontal line
 createWall(90,460,100,20);
 createWall(200,460,100,20);
 createWall(305,460,100,20);
 createWall(408,460,100,20);
 createWall(512,460,100,20);
 createWall(615,460,100,20);
 createWall(718,460,100,20);
 createWall(820,460,100,20);
 createWall(898,460,40,20);
 //lines
 createWall(250,400,20,100); 
 createWall(400,300,100,20);
 createWall(680,280,20,100);
 createWall(680,340,100,20);


 mon1.velocityX = 1;
 mon2.velocityY = 1;
 mon3.velocityX = 3;
 mon3.velocityY = 3;
   
 edges = createEdgeSprites();
   //dot line 1
   createDot(860,430);
   createDot(820,430);
   createDot(780,430);
   createDot(740,430);  
   createDot(700,430);
   createDot(660,430);
   createDot(616,430);
   createDot(574,430);
   createDot(530,430);
   createDot(490,430);
   createDot(450,430);
   createDot(410,430);
   createDot(370,430);
   createDot(330,430);
   createDot(290,430);
  //dot line 2
  createDot(290,399);
  createDot(290,366);
   // dot line 3
  createDot(230,420);
  createDot(230,390);
  createDot(230,360);
   //dot line 4
   createDot(50,360);
  createDot(50,390);
  createDot(50,420);
   //dot line 5
  createDot(680,360);
  createDot(650,360);
  createDot(710,360);
  createDot(655,310);
  createDot(710,310);
  createDot(710,280);
  createDot(710,250);
  createDot(655,280);
  createDot(655,250);

 // horizontalDots(50,150,870,100);
  //verticalDots(50, 180, 50, 340);
  //verticalDots(890,170,890,400);
}

function draw() {
  background("black");
  textSize(20);
  text("SCORE: " + score,860,20);
   text(mouseX + ":" + mouseY,mouseX,mouseY);

  if(keyDown(UP_ARROW)){
    player.y -= 2;
  }
  if(keyDown(DOWN_ARROW)){
    player.y += 2;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x += 2;
  }
  if(keyDown(LEFT_ARROW)){
    player.x -= 2;
  }
//touches the monster,disaapear
if(player.isTouching(mon1) || player.isTouching(mon2) ){
  loser.visible = true;
  textSize(30);
  textAlign(CENTER);
  text("YOU LOST THE GAME" ,390,450);
}
  mon2.bounceOff(wallGroup);
  mon1.bounceOff(wallGroup);
  mon3.bounceOff(wallGroup);
  
  for(var i =0;i <= dotsGroup.length; i++){ 
    if(dotsGroup.overlap(player, dotsGroup.get(i))){ 
    dotsGroup.get(i).remove(); 
    score++;
    var point = createSprite(player.x, player.y-25,20,20);
    point.addImage(point1_img); 
    point.scale = 0.7; 
    point.lifetime = 50; 
    point.velocityY = -4; 
  }
  }
 
 if(dotsGroup.length === 0){
  textSize(30);
  textAlign(CENTER);
  text("CONGRATULATION" ,390,390);
  prize_img.visble = true;
 }

  drawSprites()
}
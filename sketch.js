var flipper, flipper1, flipper2, flipper3, flipper4, flipper5, flipper6, flipper7, ball;
var flipper_img, flipper1_img, flipper2_img, flipper3_img, flipper4_img, flipper5_img, flipper6_img, flipper7_img, ball_img;
var board, board_img, center;
var player1, player2, player3, player4;
var playerCount = 0;
var gameState = 0;
var database;

function preload(){

  flipper_img = loadImage("bat.png1.png");
  flipper1_img = loadImage("bat.png2.png");
  flipper2_img = loadImage("bat.png3.png");
  flipper3_img = loadImage("bat.png4.png");
  ball_img = loadImage("ball.png");
  board_img = loadImage("bg.png1.png");

}

function setup() {
  createCanvas(displayWidth - 600, displayHeight - 200);
  //board = createSprite(600, 500, 600, 600);
  //board.addImage("board", board_img)

  database = firebase.database();
}

function draw() {
  background(208); 
  
  text(mouseX+ ","+mouseY,mouseX,mouseY);

  drawSprites();
}
function preload() 
{
  mySound = loadSound('assets/PopDanthology2013.mp3');
}

var x1 = 20;
var y1 = 20;
var x = [];
var y = [];
var s = 20;
var finished;
var won = false;
var begin = false;
var score = 0;
var lvl2 = false;
var done = false;
var victory = false;
var X = 20;
var Y = 20;
var x2 = 20;
var y2 = 20;

function setup() {
  createCanvas(1000, 1000);
  mySound.setVolume(0.5);
  mySound.play();
}

function draw() {
    
    
      for (var i = 0; i < 3; i++) {
      x[i] = random(0, width);
      y[i] = random(0, height);
    }
    
    textSize(16);
    text("Use Arrow Keys to move, avoid rectangles, reach the black strip, Good Luck!", 400, 25, 450, 75);
    rect(x[0], 100, s, 20);
    rect(900, y[0], s, 20);
    rect(x[0], 300, s, 20);
    rect(x[1], 600, s, 20);
    rect(x[2], 900, s, 20);
    rect(x[2], 500, s, 20);
    rect(400, y[1], s, 20);
    rect(700, y[1], s, 20);
    rect(800, y[1], s, 20);
    
    if (finished === false) {
    fill(0);
    stroke(0);
    background(255);
    textSize(32);
    text("score:", 20, 30, 30, 40);
    text(score, 120, 30, 130, 40);
    score = score + 1;
    rect(950, 0, 10, height);
    ellipse(x1, y1, 20, 20);
    

    if (dist(x1, y1, x[1], y[1]) < s + 20) {
      finished = true;
    }
  }
  if (lvl2 === false && won === false) 
  {
      if (keyIsDown(UP_ARROW)) {
        y1 = y1 - 8;
      }

      if (keyIsDown(LEFT_ARROW)) {
        x1 = x1 - 8;
      }

      if (keyIsDown(DOWN_ARROW)) {
        y1 = y1 + 8;
      }

      if (keyIsDown(RIGHT_ARROW)) {
        x1 = x1 + 8;
      }
    }





  if (x1 > 949) {
    won = true;
  }
  if (won === true) {
    x1 = 0;
    background(0, 0, 255);
    textSize(256);
    text("you won", 0, 200, 50, 250);
    textSize(32);
    text("press r to retry", 400, 400, 450, 450);
    text("press 2 to go to the next level", 500, 500, 550, 550);
    lvl2 = false;
  }

  function keyTyped() {
    if (key == 'r') {
      x1 = 20;
      y1 = 500;
      finished = false;
      won = false;
      score = 0;
    }
  }
  if (finished === true) {
    x1 = 20;
    y1 = 500;
    textSize(32);
    text("nice try", 300, 300, 350, 350);
    text("press r to retry", 500, 500, 550, 550);
    text(score, 120, 30);
  }

  function keyTyped() {
    if (key == '2') {
      lvl2 = true;
      won = false;
    }
  }
  if (lvl2 === true) {
    if (done === false) {
      background(0, 255, 0);
      finished = false;
      won = false;
      for (var i = 0; i < 3; i++) {
        x[i] = random(0, width);
        y[i] = random(0, height);
      }
      if (keyIsPressed(UP_ARROW)) {
        y2 = y2 - 8;
      }

      if (keyIsPressed(LEFT_ARROW)) {
        x2 = x2 - 8;
      }

      if (keyIsPressed(DOWN_ARROW)) {

        y2 = y2 + 8;
      }

      if (keyIsPressed(RIGHT_ARROW)) {

        x2 = x2 + 8;
      }
    }
    ellipse(x2, y2, 20, 20);
    rect(x[2], 50, s, 20);
    rect(x[0], 100, s, 20);
    rect(x[2], 200, s, 20);
    rect(x[2], 300, s, 20);
    rect(x[2], 400, s, 20);
    rect(x[2], 500, s, 20);
    rect(x[2], 600, s, 20);
    rect(x[2], 700, s, 20);
    rect(x[2], 800, s, 20);
    rect(x[2], 900, s, 20);
    rect(x[2], 1000, s, 20);
    rect(200, y[0], s, 20);
    rect(x[0], 300, s, 20);
    rect(400, y[1], s, 20);
    rect(x[2], 500, s, 20);
    rect(600, y[2], s, 20);
    rect(x[2], 700, s, 20);
    rect(800, y[1], s, 20);
    rect(100, y[1], s, 20);
    rect(50, y[1], s, 20);
    rect(300, y[1], s, 20);
    rect(500, y[1], s, 20);
    rect(700, y[1], s, 20);
    rect(900, y[1], s, 20);
    rect(0, y[1], s, 20);
    rect(x[2], 900, s, 20);
    rect(x[2], 0, s, 20);
    rect(1000, y[2], s, 20);
    rect(950, 0, 10, height);

    if (dist(x1, y1, x[1], y[1]) < s + 20) {
      done = true;
    }
  }
  if (done === true) {
    x2 = 0;
    y2 = 500;
    background(255);
    textSize(32);
    text("press 1 to retry", 100, 100, 150, 150);
    score = score - 1;
  }

  function keyTyped() {
    if (key == '1') {
      score = 0;
      x1 = 20;
      y1 = 500;
      done = false;
    }
  }
  text("score:", 20, 30, 30, 40);
  text(score, 120, 30, 150, 60);
  score = score + 1;

  if (x2 > 949) {
    lvl2 = false;
    won = false;
    victory = true;
    textSize(230);
    text("congrats", 0, 200, 50, 250);
    fill((random(0, 255), random(0, 255), random(0, 255)));
    ellipse(500, 500, X, Y);
    X = X + 5;
    Y = Y + 5;
  }
}
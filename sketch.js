let snk = [];
let nextSnk = [];
let dir = [];
let fd, scl, length;
let maxLength;
let wait = false;
let fr = 10;

function setup() {
  createCanvas(600, 600);
  frameRate(fr);
  scl = 20;
  length = 1;
  snk.push(new Snake(0, 0));
  dir = [1, 0];
  maxLength = (height / scl) * (width / scl);
  print(maxLength)
  fd = new food();
  print("finished setup");
}

function draw() {
  background(51);
  fd.show();
  if (wait) {
    print("waiting for restart");
    frameRate(0);
  }
  if (length < maxLength) {
    update()
  }
  else {
    print("you won")
  }
}

function update() {
  let nextx = snk[0].x + dir[0] * scl;
  let nexty = snk[0].y + dir[1] * scl;
  
  if (nextx > width || nexty > height || nextx < 0 || nexty < 0) {
    die();
  }
  nextSnk.push(new Snake(nextx, nexty));
  for (let i = 0; i < length; i++) {
    snk[i].show();
    nextSnk.push(snk[i]);
    if (nextx == snk[i].x && nexty == snk[i].y) {
      die();
    }
  }
  
  if (fd.x == snk[0].x && fd.y == snk[0].y) {
    eat();
  }
  else {
    nextSnk.pop();
  }
  
  snk = nextSnk;
  nextSnk = [];
}

function eat() {
  fd.newLocation();
  length++;
}

function keyPressed() {
  if (keyCode === UP_ARROW && dir[1] != 1) {
    dir = [0, -1];
  } else if (keyCode === DOWN_ARROW && dir[1] != -1) {
    dir = [0, 1];
  } else if (keyCode === LEFT_ARROW && dir[0] != 1) {
    dir = [-1, 0];
  } else if (keyCode === RIGHT_ARROW && dir[0] != -1) {
    dir = [1, 0];
  }
}

function mousePressed() {
  length = 0;
  eat();
  dir = [1, 0]
  snk = [];
  snk.push(new Snake(0, 0));
  frameRate(fr);
  wait = false;
}

function die() {
  wait = true;
}
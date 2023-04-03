let MC;
let alien;
let tree1;
let tree2;
let tree3;

function preload() {
  MC = loadImage("MC.png");
  alien = loadImage("alien.png");
  tree1 = loadImage("tree1.png");
  tree2 = loadImage("tree2.png");
  tree3 = loadImage("tree3.png");
}

class Walker {
  constructor(x, y) {
    this.mc = createVector(x, y);
    this.velocity1 = createVector(random(-5, 5), random(-5, 5));
    this.enemy = createVector(x, y);
  }
  display() {
    noStroke();
    fill(255);
    image(MC, this.mc.x, this.mc.y, 75, 75);
    image(
      alien,
      this.mc.x + random(180, 185),
      this.mc.y + random(0, 5),
      65,
      65
    );
    image(
      alien,
      this.mc.x + random(120, 125),
      this.mc.y + random(100, 105),
      65,
      65
    );
    image(
      alien,
      this.mc.x + random(170, 175),
      this.mc.y + random(100, 105),
      65,
      65
    );
    image(
      alien,
      this.mc.x + random(110, 115),
      this.mc.y + random(50, 55),
      65,
      65
    );
    image(
      alien,
      this.mc.x + random(70, 75),
      this.mc.y + random(30, 35),
      65,
      65
    );
    image(
      alien,
      this.mc.x + random(45, 50),
      this.mc.y + random(100, 105),
      65,
      65
    );
    image(
      alien,
      this.mc.x + random(60, 65),
      this.mc.y + random(-40, -45),
      65,
      65
    );
    image(
      alien,
      this.mc.x + random(100, 105),
      this.mc.y + random(0, 5),
      65,
      65
    );
    image(
      alien,
      this.mc.x + random(120, 125),
      this.mc.y + random(-60, -65),
      65,
      65
    );
    image(
      alien,
      this.mc.x + random(170, 175),
      this.mc.y + random(-55, -60),
      65,
      65
    );
    image(tree1, 0, 0, 65, 65);
    image(tree2, 500, 35, 65, 65);
    image(tree3, 450, 475, 65, 65);
  }
  update() {
    var mouse = createVector(mouseX, mouseY);
    var dir1 = mouse.sub(this.mc);

    var topSpeed = 10;

    dir1.normalize();

    this.velocity1.add(this.acceleration);
    this.velocity1.add(dir1);
    this.velocity1.limit(topSpeed);

    this.mc.add(this.velocity1);
  }
  cekUjung() {
    if (this.mc.x > windowWidth) {
      this.mc.x = 0;
    } else if (this.mc.x < 0) {
      this.mc.x = windowWidth;
    }
    if (this.mc.y > windowHeight) {
      this.mc.y = 0;
    } else if (this.mc.y < 0) {
      this.mc.y = windowHeight;
    }
  }
}
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  walker = new Walker(width / 2, height / 2);
  background("black");
}

function draw() {
  background("#90EE90");
  walker.cekUjung();
  walker.display();
  walker.update();
}

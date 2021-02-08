let img;
function preload() {
  img = loadImage("buddha-head.jpg");
  img.resize(100,100);

}

function setup() {
  createCanvas(900, 900, WEBGL)
}

function draw() {
  background(255);
  fill(0);
  noStroke();
  let tiles = 100;
  let tileSize = width/tiles;
  // ellipse(80, 80, 10, 10)
  push();
  rotateY(radians(frameCount*10));
  console.log(frameCount)
  

  for (let x = 0; x < tiles; x ++) {
    for (let y = 0; y < tiles; y ++) {

      let c = color(img.get(x*tileSize, y*tileSize))
      let b = map(brightness(c), 0, 255, 1, 0);
      let z = map(b, 0, 1, -200, 200);

      push();
      translate(x*tileSize - width/2, y*tileSize - height/2, z);
      sphere(tileSize*b * 0.5)
      pop();

      // ellipse(x*tileSize, y*tileSize, 10, 10)
    }
  }
  pop();
}
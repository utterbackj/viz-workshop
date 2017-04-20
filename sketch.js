function setup() {
  createCanvas(1300, 700);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
    stroke(255, 255, 255, 25);
  }
  rect(mouseX, mouseY, 80, 80);
}

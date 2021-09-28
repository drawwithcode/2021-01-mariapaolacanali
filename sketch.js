function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40);
  angleMode(DEGREES);

  frameRate(120);
}

function draw() {
  if (frameCount < 600) {
    translate(width / 2, height / 2);
    rotate(frameCount * 3);

    noFill();

    stroke(lerpColor(color("red"), color("blue"), frameCount / 750));

    line(frameCount, 0, 0, frameCount);
  } else if (frameCount >= 600 && frameCount < 610) {
    fill(40);
    rect(0, 0, windowWidth, windowHeight);
  } else if (frameCount >= 610 && frameCount < 1100) {
    loop();
    translate(width / 2, height / 2);
    rotate((frameCount - 600) * 400);

    noFill();

    stroke(lerpColor(color("blue"), color("red"), (frameCount - 600) / 750));

    line(frameCount - 600, 0, 0, frameCount - 600);
  }
}

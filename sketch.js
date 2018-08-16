function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('output');
  angleMode(DEGREES);
}

function draw() {
  stroke(255);
  background(0);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  //stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);

  //stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);

  //stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(secondAngle);
  //stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  //stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  //stroke(150, 255, 100);
  line(0, 0, 50, 0);
  pop();


  point(0, 0);

  push();
  ellipse(0, 0, 275, 275);
  line(132, 0, 128, 0);
  line(-132, 0, -128, 0);
  line(0, 132, 0, 128);
  line(0, -132, 0, -128);
  pop();
}

function displayTime() {
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  var d = new Date();

  var hour = addZero(d.getHours());
  var minute = addZero(d.getMinutes());
  var seconds = addZero(d.getSeconds());

  document.getElementById("currenttime").innerHTML = "The current time is " + hour + ":" + minute + ":" + seconds;
}
setInterval(function () { displayTime(); }, 1000);
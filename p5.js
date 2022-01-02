

function setup() {
  var myDiv = document.getElementById("game");
  var myWidth = myDiv.offsetWidth;
  var myHeight = myDiv.offsetHeight;
  var myCanvas = createCanvas(myWidth, myHeight);
//   var myCanvas = createCanvas(800, 800);
  myCanvas.parent("game");
}

function draw() {
  background(239,247,246);
  noStroke(); // no border
  // head
  fill(216,191,216);
  // if(mouseIsPressed){
  //   var R = random(0,255)
  //   var G = random(0,255)
  //   var B = random(0,255)
  //   fill(R,G,B);
  // }
  ellipse(mouseX+5, 150, 200,250);
  // arms left
  ellipse(mouseX-18, 300, 40,200);
  ellipse(mouseX-45, 250, 50,200);
  ellipse(mouseX-80, 200, 50,200);
  
  // arms right
  ellipse(mouseX+18, 300, 40,200);
  ellipse(mouseX+45, 250, 50,200);
  ellipse(mouseX+80, 200, 50,200);

  //eyes
  fill(0);
  ellipse(mouseX-18, 300, 13,8);
  ellipse(mouseX+18, 300, 13,8);
  
}


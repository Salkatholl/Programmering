function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(500);
  
  
  
  for (var x=-20;x<= width;x=x+50){
    for (var y=-20;y<= width;y=y+50){
    fill(0)
    rect(y,x,40,40)
    }
  }
  
   
  for (var x=0;x<= width;x=x+50){
    for (var y=0;y<= width;y=y+50){
    fill(random(380),20,random(380))
    ellipse(y,x,30,30)
      }
  }
  
  
}
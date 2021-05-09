
const { LINE_LOOP } = require("./p5");

var weather;
function setup() {
  if('geolocation' in navigator){
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
     document.getElementById('latitude').textContent= lat;
      document.getElementById('longitude').textContent= lon;
      //console.log(position);
    
});
  }else{
    console.log('geolocation not available');
  }
  //var apiString= 'http://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat={lat}&units=metric&appid=34dc3fe2c12d44489f28e3f32214c51c'


  createCanvas(400, 600);
   loadJSON('http://api.openweathermap.org/data/2.5/weather?lon=12.5655&lat=55.6759&units=metric&appid=34dc3fe2c12d44489f28e3f32214c51c', gotData);
  // loadJSON(apiString, gotData);
}
function gotData(data){
  weather=data;
}
function draw(){
  background(177, 223, 224);
  //Baggrunden bliver dannet
  //gøre tempretur til tal
  var tempnum = new Number(weather.main.temp);
 if(tempnum =>1){
  //græs 
  fill(45, 107, 50);
  ellipse(1,580,400,130);
  ellipse(300,590,400,120);
  ellipse(200,595,400,50);
  }
  else{
    //sne
    stroke(600);
    fill(600);
    //græs
    ellipse(1,580,400,130);
    ellipse(300,590,400,120);
    ellipse(200,595,400,50);
    }
       //træ
       noStroke;
       fill(77,37,17)
       rect(50,330,50,230)
        //blade
        fill(33,122,9)
       ellipse(45,330,105,100)
       ellipse(105,345,105,100)
       ellipse(87,300,110,105)

        //huset
  fill(105,46,26);
  rect(200,345,200,200);
  //taget
  fill(212, 139, 44)
  triangle(405,346, 195, 346, 300,225)
  //vindu 
  fill(242, 242, 80)
  rect(325, 380,40,40)
  rect(235, 380,40,40)
  rect(235, 460,40,40)
  //døren
  fill(173, 134, 54)
  rect(320, 460,50,80)
  //håndtag
  fill(0,0,0)
  ellipse(325,500,5,5)

  //fugle
  push()
  stroke(1);
  noFill()
  curve(300,150,350, 40, 325, 40, 300, 200);
  curve(300,200,325, 40, 300, 40, 300, 150);

  curve(300,400,200, 140, 175, 140, 300, 200);
  curve(250,300,175, 140, 150, 140, 300, 350);
  pop()

 //sol
 fill(252, 243, 71)
 noStroke()
 ellipse(100,70,100,100)

 //få skyer frem
 if(weather.clouds.all>60){
  fill(400)
  stroke(400)
  ellipse(100,100,150,50)
  ellipse(120,80,130,45)
  ellipse(80,60,150,45)
  
  ellipse(220,80,130,45)
  ellipse(180,65,130,45)
  ellipse(240,45,130,45)
  
  ellipse(320,80,130,45)
  ellipse(300,60,130,45)
 }
  //Nu laver vi barnet og det tøj barnet skal have på 
 noStroke()
 //selve kroppen
  //ben
  push()
  fill(139, 175, 214)
  ellipse(187,520,20,60)
  ellipse(213,520,20,60)
  pop()
  //Over krop
  push()
  fill(236, 192, 237)
  ellipse(200,470,55,80)
  //skulder
 ellipse(178,445,20,20)
 ellipse(220,445,20,20)
 pop()
 //hoved
 push()
 fill(242, 222, 182)
 ellipse(200,400,60,70)
 pop()
 //øjne
 push()
 fill(400)
 ellipse(190,395,10,15)
 ellipse(210,395,10,15)
 pop()
 push()
 fill(0)
 ellipse(190,395,5,5)
 ellipse(210,395,5,5)
 pop()

 //mund
 push()
   fill(230, 101, 76)
 ellipse(200,420,15,10)
 pop()
 //hår
 push()
 fill(242, 240, 187)
 ellipse(195,367,20,20)
 ellipse(185,372,20,20)
 ellipse(190,365,20,20)
 ellipse(210,367,20,20)
 ellipse(200,372,20,20)
 ellipse(205,365,20,20)
 ellipse(215,372,20,20)
 ellipse(180,375,20,20)
 ellipse(220,375,20,20)
 pop()

 
  if(tempnum < 10){
  //farver armene 
fill(242, 222, 182)
ellipse(158,445,50,16)
ellipse(244,445,50,16)
//jakke
fill(71,1,117)
//hæte
ellipse(200,430,60,30)
//krop delen
fill(60,0,116)
ellipse(200,495,60,20)
ellipse(200,485,60,20)
ellipse(200,475,60,20)
ellipse(200,465,60,20)
ellipse(200,455,60,20)
ellipse(200,445,60,20)
//ærme 1
ellipse(176,445,15,20)
ellipse(166,445,15,20)
ellipse(156,445,15,20)
//ærme 2
ellipse(223,445,15,20)
ellipse(233,445,15,20)
ellipse(243,445,15,20)
  }
  if (weather.main.temp>10){
  fill(135, 8, 1)
  ellipse(158,445,50,16)
  ellipse(244,445,50,16)
  //skulder
  ellipse(178,445,20,20)
 ellipse(220,445,20,20)
  //hæte
  fill(117, 8, 2)
ellipse(200,430,60,30)
//Over krop
fill(135, 8, 1)
ellipse(200,470,55,80)


if(weather.weather.main =="Rain") {
  fill(250, 225, 0)
  rect(170,436,60,65)
   triangle(200,450,165,505,235,505)
  
   //hænder
  push()
  fill(242, 222, 182)
 ellipse(158,445,50,16)
 ellipse(244,445,50,16)
 pop()
   //arme
   ellipse(177,444,22,22)
   ellipse(223,444,22,22)
   rect(150,436,20,20)
   rect(230,436,20,20)
 
   //vandpyte
 fill(5, 103, 133)
   ellipse(300,560,90,40)
   ellipse(100,560,70,20)
   ellipse(130,550,70,20)
   ellipse(260,580,70,20)
   ellipse(60,540,70,20)
 }

  if(weather.main.temp>20){
 //arm
 fill(242, 222, 182)
 ellipse(158,445,50,16)
 ellipse(244,445,50,16)
  }
}

 //hoved
 fill(242, 222, 182)
 ellipse(200,400,60,70)
 //øjne
 fill(400)
 ellipse(190,395,10,15)
 ellipse(210,395,10,15)
 fill(0)
 ellipse(190,395,5,5)
 ellipse(210,395,5,5)
 //mund
   fill(230, 101, 76)
 ellipse(200,420,15,10)
 //hår
 fill(242, 240, 187)
 ellipse(195,367,20,20)
 ellipse(185,372,20,20)
 ellipse(190,365,20,20)
 ellipse(210,367,20,20)
 ellipse(200,372,20,20)
 ellipse(205,365,20,20)
 ellipse(215,372,20,20)
 ellipse(180,375,20,20)
 ellipse(220,375,20,20)


}

var face_x = [] 
var face_y = []
var face_size = []
var face_num = 2
var song 
var songIsplay = false 
var amp
var vol
function preload(){
  song = loadSound("As You Were - TrackTribe.mp3")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
 

  for(var i=0;i<face_num;i++){
    face_size[i] = random(100,400) 
    face_x[i] = random(0,width)
    face_y[i] = random(0,height)
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  textSize(50)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)
  push()
    fill('#7878FF')
    translate(width/2,height/2)
    ellipse(0,0,400)


    fill(0)
    ellipse(-70+mouseX/80,-70+mouseY/60,70)
    noFill()

    fill(0)
    ellipse(70+mouseX/80,-90+mouseY/60,70)


    fill(225,0,0)
    triangle(0,0,200,00,0,90)
    fill(255)

    fill(255)
    ellipse(-50,110,90)
    if(mouseIsPressed)
    {
      fill('#E6E600')
      ellipse(-50,110,120)
    }

  pop()
}

function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
}

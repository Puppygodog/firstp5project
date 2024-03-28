function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,640,480);
    fill("#D76262")
    circle(615,455,50);
    fill("#9999FF")
    ellipse(615,368,40,125,6);
    fill("#5BEE87")
    rect(595,157,40,150,20,20,20,20);
    fill("#9999FF")
    ellipse(615,100,40,125,6);
    fill("#D76262")
    circle(615,20,50);
    fill("#9999FF")
    ellipse(505,20,170,40,6);
    fill("#5BEE87")
    rect(220,0,200,40,20,20,20,20);
    fill("#9999FF")
    ellipse(135,20,170,40,6);
    fill("#D76262")
    circle(25,25,50)

    fill("#9999FF")
    ellipse(20,382,40,125,6);
    fill("#5BEE87")
    rect(0,170,40,150,20,20,20,20);
    fill("#9999FF")
    ellipse(20,110,40,125,6);
    fill("#D76262")
    circle(25,455,50);
    fill("#9999FF")
    ellipse(505,460,170,40,6);
    fill("#5BEE87")
    rect(220,440,200,40,20,20,20,20);
    fill("#9999FF")
    ellipse(135,460,170,40,6);
    fill("#5BEE87")





}
function take_snapshot(){
    save('student_name.png');
}


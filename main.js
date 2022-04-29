cradles = "";
faded = "";

function preload() {
    cradles = loadSound("Cradles.mp3");
    faded = loadSound("Faded.mp3");
}

function setup(){
    canvas = createCanvas(550,550);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,560,550);
}
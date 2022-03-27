function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(480, 280);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 300, 300);
}
function take_snapshot(){
    save("cool_photo.png");
}
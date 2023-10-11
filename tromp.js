nosex=0;
nosey=0;
muñecaIzquierdax=0;
muñecaDerechax=0;diference=0;
function setup(){
video=createCapture(VIDEO);
video.size(300,299);
canvas=createCanvas(500,500);
canvas.position(400,160);
poseNet=ml5.poseNet(video,clabock);
poseNet.on("pose",quirl)
}
function clabock(){
console.log("poseNet")
}
function quirl (secreto){
if(secreto.length>0){
console.log(secreto);
nosex=secreto[0].pose.nose.x;
nosey=secreto[0].pose.nose.y;
muñecaDerechax=secreto[0].pose.rightWrist.x;
muñecaIzquierdax=secreto[0].pose.leftWrist.x;
diference=floor(muñecaIzquierdax-muñecaDerechax);

}
}
function draw(){
background('#969A97');
document.getElementById("tricki").innerHTML=diference;
textSize(diference);
fill("#00FFFF");
text("cofe",nosex,nosey);
}

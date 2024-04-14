var x=0;
y=0;
drawCircle="";
drawRect="";

SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
document.getElementById("status").innerHTML="O sistema esta ouvindo pode falar";
recognition.start();
}

recognition.onresult=function(event){
var content=event.results[0][0].transcript;
document.getElementById("status").innerHTML="A fala foi reconhecida como: "+content;
if(content=="circulo"){
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="desenhando um circulo";
    drawCircle="set"
}
if(content=="retangulo"){
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="desenhando um retangulo";
    drawRect="set"
}
}

function setup(){
    canvas=createCanvas(900,600)
}

function draw(){
    if(drawRect=="set"){
        rect(x,y,70,50)
        document.getElementById("status").innerHTML="um retangulo foi desenhado";
        drawRect=""
    }
    if(drawCircle=="set"){
        radius=Math.floor(Math.random()*100)
        circle(x,y,radius)
        document.getElementById("status").innerHTML="um circulo foi desenhado";
        drawCircle=""
    }
}
x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "The System is listening to your command. Please input a command.";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The object that was recognised was "+content+" Unfortunately, the server was not able to fulfill your request.";

    if(content == "Circle."){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Drawing a circle as per input."
        draw_circle = "set";
    }

    if(content == "Rectangle."){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Drawing a rectangle as per input."
        draw_rect = "set";
    }
}

function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
    if(draw_circle == "set"){
        radius = Math.floor(Math.random()*100)
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle has been drawn."
        draw_circle = "";
    }

    if(draw_rect == "set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle has been drawn."
        draw_rect = "";
    }
}
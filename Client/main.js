var c = document.getElementById('gameCanvas');
var ctx = c.getContext('2d');

var cc = document.getElementById("canvasContatiner");

var ui = document.getElementById("UIContainer");
var uictx = ui.getContext('2d');

var playerspeed=1;
var playerStartSpeed =1;

var playerx=0;
var playery=0;



var posElement = document.getElementById('Position');

c.width = window.innerWidth;
c.height = window.innerHeight;


window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    c.width = window.innerWidth-50;
    c.height = window.innerHeight-50;
}

document.addEventListener('mousemove', (event) => {
    playerx = event.clientX;
    playery = event.clientY;

    
});



function drawPlayer() {

    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.rect(playerx-100, playery-100, 50, 50);
    ctx.fill();

}

function animatePlayer(){
    ctx.clearRect(0,0,c.width,c.height);
    
    

    drawPlayer();

    console.log(playerx);

    requestAnimationFrame(animatePlayer);
}

function uianimation(){

    uictx.clearRect(0,0,ui.width,ui.height);
    uictx.font = "20px Arial";
    uictx.fillStyle = "black";
    uictx.fillText("Press this button to start the game" , 10, 30);
    
    requestAnimationFrame(uianimation);

}

function login(){
    console.log("Log In button pressed");
    // TODO: Authentication code here
    // TODO: When database is there, allow user to log in
}

function register(){
    console.log("Register button pressed");
    //TODO: Registration code here like to email or somthing
    //TODO: When database is there, allow user to register
}

function toggleCanvas(){
    
    if (cc.style.display == "none"){

        cc.style.display = "block";
        animatePlayer();

        ui.style.display = "none";
   
    }else{
        
        ui.style.display = "block";
        uianimation();

        cc.style.display = "none";
        
    }
    
}




toggleCanvas();

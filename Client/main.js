var c = document.getElementById('gameCanvas');
var ctx = c.getContext('2d');

var playerspeed=1;
var playerStartSpeed =1;

var playerx=playerstartx =0;
var playery=playerstarty =0;

var cc = document.getElementById("canvasContatiner");
var posElement = document.getElementById('Position');

document.addEventListener('mousemove', (event) => {
    playerx = event.clientX;
    playery = event.clientY;
    posElement.textContent = `Your mouse position is X: ${x}, Y: ${y}`;
});


function drawPlayer() {

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.rect(playerx, playery, 50, 50);
ctx.fill();

}

function animatePlayer(){
    ctx.clearRect(0,0,c.width,c.height);
    
    

    drawPlayer();

    console.log(playerx);

    requestAnimationFrame(animatePlayer);
}

function toggleCanvas(){
    
    if (cc.style.display == "none"){

        cc.style.display = "block";
       
   
        animatePlayer();
        

    }else{
        
        cc.style.display = "none";
        
    }
    //FIXME: Problem with the animation, speeds up each time the thing is toggled
}




toggleCanvas();

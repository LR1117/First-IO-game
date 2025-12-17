var c = document.getElementById('gameCanvas');
var ctx = c.getContext('2d');

var playerstartx=10;
var playerstarty=100;

var playerspeed=5;
var playerStartSpeed =5;

var playerx=playerstartx;
var playery=playerstarty;

var cc = document.getElementById("canvasContatiner");

function drawPlayer(x,y) {
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.rect(x, y, 5, 5);
ctx.fill();

}
function animatePlayer(){
    ctx.clearRect(0,0,c.width,c.height);

    playerx += playerspeed;

    drawPlayer(playerx,playery);

    requestAnimationFrame(animatePlayer);
}
function toggleCanvas(){
   
    if (cc.style.display == "none"){
        playerspeed=playerStartSpeed;
        playerx = playerstartx;

        cc.style.display = "block";
        drawPlayer();
        animatePlayer();
    }else{
        
        cc.style.display = "none";
        
    }
    //FIXME: Problem with the animation, speeds up each time the thing is toggled


}




toggleCanvas();

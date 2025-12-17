function draw() {
var c = document.getElementById('gameCanvas');
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.rect(10, 10, 150, 100);
ctx.fill();
}

draw();

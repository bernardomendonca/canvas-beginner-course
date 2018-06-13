var canvas = document.querySelector("canvas");

canvas.width =window.innerWidth;
canvas.height =window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// // c.fillRect (x, y, width, height)
// c.fillRect (100, 100, 100, 100);
// c.fillStyle = "rgba(0, 0, 255, 0.5)";
// c.fillRect (400, 100, 100, 100);
// c.fillRect (400, 300, 100, 100);

//  c = CONTEXT

// LINE
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.strokeStyle = "#aaaaaa";
// c.stroke();

// // ARC / CIRCLE
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();


// for (var i = 0; i < 1000; i++) {
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	// Math.random gives a value between 0 and 1.
// 	c.beginPath();
// 	c.arc(x, y, 30, 0, Math.PI * 2, false);
// 	c.strokeStyle = "blue";
// 	c.stroke();
// };


var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 10;
var dy = (Math.random() - 0.5) * 10;
var radius = 30;
function animate() {
	requestAnimationFrame(animate);
	// Clearing the canvas, otherwise there would be lots of circles being drawn and 'draged' through the screen
	c.clearRect(0, 0, innerWidth, innerHeight);
	c.beginPath();
	// c.arc (x, y, radius, )
	c.arc(x, y, radius, 0, Math.PI * 2, false);
	c.strokeStyle = "blue";
	c.stroke();
	// Everytime the object hit the borders, it bounces back:
	if (x + radius > innerWidth || x - radius < 0) {
		dx = -dx;
	}
	if (y + radius > innerHeight || y - radius < 0) {
		dy = -dy;
	}
	// Velocity -> speed that something moves in a particular direction
	x += dx;
	y += dy;
};

animate();
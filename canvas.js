var canvas = document.querySelector("canvas");

canvas.width =window.innerWidth;
canvas.height =window.innerHeight;

var c = canvas.getContext('2d');

// Generating Random Color, in a gray(ish)scale
function randomColor(){
	//pick a "red" from 0 to 100
	var r = Math.floor(Math.random() * 100);
	//pick a "green" from 0 to 100
	var g = Math.floor(Math.random() * 100);
	//pick a "blue" from 0 to 100
	var b = Math.floor(Math.random() * 100);
	// Using weights to guarantee the gray(ish)scale
	"rgb(r, g, b)"
	return "rgb(" + (r)*0.3 + ", " + (g)*0.59 + ", " + (b)*0.11 + ")";
}

function Circle(x, y, dx, dy, radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function () {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = Color;
		c.fill();	
		c.stroke();
		c.strokeStyle = "steelBlue";
	}

	this.update = function() {
		// Everytime the object hit the borders, it bounces back:
		if (this.x + this.radius > innerWidth || 
			this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > innerHeight || 
			this.y - this.radius < 0) {
			this.dy = -this.dy;
		}
		// Velocity -> speed that something moves in a particular direction
		this.x += this.dx;
		this.y += this.dy;
		// Calling the draw function:	
		this.draw();
	}
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
	var radius = 30;
	// To make sure that the circles wont be stuck in the borders:
	var x = Math.random() * (innerWidth - radius * 2) + radius;
	var y = Math.random() * (innerHeight - radius * 2) + radius;
	var dx = (Math.random() - 0.5) * 3;
	var dy = (Math.random() - 0.5) * 3;
	var Color = randomColor();	
	circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
	requestAnimationFrame(animate);
	// Clearing the canvas, otherwise there would be lots of circles being drawn and 'draged' through the screen
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
};

animate();
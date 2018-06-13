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

function Circle(x, y, dx, dy, radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;


	this.draw = function () {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = "blue";
		c.stroke();
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
	var x = Math.random() * innerWidth;
	var y = Math.random() * innerHeight;
	var dx = (Math.random() - 0.5) * 3;
	var dy = (Math.random() - 0.5) * 3;
	var radius = 30;
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
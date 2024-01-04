// relative from top left x, y, width, height
// add color
// c.fillStyle = "#fa34a3"
// c.fillRect(100, 100, 120, 140);
// c.fillStyle = "rgba(255, 0, 0, 0.5"
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "rgba(0, 0, 255)"
// c.fillRect(300, 300, 200, 100);

// line x, y, stroke method

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
//add color
// c.strokeStyle = "pink"; // or rgba or hex
// c.stroke();

// for (let i = 0; i < 33; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
// arc / circle x, y, radius, startAngle, endAngle, drawCounterClockwise
//separate from previous line
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = "aliceBlue";
//     c.stroke();
// }

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.stroke;
        c.fill();
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

let circleArray = [];

for (let i = 0; i < 100; i++) {
    let radius = 50;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 8;
    let dy = (Math.random() - 0.5) * 8;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();
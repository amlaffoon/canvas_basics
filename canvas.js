let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let mouse = {
    x: undefined,
    y: undefined
}

const maxRadius = 200;

const colorArray = [
    '#edf2fb',
    '#e2eafc',
    '#d7e3fc',
    '#ccdbfd',
    '#c1d3fe',
    '#b6ccfe',
    '#abc4ff',
    // '#55a630',
    // '#2b9348',
    // '#007f5f',
];

window.addEventListener('mousemove', function (e) {
    mouse.x = e.x
    mouse.y = e.y
})

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})



function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
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

        // interactivity

        if (mouse.x - this.x < 100 && mouse.x - this.x > -100
            && mouse.y - this.y < 50 && mouse.y > this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 3;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

let circleArray = [];

function init() {
    circleArray = [];

    for (let i = 0; i < 800; i++) {
        let radius = Math.random() * 3 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 5;
        let dy = (Math.random() - 0.5) * 5;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    };
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

init();

animate();
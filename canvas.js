let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c is short for context
let c = canvas.getContext('2d');

// relative from top left x, y, width, height
// add color
c.fillStyle = "#fa34a3"
c.fillRect(100, 100, 120, 140);
c.fillStyle = "rgba(255, 0, 0, 0.5"
c.fillRect(400, 100, 100, 100);
c.fillStyle = "rgba(0, 0, 255)"
c.fillRect(300, 300, 200, 100);

// line x, y, stroke method

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
//add color
c.strokeStyle = "pink"; // or rgba or hex
c.stroke();

for (let i = 0; i < 33; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    // arc / circle x, y, radius, startAngle, endAngle, drawCounterClockwise
    c.beginPath(); //separate from previous line
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "aliceBlue";
    c.stroke();
}


console.log(canvas)
console.log(c);
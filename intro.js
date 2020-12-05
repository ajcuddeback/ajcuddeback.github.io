var downBtn = document.querySelector("#down-button");
var header = document.querySelector(".header")
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;

// create cunstructor function
function Particle(x, y, directionX, directionY, radius, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.radius = radius;
    this.color = color;
}

// add draw method to particle prototype
Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill()
}

// add upadte method to particle prototype
Particle.prototype.update = function () {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.directionX = -this.directionX;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
}
//create particle array
function init() {
    particleArray = [];
    for (let i = 0; i < 500; i++) {
        let radius = Math.random() * 2.3;
        let x = Math.random() * (innerWidth - radius * 2);
        let y = Math.random() * (innerHeight - radius * 2);
        let directionX = (Math.random() * .4) - .2;
        let directionY = (Math.random() * .4) - .2;
        let color = 'rgba(0,123,255, .7)';

        particleArray.push(new Particle(x, y, directionX, directionY, radius, color))
    }
}
//animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
    }
}
init();
animate();

window.addEventListener('resize', function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})

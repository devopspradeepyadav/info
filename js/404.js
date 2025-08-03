function drawVisor() { const canvas = document.getElementById('visor'); const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(5, 45);
    ctx.bezierCurveTo(15, 64, 45, 64, 55, 45);
    ctx.lineTo(55, 20);
    ctx.bezierCurveTo(55, 15, 50, 10, 45, 10);
    ctx.lineTo(15, 10);
    ctx.bezierCurveTo(15, 10, 5, 10, 5, 20);
    ctx.lineTo(5, 45);
    ctx.fillStyle = '#2f3640';
    ctx.strokeStyle = '#f5f6fa';
    ctx.fill();
    ctx.stroke() }
const cordCanvas = document.getElementById('cord');
const ctx = cordCanvas.getContext('2d');
let y1 = 160;
let y2 = 100;
let y3 = 100;
let y1Forward = !0;
let y2Forward = !1;
let y3Forward = !0;

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.beginPath();
    ctx.moveTo(130, 170);
    ctx.bezierCurveTo(250, y1, 345, y2, 400, y3);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 8;
    ctx.stroke();
    if (y1 === 100) { y1Forward = !0 }
    if (y1 === 300) { y1Forward = !1 }
    if (y2 === 100) { y2Forward = !0 }
    if (y2 === 310) { y2Forward = !1 }
    if (y3 === 100) { y3Forward = !0 }
    if (y3 === 317) { y3Forward = !1 }
    y1Forward ? y1 += 1 : y1 -= 1;
    y2Forward ? y2 += 1 : y2 -= 1;
    y3Forward ? y3 += 1 : y3 -= 1
}
drawVisor();
animate()
var c = document.getElementById("chart");
var ctx = c.getContext("2d");
var width = c.width;
var height = c.height;

var gradient = ctx.createLinearGradient(0,0, 0,320);

// Add three color stops
gradient.addColorStop(0, 'rgb(233,180,18)');
gradient.addColorStop(1, 'rgb(101,80,10)');

ctx.shadowColor = 'rgba(0, 0, 0, .45)';
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 8;

var y = 1 - 0.0;

var t = 0

var fromTo = [
    [0,1,0.81],
    [0.043,1,0.81],

]

function drawChart()
{
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.strokeStyle = gradient;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 3;

    for(let i = 0; i < fromTo.length; ++i)
        ctx.lineTo(fromTo[i][0] * width, lerp(fromTo[i][1]*height,fromTo[i][2]*height, t))
    
    

    ctx.stroke();
    
    t += 0.007
    if(t >= 1)
    t = 1
}

function fade(t)
{
    return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(a, b, t) {
    t = fade(t)
    return a + t * (b - a);
}

function loop() {
    drawChart()
    window.requestAnimationFrame(loop)
}
var lastRender = 0
window.requestAnimationFrame(loop)
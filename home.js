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

function drawChart()
{
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.strokeStyle = gradient;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 3;
    ctx.lineTo(0.0 * width, 0.81 * height);
    ctx.lineTo(0.043 * width, 0.81 * height);
    ctx.lineTo(0.068 * width,0.721 *height);
    ctx.lineTo(0.09 * width,0.721 *height);
    ctx.lineTo(0.123 * width,0.595 *height);
    ctx.lineTo(0.16 * width,0.595 *height);
    ctx.lineTo(0.178 * width,0.697 *height);
    ctx.lineTo(0.189 * width,0.697 *height);
    ctx.lineTo(0.2 * width,0.595*height);
    ctx.lineTo(0.226 * width,0.273*height);
    ctx.lineTo(0.235 * width,0.273 *height);
    ctx.lineTo(0.2505 * width,0.536 *height);
    ctx.lineTo(0.263 * width,0.536 *height);
    ctx.lineTo(0.279 * width,0.357 *height);
    ctx.lineTo(0.294 * width,0.357 *height);
    ctx.lineTo(0.312 * width,0.517 *height);
    ctx.lineTo(0.353 * width,0.594 *height);
    ctx.lineTo(0.386 * width,0.512 *height);
    ctx.lineTo(0.4 * width,0.512 *height);
    ctx.lineTo(0.415 * width,0.429 *height);
    ctx.lineTo(0.424 * width,0.429 *height);
    ctx.lineTo(0.439 * width,0.487 *height);
    ctx.lineTo(0.446 * width,0.487 *height);
    ctx.lineTo(0.505 * width,0.341 *height);
    ctx.lineTo(0.518 * width,0.175 *height);
    ctx.lineTo(0.54 * width,0.175 *height);
    ctx.lineTo(0.558 * width,0.331 *height);
    ctx.lineTo(0.604 * width,0.424 *height);
    ctx.lineTo(0.624 * width,0.595 *height);
    ctx.lineTo(0.670 * width,0.595 *height);
    ctx.lineTo(0.758* width,0.278 *height);
    ctx.lineTo(0.764 * width,0.278 *height);
    ctx.lineTo(0.793 * width,0.341*height);
    ctx.lineTo(0.819 * width,0.341*height);
    ctx.lineTo(0.843 * width,0.409 *height);
    ctx.lineTo(0.850 * width,0.409 *height);
    ctx.lineTo(0.89 * width,0.258 *height);
    ctx.lineTo(0.912 * width,0.258 *height);
    ctx.lineTo(0.949 * width,lerp(0.73*height,0.092*height,t));
    ctx.lineTo(0.980 * width,lerp(0.76*height,0.092*height, t));
    ctx.lineTo(1 * width, lerp(0.8*height,0*height, t));
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
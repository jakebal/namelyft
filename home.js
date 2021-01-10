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
    [0.068,1,0.721],
    [0.09,1,0.721],
    [0.123,1,0.595],
    [0.16,1,0.595],
    [0.178,1,0.697],
    [0.189,1,0.697],
    [0.2,1,0.595],
    [0.226,1,0.273],
    [0.235,1,0.273],
    [0.250,1,0.536],
    [0.263,1,0.536],
    [0.279,1,0.357],
    [0.294,1,0.357],
    [0.312,1,0.517],
    [0.353,1,0.594],
    [0.386,1,0.512],
    [0.4,1,0.512],
    [0.415,1,0.429],
    [0.424,1,0.429],
    [0.439,1,0.487],
    [0.446,1,0.487],
    [0.505,1,0.341],
    [0.518,1,0.175],
    [0.54,1,0.175],
    [0.558,1,0.331],
    [0.604,1,0.424],
    [0.624,1,0.595],
    [0.670,1,0.595],
    [0.758,1,0.278],
    [0.764,1,0.278],
    [0.793,1,0.341],
    [0.819,1,0.341],
    [0.843,1,0.409],
    [0.85,0.5,0.409],
    [0.89,0.68,0.258],
    [0.912,0.67,0.258],
    [0.949,0.75,0.092],
    [0.980,0.78,0.092],
    [1,0.8,0],
  
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
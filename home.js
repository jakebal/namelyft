var c = document.getElementById("chart");
var ctx = c.getContext("2d");
var width = c.width;
var height = c.height;

var gradient = ctx.createLinearGradient(0,0, 0,320);

// Add three color stops
gradient.addColorStop(0, 'rgb(233,180,10)');
gradient.addColorStop(0.5, 'rgb(101,80,10)');

ctx.shadowColor = 'rgba(0, 0, 0, .45)';
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 8;

var y = 1 - 0.0;

var t = 0

var fromTo = [
    [0,0.92,0.81],
    [0.043,0.97,0.81],
    [0.068,0.96,0.721],
    [0.09,0.92,0.721],
    [0.123,0.92,0.595],
    [0.16,0.89,0.595],
    [0.178,0.89,0.697],
    [0.189,0.89,0.697],
    [0.2,0.89,0.595],
    [0.226,0.89,0.273],
    [0.235,0.89,0.273],
    [0.250,0.89,0.536],
    [0.263,0.89,0.536],
    [0.279,0.89,0.357],
    [0.294,0.89,0.357],
    [0.312,0.89,0.517],
    [0.353,0.89,0.594],
    [0.386,0.89,0.512],
    [0.4,0.89,0.512],
    [0.415,0.89,0.429],
    [0.424,0.89,0.429],
    [0.439,0.89,0.487],
    [0.446,0.89,0.487],
    [0.505,0.8,0.341],
    [0.518,0.79,0.175],
    [0.528,0.73,0.165],
    [0.54,0.72,0.175],
    [0.558,0.7,0.331],
    [0.604,0.69,0.424],
    [0.624,0.69,0.595],
    [0.670,0.69,0.595],
    [0.758,0.6,0.278],
    [0.764,0.6,0.278],
    [0.793,0.64,0.341],
    [0.819,0.64,0.341],
    [0.843,0.64,0.409],
    [0.85,0.64,0.409],
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
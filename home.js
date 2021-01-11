var c = document.getElementById("chart");
var ctx = c.getContext("2d");
var width = c.offsetWidth;
var height = c.offsetHeight;
ctx.canvas.width  = width;
ctx.canvas.height = height;

var gradient = ctx.createLinearGradient(0,0, 320,0);

// Add three color stops
gradient.addColorStop(0.4, 'rgb(216, 216, 66)');
gradient.addColorStop(0.99, '#3cf6b2');
gradient.addColorStop(1.0, '#3cf675');

ctx.shadowColor = 'rgba(0, 0, 0, .45)';
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 8;

var y = 1 - 0.0;

var t = 0

var fromToLine = [
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

var fromToBar = [
    [10,30],
    [10,60],
    [10,90],
    [10,15],
    [10,30],
    [10,45],
    [10,18],
    [10,22],

    [10,30],
    [10,60],
    [10,30],
    [10,20],
    [10,19],
    [10,15],
    [0,8],
    [0,5],

    [10,20],
    [10,60],
    [10,10],
    [10,25],
    [10,10],
    [10,25],
    [10,48],
    [10,22],

    [10,30],
    [10,60],
    [10,90],
    [10,25],
    [10,30],
    [10,45],
    [10,28],
    [10,22],

    [10,30],
    [10,70],
    [10,60],
    [10,25],
    [10,30],
    
]

function drawChart()
{
    let tx = mcx / width;
    let p = 0, p1 = 0, p2 = 0;

    ctx.clearRect(0, 0, width, height);

    gradient = ctx.createLinearGradient(0,height, 0, 0);

    // Add three color stops
    gradient.addColorStop(0.0, '#59106b');
    gradient.addColorStop(0.08, '#521c74');
    gradient.addColorStop(0.2, '#521c74');
    
    for(let i = 0; i < fromToBar.length; ++i)
    {
        ctx.beginPath();
        ctx.lineWidth = 8;
        ctx.shadowColor = 'rgba(0, 0, 0,0)';
        ctx.lineCap = "square";
        if(Math.abs(mcx - (15 * i +5)) < 8 && overChart)
        {
            ctx.strokeStyle = "#861886";
        }
        else
        {
            ctx.strokeStyle = gradient;
        }

        ctx.moveTo(15 * i +5, height);
        ctx.lineTo(15 * i +5, height - lerp(fromToBar[i][0], fromToBar[i][1], t));
        ctx.stroke();
    }

    gradient = ctx.createLinearGradient(0,0, 320,0);

    // Add three color stops
    gradient.addColorStop(0.4, 'rgb(216, 216, 66)');
    gradient.addColorStop(0.99, '#3cf6b2');
    gradient.addColorStop(1.0, '#3cf675');

    ctx.shadowColor = 'rgba(0, 0, 0, .45)';
    ctx.beginPath();
    ctx.strokeStyle = gradient;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 3;

    for(let i = 0; i < fromToLine.length; ++i)
        ctx.lineTo(fromToLine[i][0] * width, lerp(fromToLine[i][1]*height,fromToLine[i][2]*height, t))
    
    ctx.stroke();
    
    
    if(overChart)
    {
        

        ctx.beginPath();
        ctx.moveTo(mcx, 0);
        ctx.lineTo(mcx, height);
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.lineWidth = 3;
        for(let i = 0; i < fromToLine.length; ++i)
        {
            if(tx>fromToLine[i][0])
            {
                p2 = lerp(fromToLine[i][2], fromToLine[i + 1][2], (tx-fromToLine[i][0])/(fromToLine[i+1][0]-fromToLine[i][0]))
                p1 = lerp(fromToLine[i][1], fromToLine[i + 1][1], (tx-fromToLine[i][0])/(fromToLine[i+1][0]-fromToLine[i][0]))
                p = lerp(p1, p2, t)
            }
        }
        ctx.shadowColor = 'rgba(0, 0, 0,0)';
        ctx.beginPath();
        ctx.arc(mcx, p * height, 5, 0, 2 * Math.PI);
        ctx.stroke()
        ctx.fillStyle = '#27232f';
        ctx.fill();
    }

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

var mcx = 0, mcy = 0;
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
c.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(c, evt);
    mcx = mousePos.x;
    mcy = mousePos.y;
  
  }, false);

var overChart = false;

c.addEventListener('mouseenter', function(evt) {
    overChart = true;
}, false);

c.addEventListener('mouseleave', function(evt) {
overChart = false;
}, false);

function loop() {
    drawChart()
    window.requestAnimationFrame(loop)
}
var lastRender = 0
window.requestAnimationFrame(loop)






introHeader()
function introHeader()
{
    var hmtSub0 = document.getElementById("hmt-sub-0");
    var hmtSub1 = document.getElementById("hmt-sub-1");
    var hmtSub2 = document.getElementById("hmt-sub-2");
    var hWhiteBar = document.getElementById("h-white-bar");
    hmtSub0.style.transform = "translateY(0%)";
    hmtSub1.style.transform = "translateY(0%)";
    hWhiteBar.style.animation = "h-white-bar-slide 2s linear";
    setTimeout(function() { 
        hmtSub2.style.transform = "translateY(0%)";

    }, 700);
   
}

function t0 ()
{

}
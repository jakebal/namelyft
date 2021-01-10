canvas = document.getElementById('chart');

   canvas.addEventListener('mousemove', on_canvas_move, false);


function on_canvas_move(ev) {
    var x = ev.clientX - this.offsetLeft;
    var y = ev.clientY - this.offsetTop;
    alert(x)
} 
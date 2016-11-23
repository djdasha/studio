var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var offsetX;
var offsetY;
var side;
var e;
var x;
var y;

var clicks = 0;
var lastClick = [0, 0];

document.getElementById('canvas').addEventListener('click', draw, false);

// var intersection = [];
// var isDrawing = false;

// function onTouchStart(e){
//   isDrawing = false;
//   intersection = [];
//   intersection.push([e.touches[0],e.touches[0].pageY]);
// }
//
// function onTouchEnd(e){
//   isDrawing = true;
//   intersection.push([e.touches[0],e.touches[0].pageY]);
// }

// function setup(){
//   document.addEventListener('touchstart', onTouchStart);
//   document.addEventListener('touchend', onTouchStart);
//
//   draw();
// }

//e or ev - event
function draw(e){

  x = e.pageX;
  y = e.pageY;
  // if(isDrawing){
  //   //draw the lines
  //   ctx.arc();
  // }
  if (clicks != 0) {
      clicks++;
  } else {
    side = 500;
    offsetX = window.innerWidth/2 - (1.5*side);
    offsetY = window.innerHeight/2 - (1.5*side);
       ctx.beginPath();
       ctx.moveTo(Math.floor(Math.random() * (offsetX+side - 500 + 1) + 500),Math.floor(Math.random() * (offsetY+side - 500 + 1) + 500));
       ctx.lineTo(Math.floor(Math.random() * (offsetX+side - 500 + 1) + 500),Math.floor(Math.random() * (offsetY+side - 500 + 1) + 500), 6);

       ctx.strokeStyle = '#000000';
       ctx.stroke();

       clicks = 0;

  }

    lastClick = [x, y];

    //intersection.shift();


  //requestAnimationFrame(draw);
}

side = 500;
offsetX = window.innerWidth/2 - (1.5*side);
offsetY = window.innerHeight/2 - (1.5*side);
var A = [x,y];
var B = [x,y];

function slope(a, b, e) {
    if (a[0] == b[0]) {
        return null;
    }

    return (b[1] - a[1]) / (b[0] - a[0]);
}

function intercept(point, slope) {
    if (slope === null) {
        // vertical line
        return point[0];
    }

    return point[1] - slope * point[0];
}

var m = slope(A, B);
var b = intercept(A, m);

var coordinates = [];
for (var x = A[0]; x <= B[0]; x++) {
    var y = m * x + b;
    coordinates.push([x, y]);
}

console.log(coordinates);

draw(e);

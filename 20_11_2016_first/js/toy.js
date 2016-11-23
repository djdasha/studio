//drawing
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
    // ctx.fillStyle = "black";
    // for(var i=0; i<coordinates.length; i++){
    //   console.log("circle",coordinates[i][0], coordinates[i][1]);
    //   ctx.beginPath();
    //   ctx.arc(coordinates[i][0], coordinates[i][1], 2, 0, Math.PI*2, false);
    //   ctx.fill();
    //   clicks = 0;
    //   ctx.closePath();
  }

    lastClick = [x, y];

    //intersection.shift();


  //requestAnimationFrame(draw);
} //end of draw;


//object.addEventListener("click", myScript);

// function touch(){
//
//
//   ctx.closePath();
// }
// touch();
side = 500;
offsetX = window.innerWidth/2 - (1.5*side);
offsetY = window.innerHeight/2 - (1.5*side);
//var A = [Math.floor(Math.random() * (offsetX+side - 500 + 1) + 500), Math.floor(Math.random() * (offsetY+side - 500 + 1) + 500)];
//var B = [Math.floor(Math.random() * (offsetX+side - 500 + 1) + 500), Math.floor(Math.random() * (offsetY+side - 500 + 1) + 500)];
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

console.log(coordinates); // [[10, 5], [11, 22], [12, 39], [13, 56], [14, 73], [15, 90]]

draw(e);

// function line_intersects(p0_x, p0_y, p1_x, p1_y, p2_x, p2_y, p3_x, p3_y) {
//
//     var s1_x, s1_y, s2_x, s2_y;
//     s1_x = p1_x - p0_x;
//     s1_y = p1_y - p0_y;
//     s2_x = p3_x - p2_x;
//     s2_y = p3_y - p2_y;
//
//     var s, t;
//     s = (-s1_y * (p0_x - p2_x) + s1_x * (p0_y - p2_y)) / (-s2_x * s1_y + s1_x * s2_y);
//     t = ( s2_x * (p0_y - p2_y) - s2_y * (p0_x - p2_x)) / (-s2_x * s1_y + s1_x * s2_y);
//
//     if (s >= 0 && s <= 1 && t >= 0 && t <= 1)
//     {
//         // Collision detected
//         return 1;
//     }
//
//     return 0; // No collision
// }

// ctx.beginPath();
// ctx.fillStyle = "black";
// ctx.rect(offsetX+side,offsetY+side,side,side);
// ctx.fill();
// ctx.strokeStyle = "white";
// // ctx.moveTo(offsetX+side, offsetY+side);
// ctx.moveTo(Math.floor(Math.random() * (offsetX+side - 500 + 1) + 500), Math.floor(Math.random() * (offsetY+side - 500 + 1) + 500));
// ctx.lineTo(Math.floor(Math.random() * (1300 - 500 + 1) + 500), Math.floor(Math.random() * (1300 - 500 + 1) + 500));
// ctx.stroke();
// ctx.strokeStyle = "white";
// ctx.moveTo(Math.floor(Math.random() * (offsetX+side - 500 + 1) + 500), Math.floor(Math.random() * (offsetY+side - 500 + 1) + 500));
// ctx.lineTo(Math.floor(Math.random() * (1300 - 500 + 1) + 500), Math.floor(Math.random() * (1300 - 500 + 1) + 500));
// ctx.stroke();
// ctx.closePath();

//initailaizing canvas

var canvas = document.getElementById("mycanvas")

//setting canvas for 2d
var ctx = canvas.getContext("2d")

//Create radial  gradient

var rad = ctx.createRadialGradient(150,75,15,150,75,100);
rad.addColorStop(0,"blue");
rad.addColorStop(1,"red");

//Create linear gradient

var grad = ctx.createLinearGradient(0,0,250,0);
grad.addColorStop(0,"orange");
grad.addColorStop(1,"green");

//create circle

ctx.beginPath();
ctx.arc(95, 70, 40, 0, 2 * Math.PI);
ctx.fillStyle = rad;
ctx.fill();
ctx.stroke();

//create rectangle

ctx.rect(55,30,80,80);
//ctx.fillStyle = grad;
//ctx.fill();
ctx.stroke();


ctx.font = "30px Arial";
ctx.strokeStyle = grad;
ctx.strokeText("Hello World", 100, 250);


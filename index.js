var box = document.getElementById('box');
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

// choosing random coordinates (random num btwn 0 & 1)
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;

console.log(`targetX: ${targetX}`);
console.log(`targetY: ${targetY}`);



function loc(e){
  console.log(`mouseX: ${event.clientX}`);
  console.log(`mouseY: ${event.clientY}`);


}

box.addEventListener("mousemove", loc);
box.style.backgroundColor = "black"

function distanceformula(){
  mouseX = event.clientX;
  mouseY = event.clientY;
  d = Math.sqrt((mouseX - targetX)^2 + (mouseY - targetY)^2);
  console.log(d);
  return d;
}

var dist = distanceformula;
console.log(dist);
// rgb(0,0,255-dist);

box.addEventListener("mousemove", distanceformula);

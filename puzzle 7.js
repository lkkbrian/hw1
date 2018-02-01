
var X = getColor() 
function downwards() {
  while (getColor() != "red")
 	down(); 
 if (getColor() == "red") {
    right();
    right();
}
}
downwards();
var X = getColor() 
function upwards() {
  while (getColor() != "red")
 	up(); 
 if (getColor() == "red") {
    right();
    right();
}
}
upwards();
downwards();
upwards();
 while (getColor() != "red")
 	down(); 
 if (getColor() == "red") {
    right();
}

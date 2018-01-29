down();
down();
down();
down();
right();
var A = getColor()
down();
setColor(A);
right();
right();
up();
right();
var B = getColor();
if (getColor() == A) {
    down();
    setColor(A)
    right();
} else {
    down();
    setColor(B)
    right();
}
right();

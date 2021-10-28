canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width_of_line=2;
radius=40;
last_position_of_x="";
last_position_of_y="";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";

}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if (mouseEvent="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth = width_of_line;
        console.log("Last position of x and y coordinates=");
        console.log("x=" + last_position_of_x+"y="+last_position_of_y);
        
        console.log("Current position of x and y coordinates=");
        console.log("x="+current_position_of_mouse_x+"y="+ current_position_of_mouse_y);
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;

}
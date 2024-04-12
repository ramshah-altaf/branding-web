
document.addEventListener("mousemove", function(event) {
   
    var circle = document.querySelector(".circle");
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Update circle position
    circle.style.left = (event.clientX + scrollLeft) + "px";
    circle.style.top = (event.clientY + scrollTop) + "px";
});



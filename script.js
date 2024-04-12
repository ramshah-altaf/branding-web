
document.addEventListener("mousemove", function(event) {
    var circle = document.querySelector(".circle");
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
  });


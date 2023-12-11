document.addEventListener("DOMContentLoaded", function () {
  var touchContainers = document.querySelectorAll(".touch-container");
  touchContainers.forEach(function (container) {
    container.addEventListener("touchstart", function () {
      container.classList.toggle("touched");
    });
  });
});

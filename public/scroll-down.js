(function () {
  var windowHeight;

  function init() {
    knockoutSection = document.getElementById("section-knockout");
    knockoutBody = document.getElementById("knockout__body");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    var positionFromTop = knockoutSection.getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      knockoutSection.classList.add("knockout-animated");
      knockoutBody.classList.add("knockout__body-animated");
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

(function () {
  var windowHeight;

  function init() {
    goldSection = document.getElementById("section-gold");
    goldBody = document.getElementById("gold__body");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    var positionFromTop = goldSection.getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      goldSection.classList.add("gold-animated");
      goldBody.classList.add("gold__body-animated");
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

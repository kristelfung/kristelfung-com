const animateOnLoad = () => {
  const pageElements = document.querySelectorAll(".fade-in");

  if (pageElements.length > 0) {
    pageElements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transition = "opacity 0.5s ease-in-out";
    });

    window.requestAnimationFrame(() => {
      pageElements.forEach((element) => {
        element.style.opacity = "1";
      });
    });
  }
};

exports.onRouteUpdate = ({ location }) => {
  if (location.action === "PUSH") {
    animateOnLoad();
  }
};
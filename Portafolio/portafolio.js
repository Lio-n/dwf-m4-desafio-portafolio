(function main() {
  window.onload = () => {
    /* Header.js */
    const headerEl = document.querySelector(".header");
    headerComponent(headerEl);

    var menuBurgerEl = document.querySelector(".menu-btn");
    desplegarMenu(menuBurgerEl);

    /* footer.js */
    var footerEl = document.querySelector("footer");
    footerComponent(footerEl);
  };
})();

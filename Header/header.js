/*****************!IMPORTANT********************
The parent of this 'divEl' must be an 'Element' with the class '.header'.
Because the 'headerEl' variable is called with the '.header' class.
<header class="header"></header>
*/

const headerComponent = (headerEl) => {
  let divEl = document.createElement("div");
  divEl.innerHTML = `
  <!--Header-->
      <header class="home-header" role="banner">
        <!--Logo-->
        <label class="home__logo">
          <a class="logo" href="./index.html"><p>Lion</p></a>
        </label>
        <!--Menu-Burger-->
        <ul class="cont-nav-menu">
          <div class="home__menu-items">
            <li class="home__item"><a href="./portafolio.html">Potafolio</a></li>
            <li class="home__item"><a href="./service.html">Servicios</a></li>
            <li class="home__item"><a href="./contact.html">Contacto</a></li>
          </div>
        </ul>
        <div class="menu-btn center">
          <div class="menu-btn__burger"></div>
        </div>
      </header>
      <div class="nav">
        <a class="nav__item" href="./portafolio.html">Portafolio</a>
        <a class="nav__item" href="./service.html">Servicios</a>
        <a class="nav__item" href="./contact.html">Contacto</a>
      </div>
  `;
  headerEl.appendChild(divEl);
};

const desplegarMenu = (menuBtn) => {
  const navEl = document.querySelector(".nav");
  let menuOpen = false;
  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!menuOpen) {
      menuBtn.classList.add("open");
      navEl.classList.add("center");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      navEl.classList.remove("center");
      menuOpen = false;
    }
  });
};

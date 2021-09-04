(function main() {
  window.onload = () => {
    /* Header.js */
    const headerEl = document.querySelector(".header");
    headerComponent(headerEl);

    var menuBurgerEl = document.querySelector(".menu-btn");
    desplegarMenu(menuBurgerEl);

    /* contact.js */
    var contactEl = document.querySelector(".contact");
    contactComponent(contactEl);

    /* footer.js */
    var footerEl = document.querySelector("footer");
    footerComponent(footerEl);
  };
})();
/* 
<div class="cont-svcs center">
          <div class="svcs__image"></div>
          <h3 class="svcs__sub-title">Hago Cosas</h3>
          <p class="svcs__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            iste perferendis quidem dolorum laudantium, exercitationem hic nemo
            quibusdam consectetur aliquam rem quisquam maiores cumque tempore
            repellendus? Quasi fugiat expedita voluptatibus.
          </p>
        </div>
        <div class="cont-svcs center">
          <div class="svcs__image"></div>
          <h3 class="svcs__sub-title">Hago Cosas</h3>
          <p class="svcs__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            iste perferendis quidem dolorum laudantium, exercitationem hic nemo
            quibusdam consectetur aliquam rem quisquam maiores cumque tempore
            repellendus? Quasi fugiat expedita voluptatibus.
          </p>
        </div>
        <div class="cont-svcs center">
          <div class="svcs__image"></div>
          <h3 class="svcs__sub-title">Hago Cosas</h3>
          <p class="svcs__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            iste perferendis quidem dolorum laudantium, exercitationem hic nemo
            quibusdam consectetur aliquam rem quisquam maiores cumque tempore
            repellendus? Quasi fugiat expedita voluptatibus.
          </p>
        </div>
        <div class="cont-svcs center">
          <div class="svcs__image"></div>
          <h3 class="svcs__sub-title">Hago Cosas</h3>
          <p class="svcs__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            iste perferendis quidem dolorum laudantium, exercitationem hic nemo
            quibusdam consectetur aliquam rem quisquam maiores cumque tempore
            repellendus? Quasi fugiat expedita voluptatibus.
          </p>
        </div>
        <div class="cont-svcs center">
          <div class="svcs__image"></div>
          <h3 class="svcs__sub-title">Hago Cosas</h3>
          <p class="svcs__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            iste perferendis quidem dolorum laudantium, exercitationem hic nemo
            quibusdam consectetur aliquam rem quisquam maiores cumque tempore
            repellendus? Quasi fugiat expedita voluptatibus.
          </p>
        </div>
*/

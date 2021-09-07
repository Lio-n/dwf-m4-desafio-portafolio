/*****************!IMPORTANT********************
The parent of this 'divEl' must be an 'Element' with the class '.contact' and '.center'.
Because has the 'CSS Properties' that contain everything and 
the 'contactEl' variable is called with the '.contact' class.
<section class="contact center"></section>
*/

const contactComponent = (contactEl) => {
  const divEl = document.createElement("div");
  divEl.innerHTML = `
    <div class="contact__container">
        <h2 class="contact__title title--lil">Escribime</h2>

        <form class="contact-form" id="form">
          <!--Contact-Form__Name-->
          <label class="contact-form__group">
            <span class="contact-form__span">NOMBRE</span>
            <input type="text" name="name" class="contact-form__input border-inputs " />
          </label>

          <!--Contact-Form__Email-->
          <label class="contact-form__group">
            <span class="contact-form__span">EMAIL</span>
            <input type="email"  name="email" class="contact-form__input border-inputs " />
          </label>

          <!--Contact-Form__Message-->
          <label class="contact-form__group">
            <span class="contact-form__span">MENSAJE</span>
            <textarea  name="message" class="contact-form__textarea border-inputs "></textarea>
          </label>

          <button class="contact-form__button" type="submit">Enviar</button>
        </form>
      </div>
    `;
  contactEl.appendChild(divEl);
};

const formulario = ($formEl) => {
  $formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const dataForm = new FormData($formEl);

    const data = {
      to: dataForm.get("email"),
      message: dataForm.get("message"),
    };
    console.log(data);

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
  });
};

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

    var $formEl = document.getElementById("form");

    formulario($formEl);
  };
})();

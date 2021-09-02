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

        <form class="contact-form">
          <!--Contact-Form__Name-->
          <label class="contact-form__group">
            <span class="contact-form__span">NOMBRE</span>
            <input type="text" class="contact-form__input" />
          </label>

          <!--Contact-Form__Email-->
          <label class="contact-form__group">
            <span class="contact-form__span">EMAIL</span>
            <input type="email" class="contact-form__input" />
          </label>

          <!--Contact-Form__Message-->
          <label class="contact-form__group">
            <span class="contact-form__span">MENSAJE</span>
            <textarea class="contact-form__textarea"></textarea>
          </label>

          <button class="contact-form__button">Enviar</button>
        </form>
      </div>
    `;
  contactEl.appendChild(divEl);
};

/*****************!IMPORTANT********************
The parent of this 'divEl' must be an 'Element' with the tag 'footer'.
Because the 'footerEl' variable is called with the tag 'footer'.
<footer></footer>
*/

const footerComponent = (footerEl) => {
  const divEl = document.createElement("div");
  divEl.innerHTML = `
    <div class="footer__logo">
        <a class="logo" href=" "><img src="./Image/Lion_logo.png" alt=""></a>
    </div>
    <!--Links-Social-Media-->
    <div class="cont-social-net">
        <!--Instagram-->
        <a class="footer__social" href="https://www.instagram.com/tropical_sn0w/" target="_blank">
          Instagram <img src="./Image/instagram.svg" alt="instagram-icon"/></a>
        
          <!--Linkedin-->
        <a class="footer__social"  href="https://www.linkedin.com/in/leonardo-fontan/" target="_blank"        >
          Linkedin <img src="./Image/Linkedin.svg" alt="linkedin-icon"/></a>
        
          <!--Github-->
        <a class="footer__social" href="https://github.com/Lio-n"  target="_blank">
          Github <img src="./Image/Github.svg" alt="github-icon"/></a>
    </div>
    `;
  divEl.classList.add("footer");
  footerEl.appendChild(divEl);
};

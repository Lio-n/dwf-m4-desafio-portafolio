//Recibe un ID y devuelve una URL
//Le doy 'donde' buscar y 'que' buscar
const getUrlImage = (arrIncludes, idImg) => {
  for (const item of arrIncludes) {
    if (item.sys.id.includes(idImg)) {
      return "https:" + item.fields.file.url;
    }
  }
};

//Devuelve un 'Array de Objetos' con las 'Keys'(title,paragraph,link,urlImg)
//createArrayOfContentful
const createArrayOfObjectsFromContentful = (arrContentful) => {
  class work {
    constructor(title, paragraph, link, urlImg) {
      (this.title = title),
        (this.paragraph = paragraph),
        (this.link = link),
        (this.urlImg = urlImg);
    }
  }
  //newArr tendra las 'Keys'(title, paragraph, link(URL) y image(URL))
  let newArr = arrContentful.items.map((r) => {
    let idImg = r.fields.image.sys.id; //id de la imagen a buscar
    let urlImg = getUrlImage(arrContentful.includes.Asset, idImg); //Retorna la 'URL de la imagen'
    return new work(r.fields.title, r.fields.paragraph, r.fields.link, urlImg);
  });
  return newArr;
};

//Recibe un 'Array de Objects' y lo deplega en el 'Document'
const createCardsOnDocument = (newArr) => {
  let $container_cards = document.querySelector(".cont-svcs-main"), //Le agrego los Items desde el Template
    $templateEl = document.querySelector("template").content, //El Template
    $fregment = document.createDocumentFragment(); //Se crea un objeto DocumentFragment vacio

  //(title, paragraph, link(URL) y urlImg(URL))
  newArr.forEach((item) => {
    $templateEl.querySelector(".svcs__sub-title").textContent = item.title;
    $templateEl.querySelector(".svcs__paragraph").textContent = item.paragraph;

    $templateEl.querySelector(".svcs__link").setAttribute("href", item.link);
    $templateEl.querySelector(".svcs__image").setAttribute("src", item.urlImg);
    let $clone = document.importNode($templateEl, true);
    $fregment.appendChild($clone);
  });

  $container_cards.appendChild($fregment);
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
  };

  console.time();
  fetch(
    "https://cdn.contentful.com/spaces/xo3l694rmh5a/environments/portafolio/entries?access_token=qKvjKKrhSXzFpjmdEojQ5-2dp54l-xjf4IGW-xds08A&content_type=service&order=sys.createdAt"
  )
    .then((e) => {
      return e.json();
    })
    .then((e) => {
      console.log(e);
      let newArr = createArrayOfObjectsFromContentful(e); //Devuelve un 'Array de Objetos' con las 'Keys'(title,paragraph,link,urlImg)
      createCardsOnDocument(newArr);
      console.timeEnd();
    });
})();

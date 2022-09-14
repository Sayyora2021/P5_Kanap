//pour recuperer l'id existant
const idProduct = new URLSearchParams(window.location.search).get('id');
const itemImg = document.querySelector('.item__img');


//pour recuperer le produit fetch avec un argument (URL de produit dans ce cas)
fetch(`http://localhost:3000/api/products/${idProduct}`)
  .then((data) => data.json())
  .then((product) => {
    //fonction qui qui affiche les valeurs de l'objet
    const imageKanap = document.createElement('img');
    imageKanap.src = product.imageUrl;
    imageKanap.alt = product.altTxt;
    itemImg.appendChild(imageKanap);

    let kanapName = document.getElementById('title');
    kanapName.textContent = (`${product.name}`);

    let kanapPrice = document.getElementById('price');
    kanapPrice.textContent = (`${product.price}`);

    let kanapDescription = document.getElementById('description');
    kanapDescription.textContent = (`${product.description}`);

    //creation de boucle couleur des options et value existants dans html pour couleur 
    const dropdownColors = product.colors

    for (let color of dropdownColors) {
      let dropdown = document.createElement('option');
      dropdown.value = `${color}`;
      dropdown.textContent = `${color}`;
      let select = document.getElementById('colors')
      select.appendChild(dropdown);
    }
  });

//creation de bouton
const button = document.getElementById('addToCart')


//fonction de button
button.addEventListener("click", buttonClick)

function buttonClick() {

  const color = document.getElementById('colors');
  let couleur = color.value;

  const quantity = document.getElementById('quantity');
  let kanapQuantity = quantity.value;

  //Création d'objet
  let kanape = {
    id: idProduct,
    color: couleur,
    quantity: Number(kanapQuantity),
  };


  /********* Les conditions **************/

  // si la quantité est bonne
  if (Number(kanapQuantity) > 0 && Number(kanapQuantity) <= 100) {
    alert(`La quantité ${quantity.value} sélectionnés`);

    //si la couleur est choisie, on le met dans storage
    if (kanape.color !== "") {
      let myBasket = JSON.parse(localStorage.getItem("myBasket"));

      //si le panier n'existe pas, on le créé, on push objet et on le met dans storage
      if (myBasket == null) {
        let myBasket = [];
        myBasket.push(kanape);
        console.log(myBasket)
        localStorage.setItem("myBasket", JSON.stringify(myBasket));
        window.location.href = "cart.html"
      }
      //on cherche dans le panier même id et même couleur
      const findProduct = myBasket.find((el) => el.id === idProduct && el.color === kanape.color);
      
      //si ce produit existe 
      if (findProduct) {
        //on montre la quantité = quantité.value+ panier.quantité                                          
        let newQuantity = Number(kanapQuantity) + findProduct.quantity;

        if (newQuantity > 0 && newQuantity <= 100) {
          findProduct.quantity = newQuantity;
          localStorage.setItem("myBasket", JSON.stringify(myBasket));
          window.location.href = "cart.html"
        } else {
          alert("Vous avez déjà pris ce canapé")
        }

      }
      else {
        // sinon, ajout du canapé au panier et on met le panier dans storage
        myBasket.push(kanape);
        localStorage.setItem("myBasket", JSON.stringify(myBasket));
        window.location.href = "cart.html"
      }
    }
    else {
      alert("merci de choisir une couleur");
    }
  }
  else {
    alert('merci de choisir une quantité entre 1-100');
  }
};

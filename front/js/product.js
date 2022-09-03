//pour recuperer l'id existant
const idProduct = new URLSearchParams(window.location.search).get('id');
const itemImg = document.querySelector('.item__img');

//const itemContent = document.querySelector('.item__content');

//pour recuperer le produit fetch avec un argument (URL de produit dans ce cas)
fetch(`http://localhost:3000/api/products/${idProduct}`)
  .then((data) => data.json())
  .then((product) => {


    //fonction qui a img,title,price, description, loop-color
    //function display (product){
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
    console.log(dropdownColors);

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


//creation de fonction button
button.addEventListener("click", buttonClick)

function buttonClick(kanap) {

  console.log("click sur le");

  const color = document.getElementById('colors');
  let couleur = color.value;
  console.log(couleur);

  const quantity = document.getElementById('quantity');
  let kanapQuantity = quantity.value;
  console.log(kanapQuantity);
  console.log(idProduct);

  let kanape = {
    id: idProduct,
    color: couleur,
    quantity: Number(kanapQuantity),
  }
  /*localStorage.setItem("kanape", JSON.stringify("myBasket"));*/
  //window.location.href = "cart.html"
  console.log(kanape);


  //Conditions
  if (Number(kanapQuantity) > 0 && Number(kanapQuantity) <= 100) { // si la quantité est entre 1 et 100
    alert("quantity ok");

    if (kanape.color != "") { //si la couleur est choisie
      alert('couleur ok');
      let myBasket = JSON.parse(localStorage.getItem("myBasket"))//on récupère le panier

      if (myBasket == null) { //si le panier n'existe pas
        myBasket = []; // création du panier
        //myBasket.push(kanape); // ajout du canapé au panier
        localStorage.setItem("myBasket", JSON.stringify(myBasket)); //on met le panier dans storage


        //si même id et même couleur, montrer la quantité
      } const findProduct = myBasket.find((el) => el.id === idProduct && el.color === kanape.color)//chercher si même id et même couleur
      if (findProduct) {                                               //si ce produit existe 
        let newQuantity = Number(kanapQuantity) + findProduct.quantity;   //on créé la quantité = quantité.value+ panier.quantité
        findProduct.quantity = newQuantity;         //panier.quantité est égale à newQuantité
        console.log(findProduct)
        alert(`L'ajoute de quantité ${quantity.value} a été pris en compte`)
        localStorage.setItem("myBasket", JSON.stringify(myBasket))// on met le panier dans storage
      }
      else {  // sinon 
        myBasket.push(kanape); // ajout du canapé au panier
        localStorage.setItem("myBasket", JSON.stringify(myBasket)); //on met le panier dans storage

      }
    } else {
      alert("merci de choisir une couleur");
    }
  } else {
    alert('merci de choisir une quantité entre 1-100');
  }

};


// //Conditions de la page product
  /*  if (kanape.color != "") {
      let myBasket = JSON.parse(localStorage.getItem("myBasket")) //on récupère le panier

      // Si même produit/couleur est déjà dans le localStorage
      const findProduct = myBasket.find((el) => el.id === idProduct && el.color === kanape.color)//chercher si même id et même couleur

      if (findProduct) {       
        //si ce produit existe ...  
        console.log('le produit existe..');     
        let newQuantity = Number(kanapQuantity) + Number(findProduct.quantity); //on montre la quantité

        const updatedResult = myBasket.map((el) => {
          if (el && el.id === idProduct && el.color === kanape.color) {              
              el.quantity = newQuantity;
          }
        });

        if (newQuantity > 0 && newQuantity <= 100) { 
            localStorage.setItem("myBasket", JSON.stringify(updatedResult)); //on met le panier dans storage
        }
        else {
          console.log('Non compris entre 0 et 100');
        }     
      }
      else {  
        // ce produit n'existe pas ...
        if (kanapQuantity > 0 && kanapQuantity <= 100) { 
          myBasket.push(kanape); // ajout du canapé au panier
          localStorage.setItem("myBasket", JSON.stringify(myBasket)); //on met le panier dans storage
        }
        else {
          console.log('Non compris entre 0 et 100');
        }          
      }
  }

  console.table(localStorage.getItem("myBasket"))
};*/





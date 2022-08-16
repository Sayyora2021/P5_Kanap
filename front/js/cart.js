//afficher le produit sélectionné depuis localStorage
console.log('numberOfItem');
const cart =[]

cart.forEach((item) => displayItem(item))

giveFromCart ()
console.log(cart)
function giveFromCart (){
  let numberOfItem = localStorage.length
  for (let i =0; i< numberOfItem; i++){
  const item = localStorage.getItem(localStorage.key(i))
  console.log("objet à la position ",i," et ",item)
  const itemObject = JSON.parse(item)
  cart.push(itemObject)
}
}
/*
color: "Blue"
id: "107fb5b75607497b96722bda5b504926"
quantity: 1*/


  let displayArticle = document.getElementById('cart__items')
  displayArticle.textContent = (`${displayArticle.cart__items}`) 
console.log("cart_items est là")


//recuperer les elements by id
/*const theProducts = document.getElementById('cart__items');
console.log('theProducts');
/*function saveBasket(basket){
 localStorage.setItem("basket", JSON.stringify(basket));
}
function getBasket(){
let basket = localStorage.querySelector("#cart__items");
if(basket == null){
return[];
}else{
 return JSON.parse(basket);
}
}

function addBasket(product){
 let basket = getBasket();
 let foundProduct = basket.find(p =>id == cart__items);
 if (foundProduct != undefined) {
  foundProduct.quantity++;
 }else{
  product.quantity = 1;
  basket.push(product);
 
 }
 saveBasket(basket);
}
//supprimer un produit
function removeFromBasket(product){
 let basket = getBasket();
 basket = basket.filter(p => p.id  != product.id);
 saveBasket(basket);
}

//changer la quantite de produit
function changeQuantity(product, quantity){
 let basket = getBasket();
 let foundProduct = basket.find(p => p.id  != product.id);
if (foundProduct != undefined){
foundProduct.quantity += quantity;
if (foundProduct.quantity <= 0){
 removeFromBasket(foundProduct);
}else{
 saveBasket(basket);
}
}

}

//calculer le nombre de produits
function getNumberProduct(){
 let basket = getBasket();
 let number =0;
 for (let product of basket){
  number+= product.quantity;
 }
 return number;
}

// calculer le prix
function getTotalPrice(){
let basket = getBasket();
let total =0;
for (let product of basket){
 total += product.quantity * product.price;
}
return total;
}*/
//PROCUDT.PAGE
/*//pour recuperer l'id existant
const idProduct = new URLSearchParams(window.location.search).get('id');
const itemImg = document.querySelector('.item__img');

//const itemContent = document.querySelector('.item__content');

//pour recuperer le produit
fetch(`http://localhost:3000/api/products/${idProduct}`)
  .then((response) => response.json())
  .then((product) =>{
    const imageKanap = document.createElement('img');
    imageKanap.src = product.imageUrl;
    imageKanap.alt = product.altTxt;
    itemImg.appendChild(imageKanap);

    let kanapName = document.querySelector ('#title');
    kanapName.textContent = (`${product.name}`);

    let kanapPrice = document.querySelector('#price');
    kanapPrice.textContent = (`${product.price}`);
    
    let kanapDescription = document.querySelector('#description');
    kanapDescription.textContent = (`${product.description}`);

//creation de boucles des options et value existants dans html pour couleur 
    const dropdownColors =product.colors
    console.log(dropdownColors);

    for (let color of dropdownColors){
     let dropdown = document.createElement ('option');
     dropdown.value = `${color}`;
     dropdown.textContent= `${color}`;
     let select = document.querySelector('#colors')
     select.appendChild(dropdown)
 }
});
 
 // Initialisation du panier
 let myBasket = [];

  //save the basket in localStorage 
  function putLocalStorage(panier){
    localStorage.setItem("kanape", JSON.stringify(panier));
  }
   
  function getLocalStorage (){
    let myBasket = localStorage.getItem ("myBasket");
    if (myBasket == null) {
      return [];
    }else{
      return JSON.parse(myBasket);
    }
  }
//creation de bouton
const button =document.querySelector('#addToCart')


button.addEventListener("click", (e)=>{
   
 console.log("click sur le") ;
 const color = document.querySelector('#colors');
 let couleur = color.value;
 console.log(couleur);

 const quantity = document.querySelector('#quantity');
 let kanapQuantity = quantity.value;
 console.log(kanapQuantity);
 console.log(idProduct);

 let kanape = {
  id: idProduct,
  color: couleur,
  quantity:Number (kanapQuantity),
 }

 console.log(kanape);*/
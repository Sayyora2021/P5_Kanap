//récupérer le panier sélectionné depuis localStorage
const giveFromStorage = JSON.parse(localStorage.getItem("myBasket")) ;
console.log(giveFromStorage);


//giveFromStorage.forEach(item =>console.log(item))

 
let totalQuantity = 0;
let totalPrice = 0;

//boucle qui récupère tous les éléments de panier et met dans la fonction displayItem 
giveFromStorage.forEach((value)=> displayItem (value));


function displayItem(value) {

  displayQuantity();
//for (let value of giveFromStorage){

  //calcule de quantity total, on prend 0 += quantity. Il prend la quantity total de localStorage


   function displayQuantity (){  
      totalQuantity += value.quantity;
      let totalQte = document.getElementById("totalQuantity"); 
      totalQte.textContent = totalQuantity;
     
   }

  fetch(`http://localhost:3000/api/products/${value.id}`)
  .then((response) => response.json())
  .then((product) => {
console.log(product);



//le calcule du prix total
totalPrice  += value.quantity * product.price;
let totalPriceElement = document.getElementById("totalPrice");
totalPriceElement.textContent= totalPrice;


//récuperation de la section item by id
const sectionItem = document.getElementById('cart__items')


//création d'article avec data-id & data-color, on donne value =>produit du panier
const article = document.createElement("article");
article.classList.add("cart__item")
article.setAttribute("data-id", value.id)
article.setAttribute("data-color",value.color)

//creation de div avec image
let divImg = document.createElement("div");
divImg.classList.add("cart__item__img");


//récupérer l'image avec fetch localStorage

const image = document.createElement("img");
image.src =product.imageUrl;
image.alt = product.altTxt;



//création de div-item-content
let divContent = document.createElement('div');
divContent.classList.add("cart__item__content");

 

//récupérer le div+ description
let divDescrip = document.createElement("div");
divDescrip.classList = ("cart__item__content__description");
 

//récupérer h2+ le nom du canapé
let text = document.createElement("h2");
text.textContent = product.name;


//récupérer la couleur (avec localStorage)
let pcolor = document.createElement("p")
pcolor.textContent= value.color;



//récupérer le prix avec fetch(product)
 let price = document.createElement("p");
 price.textContent = product.price;



 //création de setting pour la quantité
 let setting = document.createElement("div");
setting.classList.add("cart__item__content__settings");

//création de div pour la quantité
let dquantity = document.createElement("div");
dquantity.classList.add("cart__item__content__settings__quantity");


// le paragraphe de Qté
let quantite = document.createElement("p");
quantite.innerHTML = "Qté:";

 

 //creation d' input 
 let numberInput= document.createElement('input');
 numberInput.type ="number";
 numberInput.class = "itemQuantity";
 numberInput.name = "itemQuantity";
 numberInput.min = "1";
 numberInput.max = "100";
 numberInput.value = value.quantity;
 console.log(numberInput.value)


 numberInput.addEventListener("change",() => updPriceQuantity(value.id, numberInput.value))
 function updPriceQuantity(id, newValue){
  console.log(id) 
  console.log(newValue)
  //totalQuantity += newValue;
  const itemProduct = giveFromStorage.find(value => value.id === id);
  itemProduct.quantity = Number (newValue)
  console.log(totalQuantity)
 displayQuantity()
 }
 

 
 // assign qui copie les valeurs d'un objet qui est énuméarble sur un autre objet cible.
 /*Object.assign(numberInput, {
  min: 1,
  max: 100,
 })*/


 //parents & children
 sectionItem.appendChild(article);
 article.appendChild(divImg);
 divImg.appendChild(image);
 article.appendChild(divContent);
 divContent.appendChild(divDescrip);
 divDescrip.appendChild(text);
 divDescrip.appendChild(pcolor);
 divDescrip.appendChild(price);
 divContent.appendChild(setting);
 setting.appendChild(dquantity);
 dquantity.appendChild(quantite);
 dquantity.appendChild(numberInput);


 //-------DELETE------------------------------
//création de delete
deleteSetting(setting)


function deleteSetting(setting){
 let setDelete = document.createElement('div');
 setDelete.classList.add("cart__item__content__settings__delete")
 setting.appendChild(setDelete)
 
 let pDelete = document.createElement('p');
pDelete.classList.add("deleteItem");

setDelete.appendChild(pDelete)
pDelete.textContent= 'Supprimer';
}




let messageError = document.getElementById('firstNameErrorMsg')
console.log(messageError)
  
});
}


/*function renderCartItems (){
  let totalPrice =0,
  totalQuantity =0;

  cart.forEach((item)=> {
    totalPrice += item.price * item.id;
    totalQuantity += item.id
    console.log(item.id)
  })
totalQte.innerHTML = `Total (${totalQuantity} article): $${totalPrice}`
}*/


//récupérer id avec map
/*let kanaps = addBasket.map(element =>{
  return element.id 
})
console.log(kanaps);*/







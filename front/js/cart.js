//afficher le produit sélectionné depuis localStorage(il fonctionne pour tableau)
const giveFromStorage = JSON.parse(localStorage.getItem("myBasket"));
console.log(giveFromStorage);



let totalQuantity = [0]

for (let value of giveFromStorage){
      console.log(value)
  fetch(`http://localhost:3000/api/products/${value.id}`)
  .then((response) => response.json())
  .then((product) => {
console.log(product);

//récuperation de la section item by id
const sectionItem = document.getElementById('cart__items')
console.log(sectionItem)

//création d'article avec data-id & data-color, on donne value =>produit du panier
const article = document.createElement("article");
//console.log(article) 
article.classList.add("cart__item")
article.setAttribute("data-id", value.id)
article.setAttribute("data-color",value.color)
sectionItem.appendChild(article)


//creation de div avec image
let divImg = document.createElement("div");
divImg.classList.add("cart__item__img");
article.appendChild(divImg)
console.log(divImg); 


//creation d'image
let image = document.createElement("img");
image.src =product.imageUrl;
image.alt = product.altTxt;
divImg.appendChild(image)
//console.log(image)


//création de div-item-content
let divContent = document.createElement('div');
divContent.classList.add("cart__item__content");
article.appendChild(divContent)
//console.log(divContent);  



//récupérer le div+ description
let divDescrip = document.createElement("div");
divDescrip.classList = ("cart__item__content__description");
//divDescrip.textContent= product.description;
divContent.appendChild(divDescrip);
//console.log(divDescrip);  

//récupérer h2+ le nom du canapé
let text = document.createElement("h2");
text.textContent = product.name;
divDescrip.appendChild(text)
//console.log(text);

//récupérer la couleur 
let pcolor = document.createElement("p")
pcolor.textContent= value.color;
divDescrip.appendChild(pcolor);
//console.log(pcolor)

//récupérer le prix
 let price = document.createElement("p");
 price.textContent = product.price;
 divDescrip.appendChild(price);
 //console.log(price);

 //création de setting pour la quantité
 let setting = document.createElement("div");
setting.classList.add("cart__item__content__settings");
divContent.appendChild(setting)
//console.log(setting); 
 
//afficher la quantité
let dquantity = document.createElement("div");
dquantity.classList.add("cart__item__content__settings__quantity");
//dquantity.textContent= value.quantity;// il s'affiche avant le mot quantité
setting.appendChild(dquantity)
//console.log(dquantity); 


let quantite = document.createElement("p");
quantite.innerHTML = "Qté:";
 dquantity.appendChild(quantite);
 //console.log(quantite);

 //creation de input avec assign qui copie les valeurs
 // d'un objet qui est énuméarble sur un autre objet cible.
 let numberInput= document.createElement('input');
 numberInput.setAttribute('type', 'number');
 numberInput.setAttribute('class', "itemQuantity");
 numberInput.setAttribute('name', "itemQuantity");
 numberInput.setAttribute('min', '1');
 numberInput.setAttribute('max', '100');
 numberInput.setAttribute('value',value.quantity);
  dquantity.appendChild(numberInput);
 /*Object.assign(numberInput, {
  min: 1,
  max: 100,
 })*/

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

//-------------TOTAL QUANTITE & PRICE-----------
//total quantité
/*function displayTotalNum (item) {
  let total =0;
  
  giveFromStorage.forEach(item => {
   const totalSomme=  product.price * item.quantity
   total = total + totalSomme
  })
  console.log(total);
}*/

let totalQte = document.getElementById("totalQuantity");
//totalQte.textContent = giveFromStorage.quantity;
console.log(totalQte);



//le prix total et calcule du prix
let totalPrice = document.getElementById("totalPrice");
  totalPrice.textContent= giveFromStorage.quantity;
//totalPrice = totalQuantity;
console.log(totalPrice);


//calcul de quantité
/*const totalQuantity = giveFromStorage.find((el) =>el.id == value.id) 
total = value.quantity + totalQuantity.quantity;
//totalQuantity = totalQte;
//totalQte.textContent = totalQuantity;
console.log(total);*/
  
//----------------test boocles for calcul price & quantity-------------------

giveFromStorage.forEach(item => {
  const totalNumber = value.quantity * product.price;

  
  //const totalNumber = value.quantity + giveFromStorage.quantity
  console.log(totalNumber)
  
});

//el.quantity == value.id) 




//const firstItemQuantity = value.quantity * product.price;
//const firstItemPrice = value.quantity + firstItem.quantity;





//-------------test-----------------------------




let messageError = document.getElementById('firstNameErrorMsg')
console.log(messageError)
})



}



 


//récupérer id avec map
/*let kanaps = addBasket.map(element =>{
  return element.id 
})
console.log(kanaps);*/







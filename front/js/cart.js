//afficher le produit sélectionné depuis localStorage
let giveFromStorage = JSON.parse(localStorage.getItem("basket"))


const displayArticle = document.getElementById('cart__items')
console.log("cart_items est là")




/*
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
}*/
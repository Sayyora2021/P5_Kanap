//pour recuperer l'id existant
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

    let kanapName = document.getElementById ('title');
    kanapName.textContent = (`${product.name}`);

    let kanapPrice = document.getElementById('price');
    kanapPrice.textContent = (`${product.price}`);
    
    let kanapDescription = document.getElementById('description');
    kanapDescription.textContent = (`${product.description}`);

//creation de boucle couleur des options et value existants dans html pour couleur 
    const dropdownColors =product.colors
    console.log(dropdownColors);

    for (let color of dropdownColors){
     let dropdown = document.createElement ('option');
     dropdown.value = `${color}`;
     dropdown.textContent= `${color}`;
     let select = document.getElementById('colors')
     select.appendChild(dropdown);
 }
});
 
 // Initialisation du panier
 let basket = [];

//creation de bouton
const button =document.querySelector('#addToCart')


button.addEventListener("click", (e)=>{
  
 let basket = JSON.parse(localStorage.getItem("basket"));
 console.log("click sur le") ;

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
  quantity:Number (kanapQuantity),
 }

 console.log(kanape);
 
//function qui ne marche pas
 if(Number (kanapQuantity) >0 && Number (kanapQuantity) <=100 && couleur!== ""){
  console.log("quantity ok");
   }if(localStorage.getItem("basket")===null){
    basket =[]
    basket.push(kanape);
   console.log('merci de choisir');
   localStorage.setItem("basket", JSON.stringify(basket));
   //window.location.href = "carte.html";
   } else {
    let itemProduct = false;
    for (let el in basket){
      if(idProduct === basket[el].id && couleur === basket[el].couleur){
        basket[el].quantity = Number(basket[el].quantity)+Number (kanapQuantity);
        itemProduct = true;
        break; // sortie de boucle pour eviter de repeter la fonction
      }
    }
   }
   // fonction qui marche
 /*if(Number (kanapQuantity) >0 && Number (kanapQuantity) <=100 && couleur!== ""){
  console.log("quantity ok");
 }else{
  let itemProduct = false;
  console.log ('Merci de choisir un nombre et couleur de canapé');
 };
/*
 if(addBasket.some(item => (item.id == kanape.id) && (item.color == kanape.color))){
   kanape.quantity +=1;
   console.log("merci pour l'achat");
} else {
   alert('Merci de choisir le nombre');
}
//myArray.push()
myBasket.push(kanape);
console.log(myBasket); 

 /*
 //ex:how retrieve elements of object localStorage
 for( let i = 0; i < localStorage.length; i++){
  localStorage.key(i);

//to delete an element
localStorage.removeItem('object');*/


});


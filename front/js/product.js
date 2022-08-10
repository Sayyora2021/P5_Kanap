//pour recuperer l'id existant
const idProduct = new URL(document.location).searchParams.get('id');
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

 console.log(kanape);
  
 //myArray.push()
  myBasket.push(kanape);
  console.log(myBasket);

  
 //put the object into storage 
 localStorage.setItem("myBasket", JSON.stringify(myBasket));

 let addBasket =JSON.parse( localStorage.getItem("myBasket"))

 if(addBasket.some(item => (item.id == kanape.id) && (item.color == kanape.color))){
   kanape.quantity; //+=1
   console.log("merci pour l'achat");
} else {
   alert('Merci de choisir le nombre');
}
 /*if (addBasket == kanape.length){
 localStorage.getItem("addBasket",JSON.parse);
 console.log("merci pour l'achat");
 } else {
  console.log ('Veuillez choisir le nombre')
 }*/
 


})


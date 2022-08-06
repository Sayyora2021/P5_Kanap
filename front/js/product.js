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
 })
 
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
  quantity:kanapQuantity,
 }
 
 //creation de panier
 let myBasket = 
 //fonction pour envoyer a confirmation
 /*const confirmation =() =>{
  if (window.confirm(`${idProduct.kanape} a bien été ajouté au panier
  consulter le panier OK ou revenir à l'accueil ANNULER`)){
  window.location.href = "carte.html";
  }else{
    window.location.href = "index.html";
  }
 }*/

 //myArray.push()
 let myArray = ['kanape'];
 console.log(myArray);
 myArray.push("");
 
 console.log(kanape);
 localStorage.setItem("kanape", JSON.stringify(kanape));

 //s'il y a deja un produit d'enregistre dans local storage
if(kanape){

}
//s'il n'y a pas de produit d'enregistre dans local storage
else{
  kanape = []
  console.log(myArray)
  kanape.push(myArray)
  localeStorage.setItem("kanape", JSON.stringify(myArray))
}

})







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
 let myBasket = [];

//creation de bouton
const button =document.getElementById('addToCart')

//const kanape = JSON.stringify(localStorage.getItem("kanape"));

button.addEventListener("click", (e)=>{
  
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
 
//condition qui ne marche pas
/* if(Number (kanapQuantity) >0 && Number (kanapQuantity) <=100 && couleur!== ""){
  localStorage.getItem("basket")
  console.log("quantity ok");
   }if(localStorage.getItem("basket")===null){
    basket =[]
    basket.push(kanape);
   console.log('merci de choisir');
   localStorage.setItem("basket", JSON.stringify(basket).value);
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
   }*/
   // condition qui marche 
 if(Number (kanapQuantity) >0 && Number (kanapQuantity) <=100){ // si la quantité est entre 1 et 100
    alert("quantity ok");
    
 } else{
  alert ("merci de choisir une quantité");
 }
 if (kanape.color != ""){ //si la couleur est choisie
      alert('couleur ok');
 } else {
  alert("merci de choisir une couleur");
  myBasket = JSON.parse(localStorage.getItem("basket"))//on montre le pnaier
  
 } if (myBasket == null){ //si il n'y a rien dans le panier
        myBasket = [];
        myBasket.push(kanape);
        localStorage.setItem("basket", JSON.stringify(myBasket)); //on met le panier dans storage
      }
      else{                              // sinon on montre ce qu'il y a dans le panier
        myBasket.push(kanape);
        localStorage.setItem("basket", JSON.stringify(myBasket));
      } 
     /* for(const item of myBasket){
          if (item.id === kanape.id && item.color === kanape.color)// si même id et même couleur
          kanape.quantity;                 // montrer la quantité
         } */
               
           
      

    });
       







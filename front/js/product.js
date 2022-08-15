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

//creation de fonction button
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
 
   // condition qui récupère les elemnts de l'objet
  /*if(Number (kanapQuantity) >0 && Number (kanapQuantity) <=100){ // si la quantité est entre 1 et 100
    alert("quantity ok");
  
   if (kanape.color != ""){ //si la couleur est choisie
      alert('couleur ok');
   myBasket = JSON.parse(localStorage.getItem("myBasket"))//on recupère le panier
    
 if (myBasket == null){ //si le panier n'existe pas
        myBasket = []; // creation de panier
        myBasket.push(kanape); // on ajout objet dans le panier
        localStorage.setItem("myBasket", JSON.stringify(myBasket)); //on met le panier dans storage
      }
    }
      else{                              // sinon on montre ce qu'il y a dans le panier
        alert ("merci de choisir une couleur");
      } 
    }
      else{
        console.log('merci de choisir une quantité')
      }*/

    //ma condition test 
     if(Number (kanapQuantity) >0 && Number (kanapQuantity) <=100){ // si la quantité est entre 1 et 100
       alert("quantity ok");
        }else{
        console.log('merci de choisir une quantité')
      };
      if (kanape.color != ""){ //si la couleur est choisie
        alert('couleur ok');
        myBasket = JSON.parse(localStorage.getItem("kanape"))//on recupère le panier
      } else{                              // sinon on montre ce qu'il y a dans le panier
        alert ("merci de choisir une couleur");
      } 
      if (myBasket == null){ //si le panier n'existe pas
        myBasket = []; // creation de panier
        myBasket.push(kanape); // on ajout objet dans le panier
        localStorage.setItem("kanape", JSON.stringify(myBasket)); //on met le panier dans storage
      } else{
        myBasket.push(kanape); //ajoute du canape au panier
        localStorage.setItem("kanape", JSON.stringify(myBasket)); //on met le panier dans storage
        console.log('canapé est rajouté dans le panier');
       }   
     
     
      
      

    });
       







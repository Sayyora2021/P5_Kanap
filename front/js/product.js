//pour recuperer l'id existant
const idProduct = new URLSearchParams(window.location.search).get('id');
const itemImg = document.querySelector('.item__img');


//pour recuperer le produit fetch avec un argument (URL de produit dans ce cas)
fetch(`http://localhost:3000/api/products/${idProduct}`)
  .then((data) => data.json())
  .then((product) => {
      //fonction qui qui affiche les valeurs de l'objet
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

function buttonClick() {
  //console.log("click sur le bouton ajouter au panier");

  const color = document.getElementById('colors');
  let couleur = color.value;
  //console.log(couleur);

  const quantity = document.getElementById('quantity');
  let kanapQuantity = quantity.value;
  //console.log(kanapQuantity);
  //console.log(idProduct);

  let kanape = {
    id: idProduct,
    color: couleur,
    quantity: Number(kanapQuantity),
  };
  
 //window.location.href = "cart.html"

  //Conditions LA BONNE VERSION
  
/*********La bonne version************* */
// si la quantité est bonne
if (Number(kanapQuantity) > 0 && Number(kanapQuantity) <= 100) { 
  alert(`L'ajout de quantité ${kanapQuantity.value} a été pris en compte`);
    //si la couleur est choisie, on le met dans storage

    if (kanape.color != "") { 
        let myBasket = JSON.parse(localStorage.getItem("kanape"));
       console.log(myBasket);
        //si le panier n'existe pas, on le créé et on le met dans storage
        if (myBasket==null) { 
            myBasket = []; 
            localStorage.setItem("kanape", JSON.stringify(myBasket));  
        } 
            //on cherche même id et même couleur
            const findProduct = myBasket.find((el) => el.id === idProduct && el.color === kanape.color);
            console.log(findProduct);
            //si ce produit existe 
            if (findProduct) {   
              //on montre la quantité = quantité.value+ panier.quantité                                          
              let newQuantity = Number(kanapQuantity) + findProduct.quantity;   
              findProduct.quantity = newQuantity; 
              localStorage.setItem("kanape", JSON.stringify(myBasket));
              }
              else {  
              // sinon, ajout du canapé au panier et on met le panier dans storage
              myBasket.push(kanape); 
              localStorage.setItem("kanape", JSON.stringify(myBasket)); 
            }
      } 
    else {
      alert("merci de choisir une couleur");
    }
} 
else {
    alert('merci de choisir une quantité entre 1-100');
}
};

/*****************version 2************ *//*
if (kanapQuantity > 0 && kanapQuantity <= 100) { 
 // myBasket.push(kanape); // ajout du canapé au panier
  //localStorage.setItem("myBasket", JSON.stringify(myBasket)); 
}
if (kanape.color != "") {
      alert('Couleur est selectionnée');
      let myBasket = JSON.parse(localStorage.getItem("myBasket")) //on récupère le panier

      // Si même produit/couleur est déjà dans le localStorage
      const findProduct = myBasket.find((el) => el.id === idProduct && el.color === kanape.color);

if (myBasket!==null) { 
              //si le panier n'existe pas

              myBasket = []; // création du panier
             // myBasket.push(kanape); // ajout du canapé au panier
              localStorage.setItem("myBasket", JSON.stringify(myBasket)); //on met le panier dans storage        
          } 
      if (findProduct) {       
        //si ce produit existe, on montre la quantité.  
        let newQuantity = Number(kanapQuantity) + Number(findProduct.quantity); 
        //on calcul la quantité pour qu'elle soit égal à la quantité de canapé (1-100)
        const updatedResult = myBasket.map((el) => {
          if (el && el.id === idProduct && el.color === kanape.color) {              
              el.quantity = newQuantity;
          }
        });
        
        //si la quantité est entre 1-100, on met le panier dans storage
        if (newQuantity > 0 && newQuantity <= 100) { 
          myBasket.push(kanape);
            localStorage.setItem("myBasket", JSON.stringify(updatedResult)); 
        }
       else {
        
          //sinon, message   TRAVAILLER ICI
          //alert(`Vous avez déjà choisi ${quantity.value} produits de ce type`)
          alert ('Vous avez déjà choisi ce type de produit, merci de selcetionner une quantité entre 1-100');
        }     
    
       
        // si ce produit n'existe pas, on met le panier dans storage ...
        if (kanapQuantity > 0 && kanapQuantity <= 100) { 
          myBasket.push(kanape); // ajout du canapé au panier
          localStorage.setItem("myBasket", JSON.stringify(myBasket)); 
        }
        else {
          alert ('Veuillez selectionner une quantité entre 1 et 100');
        }          
      
  }else {
    alert("merci de choisir une couleur");
  }

  console.table(localStorage.getItem("myBasket"))
};

//****************Version 2*****/

// si la quantité est entre 1 et 100
 /*
 if (Number(kanapQuantity) > 0 && Number(kanapQuantity) <= 100) { 
  alert(`L'ajout de quantité ${quantity.value} a été pris en compte`);
    //si la couleur est choisie
    if (kanape.color != "") { 
        //alert('couleur ok');
        let myBasket = JSON.parse(localStorage.getItem("myBasketTest"));//on récupère le panier
       // console.log('myBasket ', myBasket);

        if (myBasket==null) { 
            //si le panier n'existe pas, on le créé
            myBasket = []; 
            //myBasket.push(kanape); // ajout du canapé au panier
            localStorage.setItem("myBasketTest", JSON.stringify(myBasket)); //on met le panier dans storage 

        } 
            //on cherche même id et même couleur
            console.log(myBasket)
            const findProduct = myBasket.find((el) => el.id === idProduct && el.color === kanape.color);
            //si ce produit existe 
            if (findProduct) {   
              //on montre la quantité = quantité.value+ panier.quantité                                          
              let newQuantity = Number(kanapQuantity) + findProduct.quantity;   
              findProduct.quantity = newQuantity; 
              console.log(newQuantity)
              // on met le panier dans storage      
              //localStorage.setItem("kanape", JSON.stringify(myBasket))
            }
            else {  
              // sinon 
              myBasket.push(kanape); // ajout du canapé au panier
              localStorage.setItem("myBasketTest", JSON.stringify(myBasket)); //on met le panier dans storage
            }
      } 
    else {
      alert("merci de choisir une couleur");
    }
} 
else {
    alert('merci de choisir une quantité entre 1-100');
}


};*/
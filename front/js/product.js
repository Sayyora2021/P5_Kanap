//pour recuperer l'id existant
const idProduct = new URLSearchParams(window.location.search).get('id');
const itemImg = document.querySelector('.item__img');

//const itemContent = document.querySelector('.item__content');

//pour recuperer le produit
fetch(`http://localhost:3000/api/products/${idProduct}`)
  .then((response) => response.json())
  .then((product) => {
    

//fonction qui a img,title,price, description, loop-color
  //function display (product){
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
 
//creation de bouton
const button =document.getElementById('addToCart')


//creation de fonction button
button.addEventListener("click", buttonClick)

function buttonClick(){
  
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
 /*localStorage.setItem("kanape", JSON.stringify("myBasket"));*/
 //window.location.href = "cart.html"
 console.log(kanape);
 
 //condition qui affishe les objets sélectionnés 
 if(Number (kanapQuantity) >0 && Number (kanapQuantity) <=100){ // si la quantité est entre 1 et 100
	alert("quantity ok");
	
  if (kanape.color != ""){ //si la couleur est choisie
		alert('couleur ok');
		let myBasket = JSON.parse(localStorage.getItem("myBasket"))//on récupère le panier

		if (myBasket == null){ //si le panier n'existe pas
			myBasket = []; // création du panier
			myBasket.push(kanape); // ajout du canapé au panier
			localStorage.setItem("myBasket", JSON.stringify(myBasket)); //on met le panier dans storage
		
    }	else {  // sinon 
      let flagId = false; 
const findProduct = myBasket.find((el) =>el.id === idProduct && el.color === kanape.color)
if (findProduct){
  let newQuantity = Number (kanapQuantity)  + findProduct.quantity;
  findProduct.quantity = newQuantity;
 console.log(findProduct)
 localStorage.setItem("myBasket", JSON.stringify(myBasket))
}


			myBasket.push(kanape); // ajout du canapé au panier
			localStorage.setItem("myBasket", JSON.stringify(myBasket)); //on met le panier dans storage
		
    } 
 	} else {
		alert("merci de choisir une couleur");
	} 
}else{
	alert('merci de choisir une quantité');
}
//test pour savoir si le produit est déjà dans le panier on modifie la quantité et on remet le panier dans storage
// si il n'est pas dans le panier dans storage
//si même id et même couleur, montrer la quantité

/*for (const item of myBasket){
if (item.id == kanape.id && item.color == kanape.color)
kanape.quantity+=1
console.log('kanap ok')
}
//---------TEST-----------
let myBasket = JSON.parse(localStorage.getItem("kanape"))
let flagId = false; 
for (let i in myBasket){
  if(myBasket[i].id== idProduct && myBasket[i].color == color){
myBasket[i].quantity = parseInt(myBasket[i].quantity) +parseInt.quantity;
flagId = true
  }
}
/*
  myBasket.push(kanape); // ajout du canapé au panier
     localStorage.setItem("myBasket", JSON.stringify(myBasket)); // on remet dans storage
     }for (const item of myBasket){
         if (item.id == kanape.id && item.color == kanape.color)
        item.quantity+kanapQuantity
        console.log('kanap ok')
      }

//si le panier n'est pas vide, redirect sur la page d'accueil
/*if(i == 0, i<=myBasket){
  console.log('montrez le panier')
  //window.location.href = "index.html"
}*/
     
       

    };
       







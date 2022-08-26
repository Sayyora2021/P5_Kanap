/*
//récupérer le panier sélectionné depuis localStorage
const giveFromStorage = JSON.parse(localStorage.getItem("myBasket"));
console.log(giveFromStorage);



let totalQuantity = 0;
let totalPrice = 0;

giveFromStorage.forEach((value)=> displayItem (value));



function displayItem(value) {


//for (let value of giveFromStorage){

  //calcule de quantity total, on prend 0 += quantity. Il prend la quantity total de localStorage
  displayQuantity();

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
 console.log(numberInput)

 
 numberInput.addEventListener("change",() => updPriceQuantity(value.id, numberInput.value))
 function updPriceQuantity(id, newValue){
  console.log(id) 
  const itemProduct = giveFromStorage.find(value => value.id === id);
  itemProduct.quantity = Number (newValue)
  displayQuantity ()
 }

 //function (updQtyPrice) { }

  
 // assign qui copie les valeurs d'un objet qui est énuméarble sur un autre objet cible.
 /*Object.assign(numberInput, {
  min: 1,
  max: 100,
 })*/

/*
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
*/


//************version avec dataset************************** */

//récupérer id avec map
/*let kanaps = addBasket.map(element =>{
  return element.id 
})
console.log(kanaps);*/
/*
const page = document.location.href;

// appel de la ressource API
if(page.match("cart")) {
  fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((product) => {
console.log(product)

//appel à la fonction d'affichage le panier
getProduct (product)
})
}else{
  console.log("sur page confirmation");
}


//fonction qui determine l'affichage des produits du panier
function getProduct (index){
  //on récupère le panier
  const basket = JSON.parse(localStorage.getItem("myBasket"));
  //si le pnaier est différent de 0 ou supérieur de 0
  if (basket && basket.length !=0) {
//valeur de API et du panier grace à l'id du localStorage
    for(let item of basket){
      console.log(item)
      for (let i =0, b = index.length; i <b; i++){
     //création et ajout des valeurs qui vont servir pour les valeurs dataset
        if (item._id === index[i]._id){
          item.name = index[i].name;
          item.price = index[i].price;
          item.image = index[i].imageUrl;
          item.alt = index[i].altTxt;
          item.description = index[i].description;
          
        }
      }
    }
    affiche(basket);
  }else{
    //si le panier est vide on crée un H1 informatif
    document.querySelector('#totalQuantity').innerHTML="0";
    document.querySelector('#totalPrice').innerHTML="0";
    document.querySelector('h1').innerHTML="Vous n'avez pas d'article dans votre panier";
  }
  //les fonctions de quantité et suppression en attente
  totalQuantity();
  deleteItem();
}
//fonction pour afficher le panier (tableau)
function affiche (items){
  //la zone d'affichage
  let getBasket = document.querySelector ('#cart__items');
  getBasket.innerHTML +=items.map((item)=>
   `<article class="cart__item" data-id="${item._id}" data-color="${item.color}" data-quantité ="${item.quantity}" data-price ="${item.price}">
  <div class="cart__item__img">
    <img src="${item.image}" alt="${item.alt}">
  </div>
  <div class="cart__item__content">
    <div class="cart__item__content__description">
      <h2>${item.name}</h2>
      <span> couleur :${item.color}</span>
      <p>data-price ="${item.price}"</p>
    </div>
    <div class="cart__item__content__settings">
      <div class="cart__item__content__settings__quantity">
        <p>Qté : </p>
        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${item.quanitity}">
      </div>
      <div class="cart__item__content__settings__delete">
        <p class="deleteItem"data-id="${item._id}" data-color ="${item.color}">Supprimer</p>
      </div>
    </div>
  </div>
</article> `
  ).join("") //remplace les virgules par vide
  totalProduct()//attend la modification de quantité
}

function totalQuantity(){
  const cart = document.querySelectorAll(".cart__item");
//on regarde ce qu'il se passe dans quantité de l'article concerné
cart.forEach((cart)=>{
  cart.addEventListener("change", (e)=>{
    //vérification d'information de la valeur du clic sur 
    let basket = JSON.parse(localStorage.getItem("myBasket"));
    for (kanap of basket)
    if(
      kanap._id ===cart.dataset.id &&
      cart.dataset.color === kanap.color
    ){
      kanap.quantity = e.target.value;
      localStorage.myBasket=JSON.stringify(basket);
      //on met à jour le dataset
      cart.dataset.quantity = e.target.value;

      totalProduct()
    }
  })
})

}

function totalProduct(){
  let totalQuantity =0;


  let totalPrice=0;
  const cart =document.querySelectorAll(".cart__item");

  cart.forEach((cart)=>{
    totalQuantity+= JSON.parse(cart.dataset.quantity);

    totalPrice+= cart.dataset.quantity * cart.dataset.price;
  });
  document.getElementById("totalQuantity").textContent =totalQuantity;

  document.getElementById("totalPrice").textContent = totalPrice;
}

function deleteItem(){
  const cartDelete = document.querySelectorAll(".cart__item .deleteItem");
  cartDelete.forEach ((cartDelete)=>{
    cartDelete.addEventListener("click", ()=>{
      let basket = JSON.parse (localStorage.getItem("myBasket"))
      if(
        basket[d]._id ===cartDelete.dataset.id &&
        basket[d].color === cartDelete.dataset.color
      ){
        const num = [d];

        let newBasket =JSON.parse(localStorage.getItem("myBasket"));

        newBasket.splice(num, 1);

        if(newBasket && newBasket.length ==0){

          document.querySelector("#totalQuantity").innerHTML="0";
          document.querySelector("#totalPrice").innerHTML="0";
          document.querySelector("h1").innerHTML=
          "Vous n'avez pas d'article dans votre panier.";
        }
        localStorage.myBasket = JSON.stringify(newBasket);
        totalProduct();
        return location.reload();
      }
    })
  })
}

if (page.match("cart")) {
  var contactClient = {};
  localStorage.contactClient = JSON.stringify(contactClient);
  // voir https://cheatography.com/davechild/cheat-sheets/regular-expressions/
  /* regex email stackoverflow (?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]) */
  /* équivalent en javascript à  	
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ */
  // équivalent pour w3c /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  // on pointe des éléments input, on attribut à certains la même classe, ils régiront pareil aux différantes regex
  // on pointe les input nom prénom et ville 
  /*
  var prenom = document.querySelector("#firstName");
  prenom.classList.add("regex_texte");
  var nom = document.querySelector("#lastName");
  nom.classList.add("regex_texte");
  var ville = document.querySelector("#city");
  ville.classList.add("regex_texte");
  // on pointe l'input adresse
  var adresse = document.querySelector("#address");
  adresse.classList.add("regex_adresse");
  // on pointe l'input email
  var email = document.querySelector("#email");
  email.classList.add("regex_email");
  // on pointe les élément qui ont la classe .regex_texte
  var regexTexte = document.querySelectorAll(".regex_texte");
  // modification du type de l'input type email à text à cause d'un comportement de l'espace blanc non voulu vis à vis de la regex 
  document.querySelector("#email").setAttribute("type", "text");
}
//--------------------------------------------------------------
//regex 
//--------------------------------------------------------------
// /^ début regex qui valide les caratères a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ aussi les espaces blancs et tiret \s- comprit entre 1 et 31 caratères (nombre de caractère maximum sur carte identité) {1,31} et on termine la regex $/i en indiquant que les éléments selectionnés ne sont pas sensible à la casse
let regexLettre = /^[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ\s-]{1,31}$/i;
// /^ début regex qui valide les caratères chiffre lettre et caratères spéciaux a-z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ aussi les espaces blancs et tiret \s- comprit entre 1 et 60 caratères (nombre de caractère maximum sur carte identité) {1,60} et on termine la regex $/i en indiquant que les éléments selectionnés ne sont pas sensible à la casse
let regexChiffreLettre = /^[a-z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ\s-]{1,60}$/i;
let regValideEmail = /^[a-z0-9æœ.!#$%&’*+/=?^_`{|}~"(),:;<>@[\]-]{1,60}$/i;
let regMatchEmail = /^[a-zA-Z0-9æœ.!#$%&’*+/=?^_`{|}~"(),:;<>@[\]-]+@([\w-]+\.)+[\w-]{2,4}$/i;
//--------------------------------------------------------------
// Ecoute et attribution de point(pour sécurité du clic) si ces champs sont ok d'après la regex
//--------------------------------------------------------------
if (page.match("cart")) {
  regexTexte.forEach((regexTexte) =>
    regexTexte.addEventListener("input", (e) => {
      // valeur sera la valeur de l'input en dynamique
      valeur = e.target.value;
      // regNormal sera la valeur de la réponse regex, 0 ou -1
      let regNormal = valeur.search(regexLettre);
      if (regNormal === 0) {
        contactClient.firstName = prenom.value;
        contactClient.lastName = nom.value;
        contactClient.city = ville.value;
      }
      if (
        contactClient.city !== "" &&
        contactClient.lastName !== "" &&
        contactClient.firstName !== "" &&
        regNormal === 0
      ) {
        contactClient.regexNormal = 3;
      } else {
        contactClient.regexNormal = 0;
      }
      localStorage.contactClient = JSON.stringify(contactClient);
      couleurRegex(regNormal, valeur, regexTexte);
      valideClic();
    })
  );
}
//------------------------------------
// le champ écouté via la regex regexLettre fera réagir, grâce à texteInfo, la zone concernée
//------------------------------------
texteInfo(regexLettre, "#firstNameErrorMsg", prenom);
texteInfo(regexLettre, "#lastNameErrorMsg", nom);
texteInfo(regexLettre, "#cityErrorMsg", ville);
//--------------------------------------------------------------
// Ecoute et attribution de point(pour sécurité du clic) si ces champs sont ok d'après la regex
//--------------------------------------------------------------
if (page.match("cart")) {
  let regexAdresse = document.querySelector(".regex_adresse");
  regexAdresse.addEventListener("input", (e) => {
    // valeur sera la valeur de l'input en dynamique
    valeur = e.target.value;
    // regNormal sera la valeur de la réponse regex, 0 ou -1
    let regAdresse = valeur.search(regexChiffreLettre);
    if (regAdresse == 0) {
      contactClient.address = adresse.value;
    }
    if (contactClient.address !== "" && regAdresse === 0) {
      contactClient.regexAdresse = 1;
    } else {
      contactClient.regexAdresse = 0;
    }
    localStorage.contactClient = JSON.stringify(contactClient);
    couleurRegex(regAdresse, valeur, regexAdresse);
    valideClic();
  });
}
//------------------------------------
// le champ écouté via la regex regexChiffreLettre fera réagir, grâce à texteInfo, la zone concernée
//------------------------------------
texteInfo(regexChiffreLettre, "#addressErrorMsg", adresse);
//--------------------------------------------------------------
// Ecoute et attribution de point(pour sécurité du clic) si ce champ est ok d'après les regex
//--------------------------------------------------------------
if (page.match("cart")) {
  let regexEmail = document.querySelector(".regex_email");
  regexEmail.addEventListener("input", (e) => {
    // valeur sera la valeur de l'input en dynamique
    valeur = e.target.value;
    // https://webdevdesigner.com/q/what-characters-are-allowed-in-an-email-address-65767/ mon adresse doit avoir cette forme pour que je puisse la valider
    let regMatch = valeur.match(regMatchEmail);
    // quand le resultat sera correct, le console log affichera une autre réponse que null; regValide sera la valeur de la réponse regex, 0 ou -1
    let regValide = valeur.search(regValideEmail);
    if (regValide === 0 && regMatch !== null) {
      contactClient.email = email.value;
      contactClient.regexEmail = 1;
    } else {
      contactClient.regexEmail = 0;
    }
    localStorage.contactClient = JSON.stringify(contactClient);
    couleurRegex(regValide, valeur, regexEmail);
    valideClic();
  });
}
//------------------------------------
// texte sous champ email
//------------------------------------
if (page.match("cart")) {
  email.addEventListener("input", (e) => {
    // valeur sera la valeur de l'input en dynamique
    valeur = e.target.value;
    let regMatch = valeur.match(regMatchEmail);
    let regValide = valeur.search(regValideEmail);
    // si valeur est toujours un string vide et la regex différante de 0 (regex à -1 et le champ est vide mais pas d'erreur)
    if (valeur === "" && regMatch === null) {
      document.querySelector("#emailErrorMsg").textContent = "Veuillez renseigner votre email.";
      document.querySelector("#emailErrorMsg").style.color = "white";
      // si valeur n'est plus un string vide et la regex différante de 0 (regex à -1 et le champ n'est pas vide donc il y a une erreur)
    } else if ( regValide !== 0) {
      document.querySelector("#emailErrorMsg").innerHTML = "Caractère non valide";
      document.querySelector("#emailErrorMsg").style.color = "white";
      // pour le reste des cas (quand la regex ne décèle aucune erreur et est à 0 peu importe le champ vu qu'il est validé par la regex)
    } else if (valeur != "" && regMatch == null) {
      document.querySelector("#emailErrorMsg").innerHTML = "Caratères acceptés pour ce champ. Forme email pas encore conforme";
      document.querySelector("#emailErrorMsg").style.color = "white";
    } else {
      document.querySelector("#emailErrorMsg").innerHTML = "Forme email conforme.";
      document.querySelector("#emailErrorMsg").style.color = "white";
    }
  });
}
//--------------------------------------------------------------
// fonction couleurRegex qui modifira la couleur de l'input par remplissage tapé, aide visuelle et accessibilité
//--------------------------------------------------------------
// on détermine une valeur de départ à valeur qui sera un string
let valeurEcoute = "";
// fonction à 3 arguments réutilisable, la regex, la valeur d'écoute, et la réponse à l'écoute
function couleurRegex(regSearch, valeurEcoute, inputAction) {
  // si valeur est toujours un string vide et la regex différante de 0 (regex à -1 et le champ est vide mais pas d'erreur)
  if (valeurEcoute === "" && regSearch != 0) {
    inputAction.style.backgroundColor = "white";
    inputAction.style.color = "black";
    // si valeur n'est plus un string vide et la regex différante de 0 (regex à -1 et le champ n'est pas vide donc il y a une erreur)
  } else if (valeurEcoute !== "" && regSearch != 0) {
    inputAction.style.backgroundColor = "rgb(220, 50, 50)";
    inputAction.style.color = "white";
    // pour le reste des cas (quand la regex ne décèle aucune erreur et est à 0 peu importe le champ vu qu'il est validé par la regex)
  } else {
    inputAction.style.backgroundColor = "rgb(0, 138, 0)";
    inputAction.style.color = "white";
  }
}
//--------------------------------------------------------------
// fonction d'affichage individuel des paragraphes sous input sauf pour l'input email
//--------------------------------------------------------------
function texteInfo(regex, pointage, zoneEcoute) {
      if (page.match("cart")) {
      zoneEcoute.addEventListener("input", (e) => {
      // valeur sera la valeur de l'input en dynamique
      valeur = e.target.value;
      index = valeur.search(regex);
    // si valeur est toujours un string vide et la regex différante de 0 (regex à -1 et le champ est vide mais pas d'erreur)
      if (valeur === "" && index != 0) {
        document.querySelector(pointage).textContent = "Veuillez renseigner ce champ.";
        document.querySelector(pointage).style.color = "white";
        // si valeur n'est plus un string vide et la regex différante de 0 (regex à -1 et le champ n'est pas vide donc il y a une erreur)
      } else if (valeur !== "" && index != 0) {
        document.querySelector(pointage).innerHTML = "Reformulez cette donnée";
        document.querySelector(pointage).style.color = "white";
        // pour le reste des cas (quand la regex ne décèle aucune erreur et est à 0 peu importe le champ vu qu'il est validé par la regex)
      } else {
      document.querySelector(pointage).innerHTML = "Caratères acceptés pour ce champ.";
      document.querySelector(pointage).style.color = "white";
      }
    });
  }
}
//--------------------------------------------------------------
// Fonction de validation/d'accés au clic du bouton du formulaire
//--------------------------------------------------------------
let commande = document.querySelector("#order");
// la fonction sert à valider le clic de commande de manière interactive
function valideClic() {
  let contactRef = JSON.parse(localStorage.getItem("contactClient"));
  let somme =
    contactRef.regexNormal + contactRef.regexAdresse + contactRef.regexEmail;
  if (somme === 5) {
    commande.removeAttribute("disabled", "disabled");
    document.querySelector("#order").setAttribute("value", "Commander !");
  } else {
    commande.setAttribute("disabled", "disabled");
    document.querySelector("#order").setAttribute("value", "Remplir le formulaire");
  }
}
//----------------------------------------------------------------
// Envoi de la commande
//----------------------------------------------------------------
if (page.match("cart")) {
  commande.addEventListener("click", (e) => {
    // empeche de recharger la page on prévient le reload du bouton
    e.preventDefault();
    valideClic();
    envoiPaquet();
  });
}
//----------------------------------------------------------------
// fonction récupérations des id puis mis dans un tableau
//----------------------------------------------------------------
// définition du panier quine comportera que les id des produits choisi du local storage
let panierId = [];
function tableauId() {
// appel des ressources
let panier = JSON.parse(localStorage.getItem("panierStocké"));
// récupération des id produit dans panierId
if (panier && panier.length > 0) {
  for (let indice of panier) {
    panierId.push(indice._id);
  }
} else {
  console.log("le panier est vide");
  document.querySelector("#order").setAttribute("value", "Panier vide!");
}
}
//----------------------------------------------------------------
// fonction récupération des donnée client et panier avant transformation
//----------------------------------------------------------------
let contactRef;
let commandeFinale;
function paquet() {
  contactRef = JSON.parse(localStorage.getItem("contactClient"));
  // définition de l'objet commande
  commandeFinale = {
    contact: {
      firstName: contactRef.firstName,
      lastName: contactRef.lastName,
      address: contactRef.address,
      city: contactRef.city,
      email: contactRef.email,
    },
    products: panierId,
  };
}
//----------------------------------------------------------------
// fonction sur la validation de l'envoi
//----------------------------------------------------------------
function envoiPaquet() {
  tableauId();
  paquet();
  // vision sur le paquet que l'on veut envoyer
  console.log(commandeFinale);
  let somme = contactRef.regexNormal + contactRef.regexAdresse + contactRef.regexEmail;
  // si le panierId contient des articles et que le clic est autorisé
  if (panierId.length != 0 && somme === 5) {
    // envoi à la ressource api
    fetch("http://localhost:3000/api/products/order", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commandeFinale),
    })
      .then((res) => res.json())
      .then((data) => {
        // envoyé à la page confirmation, autre écriture de la valeur "./confirmation.html?commande=${data.orderId}"
        window.location.href = `/front/html/confirmation.html?commande=${data.orderId}`;
      })
      .catch(function (err) {
        console.log(err);
        alert("erreur");
      });
  }
}
//------------------------------------------------------------
// fonction affichage autoinvoquée du numéro de commande et vide du storage lorsque l'on est sur la page confirmation
//------------------------------------------------------------
(function Commande() {
  if (page.match("confirmation")) {
    sessionStorage.clear();
    localStorage.clear();
    // valeur du numero de commande
    let numCom = new URLSearchParams(document.location.search).get("commande");
    // merci et mise en page
    document.querySelector("#orderId").innerHTML = `<br>${numCom}<br>Merci pour votre achat`;
    console.log("valeur de l'orderId venant de l'url: " + numCom);
    //réinitialisation du numero de commande
    numCom = undefined;
  } else {
    console.log("sur page cart");
  }
})();
*/ 
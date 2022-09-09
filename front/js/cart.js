///récupérer le panier sélectionné depuis localStorage
const giveFromStorage = JSON.parse(localStorage.getItem("myBasketTest"));
console.log(giveFromStorage);
if(giveFromStorage ===null){
  alert ("Merci de choisir un produit")
}else{
  if(giveFromStorage.length ===0){
    console.log("Merci de rajouter un produit");
  } else{
  let totalQuantity = 0;
  let totalPrice = 0;
  
  
  //boucle qui récupère tous les éléments de panier et met dans la fonction displayItem 
  giveFromStorage.forEach((value) => displayItem(value));
  
  function displayItem(value) {
  
  
    //calcule de quantity total, on prend 0 += quantity de total de localStorage
    totalQuantity += value.quantity;
    let totalQte = document.getElementById("totalQuantity");
    totalQte.textContent = totalQuantity;
  
  
    fetch(`http://localhost:3000/api/products/${value.id}`)
      .then((response) => response.json())
      .then((data) => {
  
  
        //le calcule du prix total
        totalPrice += value.quantity * data.price;
        let totalPriceElement = document.getElementById("totalPrice");
        totalPriceElement.textContent = totalPrice;
  
        //récuperation de la section item by id
        const sectionItem = document.getElementById('cart__items')
  
  
        //création d'article avec data-id & data-color, on donne value =>produit du panier
        const article = document.createElement("article");
        article.classList.add("cart__item")
        article.setAttribute("data-id", value.id)
        article.setAttribute("data-color", value.color)
  
       
        let divImg = document.createElement("div");
        divImg.classList.add("cart__item__img");
  
  
        //récupérer l'image avec fetch localStorage
        const image = document.createElement("img");
        image.src = data.imageUrl;
        image.alt = data.altTxt;
  
  
        //création de div-item-content
        let divContent = document.createElement('div');
        divContent.classList.add("cart__item__content");
  
  
        //récupérer le div+ description
        let divDescrip = document.createElement("div");
        divDescrip.classList = ("cart__item__content__description");
  
  
        //récupérer h2+ le nom du canapé
        let text = document.createElement("h2");
        text.textContent = data.name;
  
  
        //récupérer la couleur (avec localStorage)
        let pcolor = document.createElement("p")
        pcolor.textContent = value.color;
  
  
        //récupérer le prix avec fetch(product)
        let price = document.createElement("p");
        price.textContent = data.price;
  
  
        //création de setting pour la quantité
        let setting = document.createElement("div");
        setting.classList.add("cart__item__content__settings");
  
        //création de div pour la quantité
        let dquantity = document.createElement("div");
        dquantity.classList.add("cart__item__content__settings__quantity");
  
  
        // le paragraphe de Qté
        let quantite = document.createElement("p");
        quantite.innerHTML = "Qté:";
  
  
        //------------- BTN POUR VALIDER LE PRIX ET LA QUANTITE---------------
        //creation d' input 
        let numberInput = document.createElement('input');
        numberInput.type = "number";
        numberInput.class = "itemQuantity";
        numberInput.name = "itemQuantity";
        numberInput.min = "1";
        numberInput.max = "100";
        numberInput.value = value.quantity;
        //console.log(numberInput.value)
  
  
        //bouton pour changer la quantité et mettre à jour le prix et total quantité
        //création de bouton avec "change" pour qu'il modifie le prix et la quantité sur les valeurs id et quantité
        numberInput.addEventListener("change", () => updPriceQuantity(value.id, numberInput.value))
        function updPriceQuantity(id, newValue) {
          console.log(newValue)
          console.log(id)
          //trouver le canapé dans le panier
          const itemUpd = giveFromStorage.find((item) => item.id === id && item.color === value.color)
          console.log(giveFromStorage)
          // la quantité du panier est égale nouvelle valeur
          if(itemUpd.quantity <0 && itemUpd.quantity >100){
            itemUpd.quantity = Number(newValue)
          }
          else{
            alert("Merci de choisir la quantité entre 1 et 100")
          }
          //itemUpd.quantity = Number(newValue)
          console.log(giveFromStorage)
          //modfier le panier
          //remettre le panier en storage
          //raffraichir la page
          localStorage.setItem("myBasketTest", JSON.stringify(giveFromStorage));
          location.reload();
        };
  
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
        //affichage de delete
        let setDelete = document.createElement('div');
        setDelete.classList.add("cart__item__content__settings__delete");
        setting.appendChild(setDelete);
  
        let pDelete = document.createElement('p');
        pDelete.classList.add("deleteItem");
        setDelete.appendChild(pDelete);
        pDelete.textContent = 'Supprimer';
  
  
        //création du bouton fonction avec les éléments de l'objet
        pDelete.addEventListener("click", () => deleteSetting(value.id, value.color));
     
        //fonction commence ici
        function deleteSetting() {
          console.log(value.id);
          console.log(value.color);
          //trouver l'index de produit du panier qu'on veut supprimer
          let itemDelete = giveFromStorage.findIndex((item) => item.id === value.id && item.color === value.color);
          console.log(itemDelete);
          //pour supprimer 1 objet on utilise splice qui modifie le tableau, on met index et 1 pour supprimer 1 élément
          giveFromStorage.splice(itemDelete, 1)
          console.log(giveFromStorage)
          //on remet le localStorage pour qu'il affiche ce qui reste
          localStorage.setItem("myBasketTest", JSON.stringify(giveFromStorage));
          //on recharge la page d'affichage 
          location.reload();
  
        }
      }
      )
  }

  //---------------- FORMULAIRE------------------------------
//creation de formulaire(voir les elements: name, address etc)
const page = document.location.href;
let form = document.querySelector('.cart__order__form');
console.log(form.elements);

//bouton de validation avec les conditions, après le control regex
form.addEventListener('submit', inputContact);

function inputContact(e) {
  e.preventDefault()
  //si le panier est vide, alert
  if (giveFromStorage.length === 0) {
    alert("Choisissez un produit svp");
  }else{
    const ids = idInCart(giveFromStorage);

    //création request d'objet contact et array de produit
      const contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      city: city.value,
      email: email.value,
  
    };
    console.log(contact);
    postFetch(contact, ids)
  }
  
};



function controlForm(valide) {
  //les rejex: j'accepte les lettres de a-z, miniscule et maj, les accents, 
  //le - pour les noms composés, de 3 à 31 mots (commence par "/^" et termine par "$/"")
  const regex = /^[a-zA-Záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ\s-]{1,31}$/
  const regexAddress = /^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ\s-]{1,60}$/
  const regexEmail = /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-z]{2,4}$/


  //si erreur afficher message d'erreur, sinon accepter les données
  if (!regex.test(document.getElementById('firstName').value)) {
    document.getElementById('firstNameErrorMsg').textContent = "Veuillez rentrer un prénom valide.";
    valide.push("Prénom") //si erreur précise d'où vient
  } else {
    document.getElementById('firstNameErrorMsg').textContent = "";
  }
  if (!regex.test(document.getElementById('lastName').value)) {
    document.getElementById('lastNameErrorMsg').textContent = "Veuillez rentrer un nom valide.";
    valide.push("Nom")
  } else {
    document.getElementById('lastNameErrorMsg').textContent = "";
  }
  if (!regexAddress.test(document.getElementById('address').value)) {
    document.getElementById('addressErrorMsg').textContent = "Addresse invalide.";
    valide.push("Adresse")
  } else {
    document.getElementById('addressErrorMsg').textContent = "";
  }
  if (!regex.test(document.getElementById('city').value)) {
    document.getElementById('cityErrorMsg').textContent = "Ville invalide.";
    valide.push("Ville")
  } else {
    document.getElementById('cityErrorMsg').textContent = "";
  }
  if (!regexEmail.test(document.getElementById('email').value)) {
    document.getElementById('emailErrorMsg').textContent = "Email invalide.";
    valide.push("email")
  } else {
    document.getElementById('emailErrorMsg').textContent = "";
  };

};


//boucle pour identifier le id du panier 
function idInCart(giveFromStorage) {
  const ids = [];
  giveFromStorage.forEach((product) => {
    const id = product.id;
    ids.push(id);
    //console.log(ids);
  })
  return ids
};

// fonction fetch POST pour transformer un objet en id
function postFetch(contact, ids) {
  const dataUser = {
    contact: contact,
    products: ids
  }
  console.log(dataUser);

  //création d'un tableau qui affiche erreur si il y a
  const valide = [] //valide de fonction devient un tableau
  controlForm(valide);
  // si valide est différent de formulaire, alert
  if (valide != "") {
    console.log(valide)
    alert("Merci de vérifier le formulaire");
  }
  else {   
    fetch(`http://localhost:3000/api/products/order`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataUser),
    }
    )
      //la réponse doit renvoyer un oredrId
      .then((response) => response.json())
      .then((promise) => {
        console.log(promise);

        //adresse de la page + promesse.orderId
        document.location.href = "./confirmation.html?orderId=" + promise.orderId
      })

  }
}

};
};
























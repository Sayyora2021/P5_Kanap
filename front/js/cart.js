///récupérer le panier sélectionné depuis localStorage
const giveFromStorage = JSON.parse(localStorage.getItem("myBasket"));
//console.log(giveFromStorage);



let totalQuantity = 0;
let totalPrice = 0;


//boucle qui récupère tous les éléments de panier et met dans la fonction displayItem 
giveFromStorage.forEach((value) => displayItem(value));

function displayItem(value) {


  //for (let value of giveFromStorage){

  //calcule de quantity total, on prend 0 += quantity. Il prend la quantity total de localStorage
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

      //creation de div avec image
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



      //creation d' input 
      //let numberInput= document.querySelectorAll(".itemQuantity");
      let numberInput = document.createElement('input');
      numberInput.type = "number";
      numberInput.class = "itemQuantity";
      numberInput.name = "itemQuantity";
      numberInput.min = "1";
      numberInput.max = "100";
      numberInput.value = value.quantity;
      console.log(numberInput.value)



      numberInput.addEventListener("change", () => updPriceQuantity(value.id, numberInput.value))
      function updPriceQuantity(id, newValue) {
        console.log(newValue)
        console.log(id)
        //trouver le canapé dans le panier
        const itemUpd = giveFromStorage.find((item) => item.id === id && item.color === value.color)
        console.log(giveFromStorage)
        // la quantité du panier est égale nouvelle valeur
        itemUpd.quantity = Number(newValue)
        console.log(giveFromStorage)
        //modfier le panier
        //remettre le panier en storage
        //raffraichir la page
        localStorage.setItem("myBasket", JSON.stringify(giveFromStorage));
        location.reload();


      }



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
      deleteSetting(setting)
      let setDelete = document.createElement('div');
      setDelete.classList.add("cart__item__content__settings__delete");
      setting.appendChild(setDelete);

      let pDelete = document.createElement('p');
      pDelete.classList.add("deleteItem");
      setDelete.appendChild(pDelete);
      pDelete.textContent = 'Supprimer';

      //button click-on met sur supprimer, on crée une fonction avec les éléments de produit
      pDelete.addEventListener("click", (e) => deleteSetting(value.id, value.color));
      console.log(pDelete)
      //les éléments recréés: id et couleur
      function deleteSetting() {
        console.log(value.id);
        console.log(value.color);
       giveFromStorage.findIndex((item) => item.id === value.id && item.color === value.color);
       //giveFromStorage.splice(0)
      // localStorage.setItem("myBasket", JSON.stringify(giveFromStorage))
        
       
    }
  
        //trouver le produit du panier qu'on veut supprimer
       // let itemDelete = giveFromStorage.findIndex((item) => item.id === value.id && item.color === value.color);
        //console.log("itemDelete", itemDelete);
        //console.log(giveFromStorage)
        //pour supprimer 1 objet on utilise splice qui modifie le tableau
        //giveFromStorage.splice(itemDelete, 1)
        //localStorage.removeItem(itemDelete)
       
        //alert("Article supprimé")
        //localStorage.setItem("myBasket", JSON.stringify(giveFromStorage))

        /*function deleteItem(){
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
}*/



        //console.log('bouton supprimer');
      




      let messageError = document.getElementById('firstNameErrorMsg')
      console.log(messageError)

    }

    );


}

/*

const price = await fetch(`${product.price}`).then(price => price.json());
console.log(price)
/*function renderCartItems (price){
  let totalPrice =0,
  totalQuantity =0;

  cart.forEach((item)=> {
    totalPrice += item.price * item.id;
    totalQuantity += item.id
    console.log(item.id)
  })
 
totalQte.innerHTML = (`Total (${totalQuantity} article): ${totalPrice}`)
console.log(totalQte)
}


//récupérer id avec map
/*let kanaps = addBasket.map(element =>{
  return element.id 
})
console.log(kanaps);*/







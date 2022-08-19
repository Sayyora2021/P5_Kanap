//afficher le produit sélectionné depuis localStorage(il fonctionne pour tableau)
const giveFromStorage = JSON.parse(localStorage.getItem("myBasket"));
//console.table(giveFromStorage);






for (let value of giveFromStorage){
      console.log(value)
  fetch(`http://localhost:3000/api/products/${value.id}`)
  .then((response) => response.json())
  .then((product) => {
console.log(product);

//récuperation de la section item by id
const sectionItem = document.getElementById('cart__items')
console.log(sectionItem)

//création d'article avec data-id & data-color, on donne value =>produit du panier
const article = document.createElement("article");
console.log(article) 
article.classList.add("cart__item")
article.setAttribute("data-id", value.id)
article.setAttribute("data-color",value.color)
sectionItem.appendChild(article)


//creation de div avec image
let divImg = document.createElement("div");
divImg.classList.add("cart__item__img");
article.appendChild(divImg)
console.log(divImg); 


//creation d'image
let image = document.createElement("img");
image.src =product.imageUrl;
image.alt = product.altTxt;
divImg.appendChild(image)
console.log(image)


//création de div-item-content
let divContent = document.createElement('div');
divContent.classList.add("cart__item__content");
article.appendChild(divContent)
console.log(divContent);  

//récupérer le div+ description
let divDescrip = document.createElement("div");
divDescrip.classList = ("cart__item__content__description");
divDescrip.textContent= product.description;
divContent.appendChild(divDescrip);
console.log(divDescrip);  


//récupérer h2+ le nom du canapé
let text = document.createElement("h2");
text.textContent = product.name;
divDescrip.appendChild(text)
console.log(text);


//récupérer la couleur 
let pcolor = document.createElement("p")
pcolor.textContent= product.colors;
divContent.appendChild(pcolor);
console.log(pcolor)
/*const color = document.getElementById('colors');
 let couleur = product.value;
 console.log(couleur);*/

 let price = document.createElement("p");
 price.textContent = product.price;
 divContent.appendChild(price);
 console.log(price);
 })
}


//let dataId = document.getElementById("product-ID");
//console.log(dataId);
/*
//---------------------------------------nouveau code ici--------
//afficher les objets de panier TEST 
/*for (let i in giveFromStorage){
  console.log("les canapés sont dans le panier"+ giveFromStorage[i])
    console.log(giveFromStorage[i])
    //fetch(`http://localhost:3000/api/products/${giveFromStorage[i]}`)
  /*.then((response) => response.json())
  .then((product) => {
 }
 //)


/*ne fonctionne pas
function displayArticle(article){
  document.getElementById("cart__item").appendChild
  (article)
}
 function makeArticle (item){
  const article = document.createElement("article")
 
  return article
 }
makeArticle();
//--------------mon ancien code---------
/*



giveBasket()


function giveBasket (){

  //return addBasket
}*/
//----------------s'arrete ici--------------

//récupérer id avec map
/*let kanaps = addBasket.map(element =>{
  return element.id 
})
console.log(kanaps);




//récuperer un element de array
/*addBasket.forEach(element=>{
  console.log(element.id)
})
article = document.createElement("article");
items.appendChild(article);
a.appendChild(article);
/*



/*const panier =[]


giveBasket()
console.log(panier)
panier.forEach((item) => displayItems (item))

function giveBasket (){
  const numberOfItems = localStorage.length
for(let i=0; i< numberOfItems; i++){
  console.log(i)
  const item = localStorage.getItem(localStorage.key(i))
  console.log("objest est dans la position",i, "et", item)
  const itemObject = JSON.parse(item);
  panier.push(itemObject)
}

}

function displayItems (item){
  const article = makeArticle(item)
  displayArticle (article)
  console.log(article)
  const image = makeImage(item)

}




function makeImage(item){
  const div = document.createElement("div")
  div.classList.add("cart__item__img")
  const image = document.createElement("img")
  image.src = item.imageUrl
  image.alt = item.altTxt;
  div.appendChild(image)
  return image
}

/*function getData (){
  if (myBasket !== null){
    //si le panier n'est pas vide
    fetch(`http://localhost:3000/api/products/${idProduct}`)
  .then((response) => response.json())
  .then((product) => {
    const sectionItem = document.getElementById('cart__items')

    product.forEach((item) =>{
      myBasket.forEach((element)=>{
         if (element.id ===item.id){
let article = document.createElement("article")
article.classList.add("cart__item")
         }
      })
    })
    })
  }
}



*/



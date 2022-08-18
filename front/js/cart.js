//afficher le produit sélectionné depuis localStorage(il fonctionne pour tableau)
const giveFromStorage = JSON.parse(localStorage.getItem("myBasket"));
//console.table(giveFromStorage);

//récuperation de la section item by id
const sectionItem = document.getElementById('cart__items')
console.log(sectionItem)




for (let value of giveFromStorage){
      console.log(value)
  fetch(`http://localhost:3000/api/products/${value.id}`)
  .then((response) => response.json())
  .then((product) => {

//creation de div avec image
let div = document.querySelector("cart__item__img");
console.log(div);
let image = document.createElement("img");
image.src =product.imageUrl;
image.alt = product.altTxt;
//div.appendChild(image)
console.log(image)


//création d'article avec data-id & data-color
const article = document.querySelector("article");
console.log('article') //null
article.classList.add("cart__item")
article.setAttribute("data-id", value.id)
article.setAttribute("data-color",value.color)



//créationde div-item-content
let itemContent = document.querySelector('cart__item__content');
console.log(itemContent);  //null

let contentDescrip = document.querySelector("cart__item__content__description");
contentDescrip.textContent = (`${product.description}`);
console.log(contentDescrip);   //null

let text = document.querySelector("h2");
console.log(text)

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



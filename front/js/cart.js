//afficher le produit sélectionné depuis localStorage(il fonctionne pour tableau)
const giveFromStorage = JSON.parse(localStorage.getItem("myBasket"));
console.table(giveFromStorage);

let addBasket=[];
for (let i=0; i< giveFromStorage; i++){
  console.log(i)
  const item = localStorage.getItem(localStorage.key(i))
  console.log("objest est dans la position",i, "et", item)

}



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

function displayArticle(article){
  document.querySelector("#cart__item").appendChild
  (article)
}
 function makeArticle (item){
  const article = document.createElement("article")
  article.classList.add("cart__item")
  article.dataset.id = item.id
  article.dataset.color = item.color
  return article
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

/*



//const displayArticle = document.getElementById('cart__items')
//console.log("cart_items est là")
/*if(item.id === kanape.id && item.color === kanape.color)
  kanape.id



*/



//afficher le produit sélectionné depuis localStorage(il fonctionne pour tableau)
const giveFromStorage = JSON.parse(localStorage.getItem("myBasket"));
//console.table(giveFromStorage);

//récuperation de la section item by id
const sectionItem = document.getElementById('cart__items')
console.log(sectionItem)

//creation de panier
let cart=[]


//---------------------------------------nouveau code ici--------
//afficher les objets de panier TEST 
for (let i in giveFromStorage){
  console.log("les canapés sont dans le panier"+ giveFromStorage[i])
    console.log(giveFromStorage[i])
 }

const article = document.createElement("article");
console.log('article')
article.classList.add("cart__item")
console.log('cart__item')
let dataId = document.getElementById("product-ID");
console.log(dataId);

/*//ne fonctionne pas
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



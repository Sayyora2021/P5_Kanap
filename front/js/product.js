/*then(function(value) {
  // sessionStorage.setItem("data", JSON.stringify(value))
   displayItems(value)
   console.log(value)
   })*/
const idProduct = new URL(document.location).searchParams.get('id');
const item_img = document.querySelector(".item_img");


//pour recuperer le produit
fetch(`http://localhost:3000/api/products/${idProduct}`)
.then((response) =>response.json())
.then((product) =>{
const itemImg = document.querySelector(".item_img");
 

const imageKanap = document.createElement("img");
imageKanap.src = product.imageUrl;
imageKanap.alt= product.altTxt;
itemImg.appendChild(imageKanap);
})

//const displayProducts = (product)=> {
  


/*image = document.createElement("img");
image.src =product.imageUrl;
image.alt = product.altTxt;

//recuperation des elements existants dans HTML
/*const produitImage = document.querySelector(".item__img");
console.log(produitImage)



/*const produitPrice = document.querySelector(".item__content__titlePrice");
document.querySelector("item__content").appendChild("item__content__titlePrice")
console.log(produitPrice)

/*function handleData (canap1){
  const {altTxt, colors, description, imageUrl, name, price, _id} = canap1
}



//titre = document.createElement()

/*titre= document.createElement("h1");
titre.textContent = product.name;
items.appendChild (titre);


if(search_params.has('name')) {
  var name = search_params.get('name');
  console.log(name)
}sole.log(name);*/
//solution
/*const url = new URL(window.location.href);
const urlParams = new URLSearchParams(url.search);
console.log(urlParams);

let id = "";
if (urlParams.has("id")) {
  id = urlParams.get("id");
  console.log(id);
}*/

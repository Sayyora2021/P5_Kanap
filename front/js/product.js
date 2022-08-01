//recuperation et extraction de l'id
const queryString = window.location.href
const urlParams = new URLSearchParams (queryString)
const id = urlParams.get("id")
console.log(id)


//pour recuperer le produit
fetch(`http://localhost:3000/api/products/${id}`)
.then((response) =>response.json())
.then((res) =>console.log(res))

//recuperation des elements existants dans HTML
/*const produitImage = document.querySelector(".item__img");
console.log(produitImage)



/*let image = document.createElement("img");
image.src = ("http://localhost:3000/images/kanap01.jpeg");
document.querySelector(".item__img").appendChild(image)

/*const produitContent = document.querySelector(".item__content");
console.log(produitContent)


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

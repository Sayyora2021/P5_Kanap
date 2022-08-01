//variable = section  html #items
const itemsTag = document.getElementById("items")

// la fonction qui va récupérer les données de l'API
fetch("http://localhost:3000/api/products")
//récupération des données de lAPI dans response.json
.then((response) => response.json())
.then(function(value) {

 displayItems(value)
 console.log(value)
 })


// appel de la fonction d'affichage
const displayItems = function (value){

 for (let product of value){
   let a = document.createElement("a");
a.href = `./product.html?id=${product._id}`
itemsTag.appendChild(a);
console.log(a)

article = document.createElement("article");
items.appendChild(article);
a.appendChild(article);

titre= document.createElement("h3");
titre.className = "productName";
titre.textContent = product.name;

image = document.createElement("img");
image.src =product.imageUrl;
image.alt = product.altTxt;

let p = document.createElement("p");
p.className = "productDescription";
p.textContent = product.description;


article.appendChild(image);
article.appendChild(titre);
article.appendChild(p);
}
}
//innerHTML rècupère la section items avec les enfants
 /* items.innerHTML +=
  (`<a href="./product.html?id=${product._id}">
  <article> <img src="${product.imageUrl}" alt="$product.name">
  <h3 class='productName'>${product.name}</h3>
  <p class="productDescription">${product.description}</p>
</article></a>`);*/

//variable = section  html #items
const itemsTag = document.getElementById("items")

// la fonction qui va récupérer les données de l'API
//const getData = function(){
fetch("http://localhost:3000/api/products")
//récupération des données de lAPI dans response.json
.then((response) => response.json())
.then(function(value) {
// sessionStorage.setItem("data", JSON.stringify(value))
 displayItems(value)
 console.log(value)
 })
//}

// appel de la fonction d'affichage
const displayItems = function (value){
// items.innerHTML = ""
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
/*titre= document.createElement("h3");
titre.textContent = product.name;
article.appendChild (titre);

text = document.createElement("p");
text.productDescription = product.decsription;

image = document.createElement("img");
image.src =product.imageUrl;
article = document.createElement("article");
article.appendChild(image);
article.appendChild(titre);

items.appendChild(article);
 
/*if(sessionStorage.getItem("data") !== null){
const dataSession = JSON.parse(sessionStorage.getItem("data"));
console.log(dataSession)
displayItems(dataSession)
}
else{
 getData();
}*/

 

 /*function makeAnchor(id){
// création d'un element  
 const anchor = document.createElement("a")
 anchor.href = "./product.html?id=" + id
 return anchor
 }

 // on recupere la balise section
 const sectionId = document.getElementById('items')
console.log(sectionId)

 function appendChildren(anchor){
const items = document.querySelector("#items")
if (items != null){
 items.appendChild(anchor)
}
}
// On creer la balise a
let a = document.createElement('a')
// on creer l'attribut de la balise
a.setAttribute('href','./product.html?id=42')
// parent.appendChild('enfant')
sectionId.appendChild(a)


// On recupere les données dans un array
// On parcour se tableau
// Pour chaque produit
// on creer les balises et attribut adéquat

//InnertHtml
/*parent.innertHtml =  <a href="./product.html?id=42">
            <article>
            <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1"></img>
            <h3 class="productName">Kanap name1</h3>
            <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
          </article>
        </a> */
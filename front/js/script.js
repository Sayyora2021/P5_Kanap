//création de variable = section  html #items
const itemsTag = document.getElementById("items");

// pour récupérer les données de l'API, on utilise fetch avec un argument (URL de produit dans ce cas)
fetch("http://localhost:3000/api/products")
  //récupération des données de lAPI dans response.json
  .then((response) => response.json())
  .then(function (value) {

    //fonction reste à l'écout 
    displayItems(value)
    console.log(value)
  })


// appel de la fonction d'affichage
const displayItems = function (value) {

  //un boucle qui permet d'accéder et créer les éléments 
  for (let product of value) {
    let a = document.createElement("a");
    a.href = `./product.html?id=${product._id}`
    itemsTag.appendChild(a);
    console.log(a)
    //creation des elements existants
    article = document.createElement("article");
    items.appendChild(article);
    a.appendChild(article);

    titre = document.createElement("h3");
    titre.className = "productName";
    titre.textContent = product.name;

    image = document.createElement("img");
    image.src = product.imageUrl;
    image.alt = product.altTxt;

    let p = document.createElement("p");
    p.className = "productDescription";
    p.textContent = product.description;

    //inserer tous dans l'article
    article.appendChild(image);
    article.appendChild(titre);
    article.appendChild(p);
  }
};


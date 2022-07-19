//variable = section  html #items
//const itemsTag = document.getElementById("items")

// la fonction qui va récupérer les données de l'API
fetch("http://localhost:3000/api/products")
//récupération des données de lAPI dans response.json
.then((response) => response.json())
.then((data) => {
 console.log(data)
 return addProducts(data)
})

 function addProducts(data){
  //_id récupéré dépuis console
 const id = data[0]._id
 const anchor = makeAnchor(id)
 appendChildren (anchor)
 }
 function makeAnchor(id){
// création d'un element (img) 
 const anchor = document.createElement("a")
 anchor.href = "./product.html?id=" + id
 return anchor
 }

 function appendChildren(anchor){
const items = document.querySelector("#items")
if (items != null){
 items.appendChild(anchor)
}
}








 

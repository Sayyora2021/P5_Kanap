//pour recuperer l'id existant
const idProduct = new URL(document.location).searchParams.get('id');
const itemImg = document.querySelector('.item__img');

//const itemContent = document.querySelector('.item__content');

//pour recuperer le produit
fetch(`http://localhost:3000/api/products/${idProduct}`)
  .then((response) => response.json())
  .then((product) =>{
    const imageKanap = document.createElement('img');
    imageKanap.src = product.imageUrl;
    imageKanap.alt = product.altTxt;
    itemImg.appendChild(imageKanap);

    let kanapName = document.querySelector ('#title');
    kanapName.textContent = (`${product.name}`);

    let kanapPrice = document.querySelector('#price');
    kanapPrice.textContent = (`${product.price}`);
    
    let kanapDescription = document.querySelector('#description');
    kanapDescription.textContent = (`${product.description}`);

const dropdownColors =product.colors
console.log(dropdownColors);

for (let color of dropdownColors){
  let dropdown = document.createElement ('option');
  dropdown.value = `${color}`;
  dropdown.textContent= `${color}`;
  let select = document.querySelector('#colors')
  select.appendChild(dropdown)
   
}
 
    
 })

 //creation des option et option value existants dans html  
    //



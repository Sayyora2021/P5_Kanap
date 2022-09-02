//localStorage.clear();
//on récupère orderId
let str = window.location.href;
let url = new URL(str);
let orderId = url.searchParams.get('orderId')

    
console.log(orderId);

const elementId = document.getElementById('orderId')
elementId.textContent = orderId;

console.log(elementId)


/*const orderId = getId()
displayOrderId(orderId)
console.log(orderId)

//fonction de récupération de l'orderId dans l'url
function getId() {
    const urlSearchParams = new URLSearchParams(document.location.search)
    return urlSearchParams.get("orderId")
}

// fonction affiche de l'orderId sur la page
function displayOrderId(orderId) {
    const orderElement = document.getElementById("orderId");
    orderElement.textContent = orderId
    console.log(orderElement);
    //clearlocalStorage()
}

// fonction de nettoyage du localstorage 
/*function clearlocalStorage() {
    localStorage.clear()
} ;*/
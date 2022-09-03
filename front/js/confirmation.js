
//on récupère orderId
let orderId = new URL(window.location.href).searchParams.get('orderId');
    
if (orderId) {
    localStorage.clear();
    document.getElementById('orderId').textContent = orderId;
}
else {
    document.querySelector('.confirmation>p').textContent = "Erreur !"
}



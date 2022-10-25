window.onload = function () {

    // open presupuesto
    // let buttonPresupuesto = document.getElementsByClassName('button-presupuesto');
    let presupuesto = document.getElementById('presupuesto');

    document.querySelectorAll('.button-presupuesto').forEach(item => {
        item.addEventListener('click', event => {
            presupuesto.style.display = 'flex';
        })
    })

    // close popup-presupuesto
    let closePresupuesto = document.getElementsByClassName('close-presupuesto');

    closePresupuesto[0].addEventListener('click', function(){
        presupuesto.style.display = 'none';
    })

    // popup menu

    let bars = document.getElementsByClassName('bars');
    let popupMenu = document.getElementsByClassName('popup-menu');
    
    bars[0].addEventListener('click', function(){
        popupMenu[0].classList.toggle("show-popup");
    })

    bars[0].addEventListener('click', function(){
        bars[0].classList.toggle("bars-active");
    })
}
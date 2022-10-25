window.onload = function () {

    // popup menu

    let bars = document.getElementsByClassName('bars');
    let popupMenu = document.getElementsByClassName('popup-menu');
    
    bars[0].addEventListener('click', function(){
        popupMenu[0].classList.toggle("show-popup");
    })

    bars[0].addEventListener('click', function(){
        bars[0].classList.toggle("bars-active");
    })

    // open presupuesto
    let buttonPresupuesto = document.getElementsByClassName('button-presupuesto');
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

    // slider

    let index = 0;
    let images = ['assets/img/living-room.jpg', 'assets/img/bathroom.jpg', 'assets/img/terraza.jpg'];

    let image = document.getElementById('image')
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    image.src = images[index];

    next.addEventListener('click', function(){
        if(index === images.lenght -1){
            images.src = images[0];
            index = 0;
        } else {
            image.src = images[index + 1];
            index++;
        }
    })
    prev.addEventListener('click', function(){
        if(index === 0){
            image.src = images[images.length - 1 ];
            index = images.length - 1;
          }else{
            image.src = images[index - 1];
            index--;
          }
    })


    // read more

        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        myBtn.addEventListener('click', function(){
            if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more"; 
            moreText.style.display = "none";
            } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less"; 
            moreText.style.display = "inline";
            }
        })
      
      // accordeon

    let accordion = document.getElementsByClassName('accordion');
    let i;
    for(i = 0; i < accordion.length; i++){
        accordion[i].addEventListener("click", function(){
            this.classList.toggle('active');

            let content = this.nextElementSibling;
            if(content.style.display === "block"){
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
           
        });
    }
}
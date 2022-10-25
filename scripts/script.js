window.onload = function () {

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

    // filter

    const projects = [
        {
            img: 'assets/img/kitchen.jpg',
            name: 'Kitchen 1',
            category: 'cocina',
        },
        {
            img: 'assets/img/terraza.jpg',
            name: 'Terrace',
            category: 'exterior',
        },
        {
            img: 'assets/img/little-bathroom.jpg',
            name: 'Bathroom 1',
            category: 'interior',
        },
        {
            img: 'assets/img/bathroom.jpg',
            name: 'Kitchen 2',
            category: 'cocina',
        },
        {
            img: 'assets/img/kitchen.jpg',
            name: 'Bathroom 2',
            category: 'interior',
        },
        {
            img: 'assets/img/kitchen.jpg',
            name: 'Kitchen 1',
            category: 'cocina',
        },
        {
            img: 'assets/img/terraza.jpg',
            name: 'Terrace',
            category: 'exterior',
        },
        {
            img: 'assets/img/little-bathroom.jpg',
            name: 'Bathroom 1',
            category: 'interior',
        },
        {
            img: 'assets/img/kitchen.jpg',
            name: 'Bathroom 2',
            category: 'interior',
        },
        {
            img: 'assets/img/bathroom.jpg',
            name: 'Kitchen 2',
            category: 'cocina',
        },
    ];

    let projectList = document.getElementsByClassName('project-list');

    const printProjects = function(projects){
        for(let i = 0; i < projects.length; i++){
            let contain = document.createElement('div');
            let imag = document.createElement('img');
            let title = document.createElement('h4');
            let categ = document.createElement('p');
            contain.classList.add('contain-class');


            imag.src = projects[i].img;
            title.innerText = projects[i].name;
            categ.innertext = projects[i].category;

            contain.append(imag);
            contain.append(title);
            contain.append(categ);

            projectList[0].append(contain);
        }
    }
    
    
    let filter = document.getElementById('filter');
    
    filter.addEventListener('change', function(){
        let filterValue = this.value;
        
        const filteredProjects = (filterValue === 'todos')
        ? filteredProjects : projects.filter(el => el.category === filterValue);
        
        projectList[0].innerHTML = "";
        printProjects(filteredProjects);
    })
    
    
    printProjects(projects);




    // popup menu

    let bars = document.getElementsByClassName('bars');
    let popupMenu = document.getElementsByClassName('popup-menu');
    
    bars[0].addEventListener('click', function(){
        popupMenu[0].classList.toggle("show-popup");
    })

    bars[0].addEventListener('click', function(){
        bars[0].classList.toggle("bars-active");
    })



    // slider

    let index = 0;
    let images = ['assets/img/living-room.png', 'assets/img/bathroom.jpg'];

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



}
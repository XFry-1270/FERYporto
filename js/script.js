const menu=document.querySelector('#menu');
const navMenu = document.querySelector('#navMenu')
menu.addEventListener('click',function(){
    menu.classList.toggle('menu-active');
    navMenu.classList.toggle('hidden');
});
let section = document.querySelectorAll('section');
let navink = document.querySelectorAll('nav a');

window.onscroll= function(){
    section.forEach(sc =>{
        let top = window.scrollY;
        let offset = sc.offsetTop - 150;
        let height = sc.offsetHeight;
        let id = sc.getAttribute('id');
        if(top >= offset && top < offset + height){
            navink.forEach(ink=>{
                ink.classList.remove('act');
                document.querySelector('nav a[href*='+ id +']').classList.add('act');
            })
        }
       });

    const nav =document.querySelector('header');
    const fixNav = nav.offsetTop;

    if(window.pageYOffset > fixNav){
        nav.classList.add('navbar-fixed');
    }else{
        nav.classList.remove('navbar-fixed');
    }
}




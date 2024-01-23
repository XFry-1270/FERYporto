const menu=document.querySelector('#menu');
const navMenu = document.querySelector('#navMenu')
menu.addEventListener('click',function(){
    menu.classList.toggle('menu-active');
    navMenu.classList.toggle('hidden');
});

window.onscroll= function(){
    const nav =document.querySelector('header');
    const fixNav = nav.offsetTop;

    if(window.pageYOffset > fixNav){
        nav.classList.add('navbar-fixed');
    }else{
        nav.classList.remove('navbar-fixed');
    }
}
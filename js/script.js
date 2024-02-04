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

// DARKMODE PART START

var dmbtn = document.getElementById('dm');

dmbtn.addEventListener('click',darkmode);

function darkmode(){
    var body = document.querySelector("body");
    var abouth = document.querySelectorAll('#About h2');
    var aboutspan = document.querySelectorAll('#About span');
    var homespan = document.querySelectorAll('#Home span');
    var porto = document.querySelector("#Portofolio")
    var portoH = document.querySelectorAll('#Portofolio h2');
    var portoP = document.querySelectorAll('#Portofolio p');

    body.classList.toggle("darkmode-body");


    if(abouth[0].classList.contains('darkmode-txt')){
        dmbtn.src='asset/moon.svg';
        abouth[0].classList.remove('darkmode-txt');
        abouth[1].classList.remove('darkmode-txt');
        aboutspan[0].classList.remove('darkmode-txt');
        homespan[2].classList.remove('darkmode-txt');
        homespan[3].classList.remove('darkmode-txt');
        porto.classList.remove('darkmode-portofolio');

        portoH[0].classList.remove('darkmode-txt');
        portoH[1].classList.remove('darkmode-txt');
        portoH[2].classList.remove('darkmode-txt');
        portoH[3].classList.remove('darkmode-txt');
        portoH[4].classList.remove('darkmode-txt');

        portoP[0].classList.remove('darkmode-p');
        portoP[1].classList.remove('darkmode-p');
        portoP[2].classList.remove('darkmode-p');
        portoP[3].classList.remove('darkmode-p');
        portoP[4].classList.remove('darkmode-p');

    }else{
    abouth[0].classList.add('darkmode-txt');
    abouth[1].classList.add('darkmode-txt');
    aboutspan[0].classList.add('darkmode-txt');
    homespan[2].classList.add('darkmode-txt');
    homespan[3].classList.add('darkmode-txt');
    porto.classList.add('darkmode-portofolio');

    portoH[0].classList.add('darkmode-txt');
    portoH[1].classList.add('darkmode-txt');
    portoH[2].classList.add('darkmode-txt');
    portoH[3].classList.add('darkmode-txt');
    portoH[4].classList.add('darkmode-txt');

    portoP[0].classList.add('darkmode-p');
    portoP[1].classList.add('darkmode-p');
    portoP[2].classList.add('darkmode-p');
    portoP[3].classList.add('darkmode-p');
    portoP[4].classList.add('darkmode-p');
    dmbtn.src="asset/sun.svg";
    }

    
}


// DARKMODE PART END 

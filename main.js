//scroll nav

// window.addEventListener('scroll', function () {
//     let nav = document.querySelector('nav');

//     nav.classList.toggle('active-scroll', window.scrollY > 700);
// })

//Navigation, scroll up visible, scroll down hidden

let scrollPos = 0;
const nav =document.querySelector('.navbar');

function checkPosition() {
    let windowY = window.scrollY;

    if (windowY < scrollPos) {
        //scroll UP
        nav.classList.add('is-visible');
        nav.classList.remove('is-hidden');
    } else {
        //scroll down
        nav.classList.add('is-hidden');
        nav.classList.remove ('is-visible');      
    }
    scrollPos = windowY;
}

window.addEventListener('scroll', checkPosition);


//Scroll to Section-NAV

const links = document.querySelectorAll(".scroll_to");

links.forEach((item) => {

    item.addEventListener('click', ()=> {
        const el = document.getElementById(item.getAttribute('data-link'));
        el.scrollIntoView({behavior: "smooth"});
    });
});

//Loader

let loader = document.getElementById('preloader');

window.addEventListener('load', ()=> {
    loader.style.display="none";
})
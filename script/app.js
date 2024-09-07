let toggle = document.querySelector('.header__toggle')
let mobileMenu = document.querySelector('.header__mobile-menu-wrapper')
let mobileMenuExit = document.querySelector('.mobile-btn__login')
let cover = document.querySelector('.cover')
let faqTop = document.querySelectorAll('.faq-top')
let grabber = document.querySelector('.comment__slider')

toggle.addEventListener('click',()=>{
    {
        mobileMenu.style.right = "0";
        cover.style.height = "100%"
    }
})

mobileMenuExit.addEventListener('click',()=>{
    mobileMenu.style.right = "-31.8rem"
    cover.style.height = "0"
})

cover.addEventListener('click' , ()=>{
    mobileMenu.style.right = "-31.8rem"
    cover.style.height = "0"
})

faqTop.forEach(item => {
    item.addEventListener('click', ()=>{
        item.nextElementSibling.classList.toggle('faq-active')
        item.lastElementChild.classList.toggle('faq__arrow--active')
    })
});

// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         document.body.style.backgroundColor = "yellow";
//     } else {
//         document.body.style.backgroundColor = "pink";
//     }
// }
//
// // Create a MediaQueryList object
// var x = window.matchMedia("(max-width: 700px)")
//
// // Call listener function at run time
// myFunction(x);
//
// // Attach listener function on state changes
// x.addEventListener("change", function() {
//     myFunction(x);
// });
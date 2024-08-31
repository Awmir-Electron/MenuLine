let toggle = document.querySelector('.header__toggle')
let mobileMenu = document.querySelector('.header__mobile-menu-wrapper')
let mobileMenuExit = document.querySelector('.mobile-btn__login')
let cover = document.querySelector('.cover')
let faqTop = document.querySelectorAll('.faq-top')

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
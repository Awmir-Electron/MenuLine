let toggle = document.querySelector('.header__toggle')
let mobileMenu = document.querySelector('.header__mobile-menu-wrapper')
let mobileMenuExit = document.querySelector('.mobile-btn__login')
let cover = document.querySelector('.cover')

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
// js for search

const label = document.querySelector('.header__search-label')
const modal = document.querySelector('.header__search-hident')
const headerContainer = document.querySelector('.header__search__container')
const headerSearchBtn = document.querySelector('.header__search-btn')
const headerSearchIcon = document.querySelector('.header__search-icon')
const containerRecently = document.querySelector('.header__search__container-recently')
const headerInput = document.querySelector('.header__search-input')
const headerMenuLabel = document.querySelector('.header__menu-label')

var app = document.getElementById('app')
function closeBuyTicket(){
    label.style.width = '292px'
    modal.classList.add('header__search')
    headerContainer.style.display = 'flex'
    headerSearchBtn.style.display = 'block'
    headerSearchIcon.style.display = 'none'
    headerInput.style.opacity = '0.8'
    }

function hident() {
    modal.classList.remove('header__search')
    headerContainer.style.display = 'none'
    headerSearchBtn.style.display = 'none'
    headerSearchIcon.style.display = 'block'
}
function appear(){
    headerSearchIcon.style.display = 'block'
    headerInput.style.opacity = '1'
}
label.addEventListener('click',closeBuyTicket)
headerSearchBtn.addEventListener('click',hident)
headerMenuLabel.addEventListener('click',closeMenu)
containerRecently.addEventListener('click',appear)


////js for menu
const headerBtnMenu = document.querySelector('.header__btn--menu')
headerBtnMenu.addEventListener('click',openMenu)
headerBtnMenu.addEventListener('click',hident)



function openMenu(){
    headerMenuLabel.style.display ="block"
}
function closeMenu(){
    headerMenuLabel.style.display ="none"
}

// sidebar left

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const sidebarSeeMore = $('.sidebar__seeMore')
const sidebarHide = $('.sidebar__hide')
const sidebarMenuMore = $('.sidebar__menu-more')

sidebarSeeMore.onclick = function(){
    sidebarMenuMore.style.display = "block"
    this.style.display ="none"
}
sidebarHide.onclick = function(){
    sidebarMenuMore.style.display = "none"
    sidebarSeeMore.style.display = ""
}

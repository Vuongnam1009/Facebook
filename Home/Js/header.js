const label = document.querySelector('.header__search-label')
const modal = document.querySelector('.header__search-hident')
const headerContainer = document.querySelector('.header__search__container')
const headerSearchBtn = document.querySelector('.header__search-btn')
const headerSearchIcon = document.querySelector('.header__search-icon')
const app = document.querySelector('.app')
const containerRecently = document.querySelector('.header__search__container-recently')
const headerInput = document.querySelector('.header__search-input')
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
containerRecently.addEventListener('click',appear)

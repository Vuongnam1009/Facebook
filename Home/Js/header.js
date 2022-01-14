const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// js for search

const label = $('.header__search-label')
const modal = $('.header__search-hident')
const headerContainer = $('.header__search__container')
const headerSearchBtn = $('.header__search-btn')
const headerSearchIcon = $('.header__search-icon')
const containerRecently = $('.header__search__container-recently')
const headerInput = $('.header__search-input')
const headerMenuLabel = $('.header__menu-label')

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
const meetingAvts = $$('.meeting__avt')
const subs = $$('.meeting__avt-sub')
const contentMeeting = $('.content__meeting')
const meetingBtnLeft = $('.meeting__btn--left')
const meetingBtnRight = $('.meeting__btn--right')
meetingBtnRight.onclick = function(){
    const aaa = contentMeeting.scrollLeft
    var leftHt = contentMeeting.scrollLeft
    var run = setInterval(function(){
        leftHt = leftHt + 3
        contentMeeting.scrollLeft = leftHt
        var aaaa = contentMeeting.scrollLeft
        if(leftHt >= aaa + 400){
            clearInterval(run)
        }
        if (leftHt != 0) {
            meetingBtnLeft.style.display = 'flex'
        }
        if (aaaa + 3 < leftHt ) {
            meetingBtnRight.style.display = 'none'
        }
    },1)

}
meetingBtnLeft.onclick = function(){
    meetingBtnRight.style.display = 'flex'
    const lef = contentMeeting.scrollLeft
    var leftHt = contentMeeting.scrollLeft
    var runLeft = setInterval(function(){
        leftHt -=3
        contentMeeting.scrollLeft = leftHt
        if (leftHt<= lef-399.9) {
            clearInterval(runLeft)
        }
        if (contentMeeting.scrollLeft <= 1) {
            meetingBtnLeft.style.display = 'none'
        }
    },1)
}
meetingAvts.forEach((meetingAvt, index) => {
    meetingAvt.onmouseover = function(){
        var sub = subs[index]
        var pos = this.offsetLeft
        sub.style.left = this.offsetLeft - contentMeeting.scrollLeft  + 'px'

        // if (contentMeeting.scrollLeft != 0 ) {
        //     meetingBtnLeft.style.display = 'flex'
        // }
    }
});




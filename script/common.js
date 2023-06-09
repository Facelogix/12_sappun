//--------------------------------------변수
//1. KR
const kr_lnb = document.querySelector('.right li:first-child')
const kr_lnb_open = document.querySelector('header .lang')
//2. 전체메뉴+닫기
const all_nav = document.querySelector('header .right li:last-child a')
const all_nav_open = document.querySelector('header .all_nav')
const all_nav_close = document.querySelector('header .all_nav .close')

//3. ACC gnb + sub
const nav_acc = document.querySelectorAll('nav>ul>li')
const nav_acc_sub = document.querySelectorAll('nav>ul>li>.sub')
//----------
const right_popup = document.querySelector('#right_popup')
const popup_btn = document.querySelector('#popup_btn>a:first-child')

//출력 확인
console.log(popup_btn,right_popup)
console.log(kr_lnb,kr_lnb_open)
console.log(all_nav,all_nav_open)
console.log(nav_acc,nav_acc_sub)
//-------------------------------event
//1.이벤트 실행전 모두 숨기기
//객체.속성.속성 = 값
//객체.style.display = 'none'
all_nav_open.style.display = 'none'
kr_lnb_open.style.display = 'none'
nav_acc_sub[0].style.display = 'none'
//2.매뉴 버튼 클릭 = 전체메뉴 창 열림
all_nav.addEventListener('click',function(){
    all_nav_open.style.display = 'block'
})
//3. 닫기클릭 시 전체메뉴 숨기기
all_nav_close.addEventListener('click',function(){
    all_nav_open.style.display = 'none'
})
//4.
//mouseover, mouseout
nav_acc[12].addEventListener('mouseover',function(){
    nav_acc_sub[0].style.display='block'
})
//6. 메뉴에 마우스 나갈시 서브 메뉴 숨기기
nav_acc[12].addEventListener('mouseout',function(){
    nav_acc_sub[0].style.display='none'
})
//7. 5-6 동일
kr_lnb.addEventListener('mouseover',function(){
    kr_lnb_open.style.display='block'
})

kr_lnb.addEventListener('mouseout',function(){
    kr_lnb_open.style.display='none'
})
// main - right _ popup

right_popup.style.transform='translateX(550px)'

popup_btn.addEventListener('click',function(){
    right_popup.style.transition = 'all 0.8s'
    right_popup.style.transform='translateX(0)'
})
popup_btn.addEventListener('mouseover',function(){
    right_popup.style.transition = 'all 0.8s'
    right_popup.style.transform='translateX(550px)'
})

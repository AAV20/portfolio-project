let btn=document.querySelector('.sw-btn');
btn.addEventListener('click',()=>{
  if( document.body.classList.contains('darkMode')){
    document.body.classList.remove('darkMode');
    btn.textContent ='dark';
    btn.style = 'background:white;color:black;'
  }else{
      document.body.classList.add('darkMode')
      btn.textContent ='light'
      btn.style = 'background:black;color:white;'
  }

});

AOS.init();


const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#b-menu");
const navBtnimg = document.querySelector("#nav-bars");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnimg.src = "./images/close.svg";
  } else {
    navBtnimg.src = "./images/NAV.svg";
  }
};



//const btn = document.querySelector('.sw-btn')
// btn.addEventListener('click',()=>{
//   document.body.classList.toggle('darkMode')
//  })



let slide = document.querySelector('.white-blocks');
let next = document.querySelector('.right');
let prev = document.querySelector('.left');



function nextImage(){
  let i=Array.from(slide.children).findIndex((item)=>item.classList.contains('active'))
  if(i<slide.children.length-1){
    i++;
    slide.children[i-1].classList.remove('active')
  }else{
    slide.children[i].classList.remove('active')
    i = 0
  }
 slide.children[i].classList.add('active')
}
next.addEventListener('click',nextImage)


function previousImage(){
let i=Array.from(slide.children).findIndex((item)=>item.classList.contains('active'));
  if(i > 0){
    i--;
   slide.children[i+1].classList.remove('active')
  }else {
    slide.children[i].classList.remove('active')
    i = slide.children.length - 1  
  }
 slide.children[i].classList.add('active')
}

prev.addEventListener('click',previousImage)


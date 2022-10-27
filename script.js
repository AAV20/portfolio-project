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

// const btn = document.querySelector('.sw-btn')
// btn.addEventListener('click',()=>{
//   document.body.classList.toggle('darkMode')
//  })
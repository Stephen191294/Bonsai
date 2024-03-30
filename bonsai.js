window.addEventListener('scroll', function(){
  let header = document.getElementById('header');
  let scrollPosition = window.scrollY;

  if(scrollPosition === 0){
    header.classList.add('transparent');
  } else{
    header.classList.remove('transparent');
  }
});



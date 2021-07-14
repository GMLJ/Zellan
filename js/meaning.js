var left = document.querySelector('.left'),
    right = document.querySelector('.right');

window.addEventListener("scroll", function(){
  if (window.pageYOffset > 500){
  left.classList.add('leftTranslate'),
  right.classList.add('rightTranslate');
} else if (window.pageYOffset < 500){
  left.classList.remove('leftTranslate'),
  right.classList.remove('rightTranslate');
} 
})

window.addEventListener("scroll", function(){
if (window.pageYOffset > 1000){
  left.classList.remove('leftTranslate'),
  right.classList.remove('rightTranslate');
}
})

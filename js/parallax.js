// ПАРАЛЛАКС ЭФФЕКТ
document.addEventListener("scroll", function() {
  var scrolled = window.pageYOffset;
  var parallaxElement = document.querySelector('.parallax');
  var speed = -0.03; // коэффициент для изменения скорости параллакс-эффекта

  // Изменяем позицию элемента
  parallaxElement.style.transform = 'translateY(' + scrolled * speed + 'px)';
});



document.addEventListener("scroll", function() {
  var scrolled = window.pageYOffset;
  var parallaxElement = document.querySelector('.parallax-bg');
  var speed = 0.2; // коэффициент для изменения скорости параллакс-эффекта

  // Изменяем позицию элемента
  parallaxElement.style.transform = 'translateY(' + scrolled * speed + 'px)';
});


document.addEventListener("scroll", function() {
  var scrolled = window.pageYOffset;
  var parallaxElement = document.querySelector('.mountains-parallax');
  var speed = 0.1; // коэффициент для изменения скорости параллакс-эффекта

  // Изменяем позицию элемента
  parallaxElement.style.transform = 'translateY(' + scrolled * speed + 'px)';
});

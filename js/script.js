
     // СЛАЙДЕР СВАЙПЕР
new Swiper('.text-slider', {

  navigation: {
    nextEl: '.swiper-button-custom-next',
    prevEl: '.swiper-button-custom-prev'
  },

    on: {
    init: function () {
      updateStars(this.activeIndex);
    },
    slideChange: function () {
      updateStars(this.activeIndex);
    }
  },
  
  grabCursor: true,
  
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return current.toString().padStart(2, '0');
    }
  },
  
});

// АКТИВНЫЙ СЛАЙД ДЛЯ ЗВЕЗДЫ
function updateStars(activeIndex) {
document.querySelectorAll('.star-glare').forEach(function (star, index) {
star.classList.toggle('star-active', index === activeIndex);
});
}










new Swiper('.price-slider', {
  spaceBetween: 40,
  slidesPerView: 1.13, // Количество слайдов для показа по умолчанию
  breakpoints: {
    // При ширине экрана 500px или меньше
    550: {
      slidesPerView: 3, // Показывать только один слайд
    }
  }
});



new Swiper('.swiper-cases', {
  
  slidesPerView: 1, // Количество слайдов для показа по умолчанию
  breakpoints: {
    // При ширине экрана 500px или меньше
    550: {
      slidesPerView: 2.8, // Показывать только один слайд
    }
  },

  slidesOffsetBefore: 30, 

  slidesOffsetAfter: -200, 

  spaceBetween: 30,

  grabCursor: true,

  freeMode: true, 

  freeModeMomentum: true,
});


       // ВЫПЛЫВАЮЩАЯ СЕКЦИЯ 
$(function () {
      var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: 'onLeave',
          duration: "200%"
        }
      });

      var slides = document.querySelectorAll("section.panel");
      for (var i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
          triggerElement: slides[i]
        })
          .setPin(slides[i], { pushFollowers: false })
          .addTo(controller);
      }
    });






// Получаем модальное окно и элементы внутри него
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("img01");
var span = document.getElementsByClassName("close")[0];

// Функция для открытия модального окна
function openModal(src) {
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
  modalImg.src = src;
}

// Функция для закрытия модального окна
function closeModal() {
  modal.style.opacity = "0";
  setTimeout(function() {
    modal.style.visibility = "hidden";
  }, 200); // 200ms - время анимации исчезновения
}

// Добавляем обработчики событий
document.querySelectorAll('.top-image').forEach(item => {
  item.addEventListener('click', function() { openModal(this.src); });
});

// Закрыть модальное окно при клике на <span> (x) или вне картинки
span.addEventListener('click', closeModal);
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});










// ЗАГРУЗКА
document.addEventListener("DOMContentLoaded", function() {
  var loader = document.getElementById("loadingIndicator");
  loader.style.display = "none";
});






jQuery(document).ready(function () {

      $(".phone").mask("+7 (999) 999-99-99");

    });






var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      virtual: {
        slides: (function () {
          var slides = [];
          for (var i = 0; i < 600; i += 1) {
            slides.push('Slide ' + (i + 1));
          }
          return slides;
        }()),
      },
    });
    document.querySelector('.slide-1').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.slideTo(0, 0);
    });
    document.querySelector('.slide-250').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.slideTo(249, 0);
    });
    document.querySelector('.slide-500').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.slideTo(499, 0);
    });
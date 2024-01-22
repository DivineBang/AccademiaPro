//preloader
$(document).ready(function() {
    $('#preloader').fadeOut(400);
  });  

  $(document).ready(function(){
    $('.center').slick({
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 1500,
      centerPadding: '10px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1201,
          settings: {
            
            centerMode: true,
            centerPadding: '50px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 993,
          settings: {
            
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 2
          }
        },
        
        {
          breakpoint: 769,
          settings: {
            
            centerMode: true,
            centerPadding: '50px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 577,
          settings: {
            
            centerMode: true,
            centerPadding: '5px',
            slidesToShow: 1
          }
          
        },
        {
          breakpoint: 450,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '5px',
            slidesToShow: 1
          }
          
        }
        
      ]
    });
});  

/*   Tab */
document.querySelectorAll('.faq__wrapp').forEach(faq => {
    const text = faq.querySelector('.faq__text');
    const img = faq.querySelector('.faq__wrapp_img');
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
        if (faq.classList.contains('active')) {
            text.style.maxHeight = text.scrollHeight + 'px';
            img.style.transform = 'translateY(-50%) rotate(-45deg)';
        } else {
            text.style.maxHeight = '0';
            img.style.transform = 'translateY(-50%) rotate(0deg)';
            text.addEventListener('transitionend', () => {
                if (!faq.classList.contains('active')) {
                    text.style.display = 'none';
                }
            });
        }
    });
  });
  



//кнопка вверх

jQuery(document).ready(function() {
  var btn = $('#arrow-top');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 500) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '500');
   });
});
var btn = $('#arrow-top');
   $(window).scroll(function() {
     if ($(window).scrollTop() > 500) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   }); 

/* submenu */
$(document).ready(function () {
  $('.menu__item').hover(
      function () {
          $(this).find('.submenu').stop(true, true).slideDown(200);
      },
      function () {
          var submenu = $(this).find('.submenu');
          submenu.stop(true, true).slideUp(200, function () {
              submenu.css('display', ''); // Очистка стиля display после анимации
          });
      }
  );
  });

/*  Burger + submenu */
$(document).ready(function () {
  var isOpen = false;

  $('.submenu-trigger').click(function (event) {
      event.stopPropagation(); // Остановка всплытия события, чтобы оно не дошло до document
      var $submenu = $(this).siblings('.submenu');
      var $icon = $(this).find('.submenu-icon');

      // Закрыть другие подменю
      $('.submenu').not($submenu).slideUp(200);

      if (!isOpen) {
          $submenu.slideDown(200);
          $icon.css('transform', 'rotate(180deg)');
      } else {
          $submenu.slideUp(200);
          $icon.css('transform', 'rotate(0deg)');
      }

      isOpen = !isOpen;
  });

  // Открывать submenu при наведении на menu__item
  $('.menu__item').hover(
      function () {
          var $submenu = $(this).find('.submenu');
          if (!$submenu.is(':visible')) {
              $submenu.slideDown(200);
          }
      },
      function () {
          var $submenu = $(this).find('.submenu');
          if ($submenu.is(':visible')) {
              $submenu.slideUp(200);
          }
      }
  );

  // Закрывать подменю при клике вне него
  $(document).click(function (event) {
      if (!$(event.target).closest('.menu__item').length) {
          $('.submenu').slideUp(200);
          $('.submenu-icon').css('transform', 'rotate(0deg)');
          isOpen = false;
      }
  });

  // Открывать/закрывать menu по клику на burger
  $('.header__menu').click(function (event) {
      $('.menu').toggleClass('active__menu');
  });

  // Изменять иконку burger при клике
  $('.header__menu').click(function (event) {
      var menuImage = $('.burger__img');
      if (menuImage.attr('src') === 'assets/img/burger.png') {
          menuImage.attr('src', 'assets/img/close_burger.png');
      } else {
          menuImage.attr('src', 'assets/img/burger.png');
      }
  });
});

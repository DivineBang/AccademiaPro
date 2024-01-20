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
          breakpoint: 993,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 2
          }
        },
        
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 577,
          settings: {
            arrows: false,
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
            centerPadding: '0',
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
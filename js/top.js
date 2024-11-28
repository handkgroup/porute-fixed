document.addEventListener('DOMContentLoaded', () => {
  const journal = document.querySelector('.js-journal');
  const indicator = document.querySelector('.indicator');

  function initSlick() {
    if (window.innerWidth <= 768) {
      if (!$(journal).hasClass('slick-initialized')) {
        $(journal).slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: true,
        });

        if (indicator) {
          indicator.classList.remove('slick-slide');
          indicator.removeAttribute('style');
        }
      }
    } else {
      if ($(journal).hasClass('slick-initialized')) {
        $(journal).slick('unslick');
      }
    }
  }

  initSlick();
  window.addEventListener('resize', initSlick);
});





// document.addEventListener('DOMContentLoaded', () => {
//   const tabs = document.querySelectorAll('.tab');
//   const contents = document.querySelectorAll('.tab-content');
//   const indicator = document.querySelector('.indicator');

//   tabs.forEach(tab => {
//     tab.addEventListener('click', (e) => {
//       e.preventDefault();

//       tabs.forEach(t => t.classList.remove('active'));
//       contents.forEach(c => c.classList.remove('active'));

//       tab.classList.add('active');
//       document.querySelector(tab.getAttribute('href')).classList.add('active');

//       const tabRect = tab.getBoundingClientRect();
//       const tabsRect = document.querySelector('.tabs').getBoundingClientRect();
//       indicator.style.left = `${tabRect.left - tabsRect.left + (tabRect.width / 2) - (indicator.offsetWidth / 2)}px`;
//     });
//   });

//   const firstTab = document.querySelector('.tab.active');
//   const firstTabRect = firstTab.getBoundingClientRect();
//   const tabsRect = document.querySelector('.tabs').getBoundingClientRect();
//   indicator.style.left = `${firstTabRect.left - tabsRect.left + (firstTabRect.width / 2) - (indicator.offsetWidth / 2)}px`;
// });
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  const indicator = document.querySelector('.indicator');
  const contentContainer = document.querySelector('.content');

  function setContentHeight() {
    const activeContent = document.querySelector('.tab-content.active');
    contentContainer.style.height = `${activeContent.offsetHeight}px`;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();

      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      document.querySelector(tab.getAttribute('href')).classList.add('active');
      setContentHeight();

      const tabRect = tab.getBoundingClientRect();
      const tabsRect = document.querySelector('.tabs').getBoundingClientRect();
      indicator.style.left = `${tabRect.left - tabsRect.left + (tabRect.width / 2) - (indicator.offsetWidth / 2)}px`;
    });
  });

  const firstTab = document.querySelector('.tab.active');
  const firstTabRect = firstTab.getBoundingClientRect();
  const tabsRect = document.querySelector('.tabs').getBoundingClientRect();
  indicator.style.left = `${firstTabRect.left - tabsRect.left + (firstTabRect.width / 2) - (indicator.offsetWidth / 2)}px`;

  setContentHeight();
});






// $(document).ready(function () {
//   $(document).ready(function () {
//     $('.tab li').hover(function () {
//       $('.tab li').removeClass('current');
//       $(this).addClass('current');
//       var index = $('.tab li').index(this);
//       $('.tab .c-use-case-img a').hide();
//       $('.tab .c-use-case-img a').eq(index).fadeIn(400, "swing");
//     }, function () {
//       var currentIndex = $('.tab li.current').index();
//       $('.tab .c-use-case-img a').hide();
//       $('.tab .c-use-case-img a').eq(currentIndex).fadeIn(400, "swing");
//     });

//     $('.accordion-content').hover(function () {
//       $(this).stop(true, true).show();
//     }, function () {
//       $(this).stop(true, true).slideUp();
//     });
//   });
// });
$(document).ready(function () {
  let lastHoveredIndex = 0;

  $('.tab li').hover(function () {
    $('.tab li').removeClass('current');
    $(this).addClass('current');
    lastHoveredIndex = $('.tab li').index(this);

    $('.tab .c-use-case-img a').stop(true, true).removeClass('current').hide();
    $('.tab .c-use-case-img a').eq(lastHoveredIndex).addClass('current').fadeIn(400, "swing");
  }, function () {
    $('.tab li').removeClass('current');
    $('.tab li').eq(lastHoveredIndex).addClass('current');

    $('.tab .c-use-case-img a').stop(true, true).removeClass('current').hide();
    $('.tab .c-use-case-img a').eq(lastHoveredIndex).addClass('current').fadeIn(400, "swing");
  });

  $('.accordion-content').hover(function () {
    $(this).stop(true, true).show();
  }, function () {
    $(this).stop(true, true).slideUp();
  });
});





$(document).ready(function () {
  $('.accordion-header').click(function () {
    $('.accordion-content').toggle('.active');
  });
});


$(document).ready(function () {
  $('.tab-item').click(function () {
    var index = $(this).index();
    $('.tab-item').removeClass('active');
    $(this).addClass('active');
    $('.tab-body').removeClass('active').eq(index).addClass('active');

    $('.tab-body.active .c-use-case-img a').hide().first().fadeIn(400, "swing");
  });

  // $('.accordion-header').hover(function () {
  //   $(this).next('.accordion-content').stop(true, true).slideDown();
  // }, function () {
  //   const accordionContent = $(this).next('.accordion-content');
  //   setTimeout(function () {
  //     if (!accordionContent.is(':hover')) {
  //       accordionContent.stop(true, true).slideUp();
  //     }
  //   }, 100);
  // });

  // $('.accordion-content').hover(function () {
  //   $(this).stop(true, true).show();
  // }, function () {
  //   $(this).stop(true, true).slideUp();
  // });
});

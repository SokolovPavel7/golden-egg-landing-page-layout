//добавляем объект с элементами слайдера в раздел спец-предложения:
const swiper = new Swiper('.spec__slider', {
  loop: true, //свойство цикличности
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
//добавление слайдера в раздел наше меню:
const swiperMenu = new Swiper('.menu__slider', {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*функция добавления класса overflowTabs вызывается в двух случаях:
1. Загрузка страницы - событие load
2. При изменении размера экрана - событие resize
*/

window.addEventListener('load', overflowTabs);
window.addEventListener('resize', overflowTabs);

function overflowTabs() {
  let outerTabs = document.querySelector('.tabs__container');
  let innerTabs = document.querySelector('.tabs');
  if (innerTabs.offsetWidth > outerTabs.offsetWidth) {
    innerTabs.classList.add('overflow');
  } else {
    innerTabs.classList.remove('overflow');
  }
}

//В секции меню получаем табы
const tabs = document.querySelector('.tabs');

//добавления класса active на нажатую кнопку выбора блюд
// tabs.addEventListener('click', (e) => {
//   if (e.target.classList.contains('tabs__item')) {
//     this.document.querySelectorAll('.tabs__item')
//       .forEach((item) => item.classList.remove('active'));
//     e.target.classList.add('active');
//   }
// });

tabs.addEventListener('click', (event) => {
  const tabsItems = document.querySelectorAll('.tabs__item ');

  Array.from(tabsItems).forEach((item) => {
    item.classList.remove('active');
  });
  event.target.classList.add('active');

  //получаем блоки со слайдами
  const menuSlider = document.querySelectorAll('.menu__slider-block');

  menuSlider.forEach((slider) => slider.classList.remove('show'));
  const tabsData = event.target.dataset.tab;
  const swiperSlide = document.querySelector(tabsData);
  swiperSlide.classList.add('show');
});

# Адаптивная верстка лендинга ресторана

- при разработке используется препроцессор sass с помощью плагина Live Sass Compiler, установленного в VS Code
- подключаем Swiper-слайдер:
  scss/swiper.scss
  js/swiper.min.js

- используем SVG спрайт:
  img/sprite-icons.svg
- используем переменные для повторяющихся свойств css, переменные объявленны в файле scss/general.scss
- используем mixin:
  @mixin flex($jc, $ai) {
  display: flex;
  flex-wrap: wrap;
  justify-content: $jc;
  align-items: $ai;
  }
  Пример использования:
  .top-menu\_\_list {
  @include flex(center, center);
  }
- видео для лендинга взято с сайта https://pixabay.com/

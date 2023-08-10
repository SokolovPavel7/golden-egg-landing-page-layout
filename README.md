# Адаптивная верстка лендинга ресторана

- при разработке используется препроцессор sass с помощью плагина Live Sass Compiler, установленного в VS Code
- используем Swiper-слайдер, установлен локально по ссылке https://www.jsdelivr.com/package/npm/swiper. Версия swiper@10.1.0
  Используем swiper-файлы в проекте:
  scss/swiper.scss
  js/swiper.min.js

- используем SVG спрайт:
  img/sprite-icons.svg
- используем переменные для повторяющихся свойств css, переменные объявленны в файле scss/general.scss
- используем mixin, например:
  @mixin flex($jc, $ai) {
  display: flex;
  flex-wrap: wrap;
  justify-content: $jc;
  align-items: $ai;
  }
  Пример использования:
  .top-menu-list {
  @include flex(center, center);
  }
- видео для лендинга взято с сайта https://pixabay.com/

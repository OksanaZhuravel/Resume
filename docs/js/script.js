// Проверка поддержки web формата картинок
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
// Открытие, закрытие мобильного меню
let navMain = document.querySelector('.nav'),
  navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});
// переключение активных ссылок в меню
let navClick = document
  .querySelectorAll('.nav__link')
  .forEach(function (navClick) {
    // console.log(navClick);
    navClick.addEventListener('click', function () {
      if (navClick.classList.contains('nav__link--active')) {
        navClick.classList.remove('nav__link--active');
      } else {
        navClick.classList.add('nav__link--active');
      }
    });
  });
// переключение при смене языка
let navlang = document
  .querySelectorAll('.lang-list__item')
  .forEach(function (navlang) {
    console.log(navlang);
    navlang.addEventListener('click', function () {
      if (navlang.classList.contains('lang-list__item--active')) {
        navlang.classList.remove('lang-list__item--active');
      } else {
        navlang.classList.add('lang-list__item--active');
      }
    });
  });

//Для 2-х языков
// window.onload = function () {
//   lang = localStorage.getItem('lang');
//   if (lang === 'ru') {
//   } else {
//     lang = 'en';
//   }
// };
// На JS...
// Ну, допустим, разбить содержимое на контейнеры с атрибутом LANG
// <html lang="ru">
// ...
//   <p lang="ru">Текст на русском</p>
//   <p lang="en">English text</p>
// ...

// В стилях будет
// html[lang="ru"] [lang="en"] {
//     display: none;
// }
// html[lang="en"] [lang="ru"] {
//     display: none;
// }

// Переключатель
// <ul class="langswitcher">
//   <li class="active"><a href="#ru" data-lang="ru">Ru</a></li>
//   <li><a href="#en" data-lang="en">En</a></li>
// </ul>

// Скрипт будет перекидывать значение атрибута lang у тэга HTML
// $(".langswitcher a").on("click",function(e){
//     e.preventDefault();
//     $(".langswitcher li").removeClass("active");
//     $("html").attr("lang",$(this).data("lang"));
//     $(this).parent().addClass("active");
//   });

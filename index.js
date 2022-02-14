// const hamburger = document.querySelector('.hamburger');
// const navListBurgerOpen = document.querySelector('.nav-list');
// const links = document.querySelector('.nav-list');

// function toggleMenu() {
//   hamburger.classList.toggle('open');
//   navListBurgerOpen.classList.toggle('nav-burger-open');
// }

// function closeMenu() {
//     hamburger.classList.remove('open');
//     navListBurgerOpen.classList.remove('nav-burger-open');
//   }

// hamburger.addEventListener('click', toggleMenu);
// links.addEventListener('click',closeMenu);

// console.log('блок header -- 6 балов \nблок hero -- 6 балов \nблок skills -- 6 балов \nблок portfolio -- 6 балов \nблок video -- 6 балов \nблок price -- 6 балов \nблок contacts -- 6 балов \nблок footer -- 6 балов \n\nнет полосы прокрутки при ширине страницы от 1440рх до 768рх -- 5 балов \nнет полосы прокрутки при ширине страницы от 768рх до 480рх -- 5 балов \nнет полосы прокрутки при ширине страницы от 480рх до 320рх -- 5 балов \n\nпри ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка -- 2 бала \nпри нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик -- 4 бала \nпвысота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана -- 4 бала \nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку -- 4 бала \nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку -- 4 бала \nбургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений -- 2 бала \nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям -- 2 бала \nпри клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку -- 4бала');

// const url = url('./');

const changeText = document.querySelector('.btn');
const text = document.querySelector('.text');
const author = document.querySelector('.author');
const audio = document.querySelector('audio');


// -------------------get API data------------------

async function getData() {
  const quotes = 'data.json';
  const res = await fetch(quotes);
  const data = await res.json();
  showData(data);
}

// -------------------show API data------------------

function showData(data) {
    
  const random = parseInt(Math.random() * 100);
  
  text.textContent = '« ' +  data[random].text + ' »' ;
  author.textContent =	'© '+ data[random].author;

}

changeText.addEventListener('click', getData);
changeText.addEventListener('click', playMusic);
getData()


// -------------------play sound------------------

function playMusic () {
  audio.currentTime = 0;
  audio.play();
}



// -------------------translate page---------------------


const i18Obj = {
  'en': {
    'header': 'If it\'s hard, read and think...',
    'button': 'words of great people'
  },
  
  'ru': {
    'header': 'Когда тяжело, прочти и задумайся...',
    'button': 'слова великих людей'
  }
}

const langArr = document.querySelectorAll("[data-i18]");
const enLang = document.querySelector('.lang-en');
const ruLang = document.querySelector('.lang-ru');



function translateRussian(lang) {
  lang = 'ru';
  langArr.forEach((elem) => {
    elem.textContent = i18Obj[lang][elem.dataset.i18];
  })

}


function translateEnglish(lang) {
  lang = 'en';
  langArr.forEach((elem) => {
    elem.textContent = i18Obj[lang][elem.dataset.i18];
  })

}

ruLang.addEventListener('click', translateRussian);
enLang.addEventListener('click', translateEnglish);
const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'standard': 'Standard',
      'premium': 'Premium',
      'gold': 'Gold',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'phone': 'Phone',
      'message': 'Message',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'standard': 'Стандартный',
      'premium': 'Премиум',
      'gold': 'Золотой',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'phone': 'Телефон',
      'message': 'Сообщение',
      'send-message': 'Отправить'
    }
}

// local storage

let lang = 'en';
let theme = 'dark';

function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
}

function getLocalStorage() {
    if(localStorage.getItem('lang')) {
        lang = localStorage.getItem('lang');
        setLanguage(lang);
    }
    if(localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
        setTheme(theme);
    }
}

function setTheme(theme) {
    theme === 'light' ? setLightTheme() : setDarkTheme();
}

function setLanguage(lang) {
    if (localStorage.getItem('lang') === 'ru') {
        langEnBtn.classList.remove('language-active');
        langRuBtn.classList.add('language-active');
    } else if(localStorage.getItem('lang') === 'en') {
        langRuBtn.classList.remove('language-active');
        langEnBtn.classList.add('language-active');
    }
    getTranslate(lang);
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

// menu

const hamburgerEl = document.querySelector('.hamburger');
const navMenuEl = document.querySelector('.nav');
const navLinksEl = document.querySelectorAll('.nav-list__link');

function toggleOpen() {
    hamburgerEl.classList.toggle('open');
    navMenuEl.classList.toggle('open');
}

hamburgerEl.addEventListener('click', toggleOpen);

navLinksEl.forEach(el => el.addEventListener('click', toggleOpen));

navMenuEl.addEventListener('click', (e) => {
    const isMenuOpen = navMenuEl.classList.contains('open');
    const isClickOutsideMenu = !e.path.find(el => el.classList && el.classList.contains('nav-list'));
    if (isMenuOpen && isClickOutsideMenu) toggleOpen();
});

/* function closeMenu(e) {
    if(e.target.classList.contains('nav-list__link')) {
        hamburgerEl.classList.remove('open');
        navMenuEl.classList.remove('open');
    }
}
navMenuEl.addEventListener('click', closeMenu); */

// portfolio gallery

const portfolioBtnBox = document.querySelector('.portfolio__btn-box');
const portfolioImages = document.querySelectorAll('.portfolio__image');
const portfolioBtns = document.querySelectorAll('.portfolio__btn');

function changeImages(season) {
    switch (season) {
        case 'winter':
            portfolioImages.forEach((img, index) => img.src = `assets/img/${season}/${index + 1}.jpg`);
            break;
        case 'spring':
            portfolioImages.forEach((img, index) => img.src = `assets/img/${season}/${index + 1}.jpg`);
            break;
        case 'summer':
            portfolioImages.forEach((img, index) => img.src = `assets/img/${season}/${index + 1}.jpg`);
            break;
        case 'autumn':
            portfolioImages.forEach((img, index) => img.src = `assets/img/${season}/${index + 1}.jpg`);
            break;
    }
}

portfolioBtnBox.addEventListener('click', (e) => {
    if(e.target.classList.contains('portfolio__btn')) {
        portfolioBtns.forEach(btn => btn.classList.remove('portfolio__btn-active'));
        e.target.classList.add('portfolio__btn-active');
        changeImages(e.target.dataset.season);
    }
});

// portfolio gallery cash

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages(season) {
    for(let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `assets/img/${season}/${i}.jpg`;
    }
}

seasons.forEach(season => portfolioImages);


// internationalization

const langBtns = document.querySelector('.language');
const langEnBtn = document.querySelector('.language__en');
const langRuBtn = document.querySelector('.language__ru');

function getTranslate(lang) {
    const i18Els = document.querySelectorAll('[data-i18]');
    i18Els.forEach((el) => {
        if(Object.keys(i18Obj[lang]).includes(el.dataset.i18)) {
            el.textContent = i18Obj[lang][el.dataset.i18];
        }

        if (el.placeholder) {
            el.textContent = '';
            el.placeholder = i18Obj[lang][el.dataset.i18];
          }
    });
}

langBtns.addEventListener('click', (e) => {
    if(e.target.classList.contains('language__ru')) {
        langEnBtn.classList.remove('language-active');
        langRuBtn.classList.add('language-active');
        lang = 'ru';
        getTranslate('ru');
    } else if (e.target.classList.contains('language__en')) {
        langRuBtn.classList.remove('language-active');
        langEnBtn.classList.add('language-active');
        lang = 'en';
        getTranslate('en');
    }
});

// change theme

const lightThemeItems = ['.skills', '.portfolio', '.video', '.price', '.section-title__text', '.portfolio__btn', '.nav-list', '.hamburger'];
const themeBtns = document.querySelector('.theme');
const lightThemeBtn = document.querySelector('.icon-sun');
const darkThemeBtn = document.querySelector('.icon-moon');

function getThemeEls(arr) {
    return arr.flatMap(item => [...document.querySelectorAll(item)]);
}

function setLightTheme() {
    lightThemeBtn.classList.remove('theme-switcher__icon_show');
    lightThemeBtn.classList.add('theme-switcher__icon_hide');
    darkThemeBtn.classList.add('theme-switcher__icon_show');
    darkThemeBtn.classList.remove('theme-switcher__icon_hide');
    const themeEls = getThemeEls(lightThemeItems);
    themeEls.forEach(el => el.classList.add('light-theme'));
}

function setDarkTheme() {
    lightThemeBtn.classList.add('theme-switcher__icon_show');
    lightThemeBtn.classList.remove('theme-switcher__icon_hide');
    darkThemeBtn.classList.remove('theme-switcher__icon_show');
    darkThemeBtn.classList.add('theme-switcher__icon_hide');
    const themeEls = getThemeEls(lightThemeItems);
    themeEls.forEach(el => el.classList.remove('light-theme'));
}

function toggleTheme(e) {
    if(e.target.classList.contains('icon-sun')) {
        setLightTheme();
        theme = 'light';
    } else if (e.target.classList.contains('icon-moon')) {
        setDarkTheme();
        theme = 'dark';
    }
}

themeBtns.addEventListener('click', toggleTheme);

// to top scroll

const topButton = document.querySelector('.top-button');
const headerContainer = document.querySelector('.header__container');

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const top = entry.target.getBoundingClientRect().top;
        /* const method = headerContainer.offsetHeight < Math.abs(top) ? 'add' : 'remove';
        topButton.classList[method]('top-button_show'); */
        if (headerContainer.offsetHeight < Math.abs(top)) {
            topButton.classList.add('top-button_show');
        } else {
            topButton.classList.remove('top-button_show');
        }
    });
});

observer.observe(headerContainer);
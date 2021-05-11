import menu from './menu.json';
import itemsTemplate from '../templates/gallery-items.hbs';

const THEME_KEY = 'THEME';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxEl = document.querySelector('.theme-switch__toggle');
const menuListEl = document.querySelector('.js-menu');
const body = document.querySelector('body');
const markup = menu.map(itemsTemplate).join('');

menuListEl.insertAdjacentHTML('afterbegin', markup);


if (localStorage.getItem(THEME_KEY) === null) {
    localStorage.setItem(THEME_KEY, Theme.LIGHT);
    body.classList.add(localStorage.getItem(THEME_KEY));
} else {
    body.classList.add(localStorage.getItem(THEME_KEY));
    
    if (localStorage.getItem(THEME_KEY) === Theme.DARK) {
      checkboxEl.checked=true;  
    }
    
}

checkboxEl.addEventListener('change', themeSwitch);

function themeSwitch(evt) {
    
    if (evt.target.checked) {
        localStorage.setItem(THEME_KEY, Theme.DARK);
        body.classList.replace(Theme.LIGHT, Theme.DARK);  
    } else {
        localStorage.setItem(THEME_KEY, Theme.LIGHT);
        body.classList.replace(Theme.DARK, Theme.LIGHT);
    }
}

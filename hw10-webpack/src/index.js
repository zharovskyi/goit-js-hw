import menus from './menu.json';
import './styles.css';
import itemTemplate from './templates/list.hbs';

// ===========================

// Add templste

const ul = document.getElementById('menu');

function buildMarcap(menus) {
    const murkup = menus.map(menu => itemTemplate(menu)).join('');
    ul.insertAdjacentHTML('beforeend', murkup);
}
buildMarcap(menus);

// ========================================
// Add different Theme

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const body = document.querySelector('body');
let toolbar = document.getElementById('theme-switch-control');


// check if are something in localStorage
const persisted = localStorage.getItem('theme');
if (persisted) {
    body.classList.add(JSON.parse(persisted));
    if (JSON.parse(persisted) === Theme.DARK) {
        toolbar.checked = true;
    }
}

// add event on body and change background
toolbar.addEventListener('change', changeTheme);

function changeTheme(e) {
    if (e.target.checked === false) {
        // toolbar.checked = false;
        body.classList.remove(`${Theme.DARK}`);
        body.classList.add(`${Theme.LIGHT}`);
        localStorage.setItem('theme', JSON.stringify(`${Theme.LIGHT}`));

    } else if (e.target.checked === true) {
        // toolbar.checked = true;
        body.classList.remove(`${Theme.LIGHT}`);
        body.classList.add(`${Theme.DARK}`);
        localStorage.setItem('theme', JSON.stringify(`${Theme.DARK}`));

    }
}
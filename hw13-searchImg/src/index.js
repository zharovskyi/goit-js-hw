import './styles.css';
import newsServices from './services/newService.js';
import imageList from './template/imageList.hbs';

const refs = {
    searchForm: document.querySelector('#search-form'),
    ul: document.querySelector('.gallery'),
    loadMore: document.querySelector('button[data-action="load-more"]'),
}

refs.searchForm.addEventListener('submit', searchFormSubmitHendler);
refs.loadMore.addEventListener('click', loadMoreItem);

function searchFormSubmitHendler(e) {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.query.value;
    clearListItem();
    newsServices.searchQuery = inputValue;
    // clean page
    newsServices.resetPage();

    newsServices.fetchImage()
        .then(hits => {
            const murkup = buildListMarkupItem(hits);
            insertListItem(murkup);
            // refs.ul.scrollIntoView();

        });

}

function insertListItem(hits) {
    refs.ul.insertAdjacentHTML('beforeend', hits);
}

function buildListMarkupItem(hits) {
    return imageList(hits);

}

function loadMoreItem(e) {
    newsServices.fetchImage()
        .then(hits => {
            const murkup = buildListMarkupItem(hits);
            insertListItem(murkup);
            refs.ul.scrollIntoView({
                block: "end",
                behavior: "smooth"
            });

        });

}

// Clear list Dom
function clearListItem() {
    refs.ul.innerHTML = '';
}

// window.scrollTo(0,document.body.scrollHeight);
// https://pixabay.com/api/?key=13241537-06d8871706b8937518ecf25ca?q=cat
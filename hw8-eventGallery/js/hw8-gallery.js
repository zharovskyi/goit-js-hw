import image from './gallery-items.js'
// console.log(image);

let ul = document.querySelector('.gallery');
let button = document.querySelector('.button');
let closeButton = document.querySelector('.lightbox__button');
const openModal = document.querySelector('.lightbox');

function createGallery(image){  
    let fragment = document.createDocumentFragment(); 
    image.forEach(element => {
        let li = document.createElement('li');
        li.className = 'gallery__item';
            let galleryLink = document.createElement('a');
            galleryLink.className = 'gallery__link';
            galleryLink.href = element.original; 
            let prevImage = document.createElement('img');
            prevImage.src = element.preview;
            prevImage.alt = element.description;
            prevImage.className = 'gallery__image';
            prevImage.setAttribute('data-source',element.original);
            let span = document.createElement('span');
            span.className = 'gallery__icon';
                let i = document.createElement('i');
                i.className = 'material-icons';
                i.textContent = 'zoom_out_map';
            span.append(i);
            galleryLink.append(prevImage,span);
        li.prepend(galleryLink);
        fragment.append(li);
     });
     ul.prepend(fragment);
 }
 createGallery(image);

 
 ul.addEventListener('click', modalWindow);


 
 function modalWindow(e) {
     e.preventDefault();
    //  console.log(e.target); CLICK UNDER ELEMNT
    // console.log(e.currentTarget); CLICK HIGHER ELEMENT

    
    openModal.classList.add('is-open');
window.addEventListener('keydown', keyPress);
    addImageModal(e.target);

   
     
 }
function addImageModal(target) {
    document.querySelector('.lightbox___image').src = target.dataset.source;
}

let images = document.querySelector('.gallery__image');
openModal.addEventListener('click', close);

function keyPress (e) {
    if(e.code === "Escape") {

        openModal.classList.remove('is-open');
        return; 
    }
    }

function close(e){
    if(e.target.nodeName !== 'IMG'){
    openModal.classList.remove('is-open');
    }
    window.removeEventListener('keydown', keyPress);
}

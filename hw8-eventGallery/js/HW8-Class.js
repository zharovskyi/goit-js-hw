import image from './gallery-items.js'

class Gallery {
    constructor(image) {
        this.image = image;
        this.ul = document.querySelector('.gallery');
        this.ul.addEventListener('click', this.modalWindow.bind(this));
        this.button = document.querySelector('.button');
        this.closeButton = document.querySelector('.lightbox__button');
        this.openModal = document.querySelector('.lightbox');
        this.openModal.addEventListener('click', this.close.bind(this));
        this.images = document.querySelector('.gallery__image');
    }
    createGallery() {
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
            prevImage.setAttribute('data-source', element.original);
            let span = document.createElement('span');
            span.className = 'gallery__icon';
            let i = document.createElement('i');
            i.className = 'material-icons';
            i.textContent = 'zoom_out_map';
            span.append(i);
            galleryLink.append(prevImage, span);
            li.prepend(galleryLink);
            fragment.append(li);
        });
        this.ul.prepend(fragment);
    }


    modalWindow(e) {
        e.preventDefault();
        //  console.log(e.target); CLICK UNDER ELEMNT
        // console.log(e.currentTarget); CLICK HIGHER ELEMENT
        this.openModal.classList.add('is-open');
        window.addEventListener('keydown', this.keyPress.bind(this));
        this.addImageModal(e.target);
    }

    addImageModal(target) {
        document.querySelector('.lightbox___image').src = target.dataset.source;
    }

    keyPress(e) {
        if (e.code === "Escape") {
            this.openModal.classList.remove('is-open');
            return;
        }
    }

    close(e) {
        if (e.target.nodeName !== 'IMG') {
            console.log(e.target);
            this.openModal.classList.remove('is-open');
        }
        window.removeEventListener('keydown', this.keyPress.bind(this));
    }



}

const galleryPage = new Gallery(image);
galleryPage.createGallery();
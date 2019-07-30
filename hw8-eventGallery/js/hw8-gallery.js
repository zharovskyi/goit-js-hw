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





// SLIDER
const sliderUl = document.querySelector('.slider__list');
const width = sliderUl.offsetWidth;
 
function createSliderItem(image) {
    const fragment = document.createDocumentFragment();
    sliderUl.style.width = (image.length * width) + 'px';
    // console.log(sliderUl.style.width);
    image.forEach(el => {
        let li = document.createElement('li');
        li.className = 'slider__listItem';
        li.style.width = sliderUl.offsetWidth;
        let img = document.createElement('img');
        img.src = el.preview;
        img.alt = el.description;
        img.className = 'slider__img';
        li.append(img);
        fragment.append(li);
        // console.log(img.width);
    });
    
    sliderUl.append(fragment);
   
}
createSliderItem(image);

 
let counter = 0;

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
const slider = document.querySelector('.slider');
slider.addEventListener('click',changeImage);

function changeImage(e){
    if(e.target === next) {
        if(counter < image.length - 1)
         counter += 1;
        if(counter === image.length-1) {
            next.classList.add('red');
        }
        if (counter > image.length-1 || counter < image.length-1 ){
            next.classList.remove("red");
        }
    
    } else if (e.target === prev) {
        if(counter > 0) {
            counter -= 1;
            if(counter === 0) {
                prev.classList.add('red');
            }
            // else if (counter != image.length-1){
            //     prev.classList.toggle("red")
            // }
        }
    }

    sliderUl.style.transform = `translateX(${width * -counter +'px'})`;
    sliderUl.style.transition = '1s';
    
}

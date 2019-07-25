import image from './gallery-items.js'
console.log(image);

let ul = document.querySelector('.gallery');
function createGallery(image){  
    let fragment = document.createDocumentFragment(); 
    image.forEach(element => {
        let li = document.createElement('li');
        let prevImage = document.createElement('img');
        prevImage.src = element.preview;
        prevImage.className = 'image';
        li.append(prevImage);
        fragment.append(li);
        console.log(li);
     });
     ul.prepend(fragment);
     console.log(ul);
 }
 createGallery(image);
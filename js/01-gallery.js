import { galleryItems } from './gallery-items.js';
// Change code below this line

document.querySelector('.gallery').addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('gallery__image')) {
        const largeImageSource = event.target.getAttribute('data-source');
        const lightbox = basicLightbox.create(`
        <img src="${largeImageSource}" wigth="800" height="600">
        `);

        lightbox.show();
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        basicLightbox.close();
    }
});

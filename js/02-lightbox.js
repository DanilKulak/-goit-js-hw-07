import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});



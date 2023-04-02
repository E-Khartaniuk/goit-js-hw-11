import { fetchImg } from './JS/fetch-Img-from-form';
import Notiflix from 'notiflix';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { scrolOnImgLoading } from './JS/scrolOnImgLoading';
import { renderMarkup } from './JS/renger-card-markup';
export let page = 1;

const searchForm = document.querySelector('.search-form');
const inputForm = document.querySelector('.input-form');
const loadMorebtnEl = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', searchFoto);
loadMorebtnEl.addEventListener('click', loadMoreImg);

var lightbox = new SimpleLightbox('.gallery a', {
  spinner: true,
  captionsData: 'alt',
  captionDelay: 250,
});

let sumOfLoadImg = 0;

function searchFoto(event) {
  event.preventDefault();

  page = 1;
  formSubmitValue = inputForm.value.trim();

  if (formSubmitValue === '') {
    loadMorebtnEl.classList.add('is-hiden');
    Notiflix.Notify.warning('Please enter your request.');
    return;
  }

  fetchImg(formSubmitValue)
    .then(imgArr => {
      if (imgArr.data.total === 0) {
        Notiflix.Notify.warning(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }

      sumOfLoadImg = 0;
      sumOfLoadImg += imgArr.data.hits.length;
      const photos = imgArr.data.hits;
      gallery.innerHTML = '';

      renderMarkup(photos);
      lightbox.refresh();
      Notiflix.Notify.success(
        `Hooray! We found ${imgArr.data.totalHits} images`
      );

      if (sumOfLoadImg === imgArr.data.totalHits) {
        Notiflix.Notify.warning(
          "We're sorry, but you've reached the end of search results."
        );
        loadMorebtnEl.classList.add('is-hiden');
        return;
      }

      loadMorebtnEl.classList.remove('is-hiden');
    })
    .catch(() => {
      Notiflix.Notify.warning('Щось пішло не так :(');
    });
}

function loadMoreImg(event) {
  loadMorebtnEl.classList.add('is-hiden');
  page += 1;

  fetchImg(formSubmitValue)
    .then(imgArr => {
      const photos = imgArr.data.hits;
      sumOfLoadImg += imgArr.data.hits.length;

      if (imgArr.data.totalHits <= sumOfLoadImg) {
        loadMorebtnEl.classList.add('is-hiden');

        renderMarkup(photos);
        lightbox.refresh();
        scrolOnImgLoading();
        Notiflix.Notify.warning(
          "We're sorry, but you've reached the end of search results."
        );
        return;
      }

      renderMarkup(photos);
      lightbox.refresh();
      scrolOnImgLoading();

      loadMorebtnEl.classList.remove('is-hiden');
    })
    .catch(() => {
      Notiflix.Notify.warning('Щось пішло не так :(');
    });
}

/////////////////=============================////////////////
//  Infinite Scrolling

// function isEndOfPage() {
//   return window.innerHeight + window.scrollY >= document.body.offsetHeight;
// }

// window.addEventListener('scroll', async () => {
//   if (isEndOfPage()) {
//     await loadMoreImg();
//   }
// });

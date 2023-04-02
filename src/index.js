import { fetchImg } from './JS/fetch-Img-from-form';
import Notiflix from 'notiflix';

import { renderMarkup } from './JS/renger-card-markup';
export let page = 1;

const searchForm = document.querySelector('.search-form');
const inputForm = document.querySelector('.input-form');
const loadMorebtnEl = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', searchFoto);
loadMorebtnEl.addEventListener('click', loadMoreImg);

let sumOfLoadImg = 0;

function searchFoto(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  page = 1;
  formSubmitValue = inputForm.value.trim();

  fetchImg(formSubmitValue).then(imgArr => {
    if (imgArr.data.total === 0) {
      Notiflix.Notify.warning(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    sumOfLoadImg = 0;
    sumOfLoadImg += imgArr.data.hits.length;

    const photos = imgArr.data.hits;

    renderMarkup(photos);
    loadMorebtnEl.classList.remove('is-hiden');
  });
}

function loadMoreImg(event) {
  loadMorebtnEl.classList.add('is-hiden');

  page += 1;

  fetchImg(formSubmitValue).then(imgArr => {
    const photos = imgArr.data.hits;
    sumOfLoadImg += imgArr.data.hits.length;

    if (sumOfLoadImg === imgArr.data.totalHits) {
      Notiflix.Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );
      loadMorebtnEl.classList.add('is-hiden');
    }

    renderMarkup(photos);
    loadMorebtnEl.classList.remove('is-hiden');
  });
}

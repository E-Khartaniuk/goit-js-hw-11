import { fetchImg } from './JS/fetch-Img-from-form';
// import axios from 'axios';

const searchForm = document.querySelector('.search-form');
const inputForm = document.querySelector('.input-form');
const gallery = document.querySelector('.gallery');

// console.log(img);

searchForm.addEventListener('submit', searchFoto);

function searchFoto(event) {
  event.preventDefault();

  formSubmitValue = inputForm.value.trim();

  fetchImg(formSubmitValue).then(imgArr => {
    const photos = imgArr.data.hits;
    console.log(photos);
    return renderMarkup(photos);
  });
  // console.log(photos);
}

function renderMarkup(photos) {
  const markup = photos.map(img => {
    return `
        <div class="photo-card">
  <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${img.likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${img.views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${img.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${img.downloads}</b>
    </p>
  </div>
</div>`;
  });

  gallery.innerHTML = markup;
}

const gallery = document.querySelector('.gallery');

export function renderMarkup(photos) {
  let markup = photos
    .map(img => {
      return `<a class="big-img-link" href="${img.largeImageURL}">
        <div class="photo-card">
    <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes: <span class="img-info">${img.likes}</span>
</b>
      </p>
      <p class="info-item">
        <b>Views: <span class="img-info">${img.views}</span>
</b>
      </p>
      <p class="info-item">
        <b>Comments: <span class="img-info"> ${img.comments}</span>
 </b>
      </p>
      <p class="info-item">
        <b>Downloads: <span class="img-info">${img.downloads}</span>
</b>
      </p>
    </div>
  </div>
</a>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}

const gallery = document.querySelector('.gallery');

export function renderMarkup(photos) {
  markup = photos
    .map(img => {
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
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
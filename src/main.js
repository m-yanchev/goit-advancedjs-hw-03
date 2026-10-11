import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import { getImagesByQuery } from "./js/pixabay-api.js";
import { showErrorMessage } from "./js/messages.js"

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();
  if (!query) {
    showErrorMessage('Query cannot be empty');
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(images => {
      if (images.length === 0) {
        showErrorMessage('Sorry, there are no images matching your search query. Please try again!');
        return;
      }
      createGallery(images);
    })
    .catch(error => {
      showErrorMessage(`An error occurred: ${error.message}`);
    })
    .finally(() => {
      hideLoader();
    });
})
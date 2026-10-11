import axios from "axios";

export const getImagesByQuery = (query) => {
  const searchParams = new URLSearchParams({
    key: '57971034-8c5a8e627d304003806052b2f',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return axios.get(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      return response.data.hits;
    })
}
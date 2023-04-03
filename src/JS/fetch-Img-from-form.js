import axios from 'axios';

export async function fetchImg(formSubmitValue, page) {
  try {
    const BASE_URL = 'https://pixabay.com/api';
    const API = 'key=34903513-476090311f5800fa8542a8b0c';

    return await axios.get(
      `${BASE_URL}/?${API}&q=${formSubmitValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
    );
  } catch (error) {
    return error;
  }
}

import axios from 'axios';
import { page } from '../index';

export async function fetchImg(formSubmitValue) {
  try {
    const BASE_URL = 'https://pixabay.com/api';
    const API = 'key=34903513-476090311f5800fa8542a8b0c';
    let currentPage = page;
    page = 1;

    return await axios.get(
      `${BASE_URL}/?${API}&q=${formSubmitValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=40`
    );
  } catch (error) {
    return Notiflix.Notify.warning('Щось пішло не так :(');
  }
}

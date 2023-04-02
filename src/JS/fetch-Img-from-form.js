import axios from 'axios';
import { page } from '../index';

export function fetchImg(formSubmitValue) {
  const BASE_URL = 'https://pixabay.com/api';
  const API = 'key=34903513-476090311f5800fa8542a8b0c';
  page = 1;

  return axios.get(
    `${BASE_URL}/?${API}&q=${formSubmitValue}+flower&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
  );
}

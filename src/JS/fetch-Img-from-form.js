import axios from 'axios';
export function fetchImg(formSubmitValue) {
  const BASE_URL = 'https://pixabay.com/api';
  const API = 'key=34903513-476090311f5800fa8542a8b0c';

  return axios.get(
    `${BASE_URL}/?${API}&q=${formSubmitValue}+flowers&image_type=photo&orientation=horizontal&safesearch=true`
  );
}

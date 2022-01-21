export default function ImageApi(searchQuery, page) {
  const KEY = '24397796-604c3a9fc6ff44cceee5653ad';
  const BASE_URL = 'https://pixabay.com/api/';
  const url = `${BASE_URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url);
}

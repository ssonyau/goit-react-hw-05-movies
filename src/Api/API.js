const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'a5426bdbaf9156d8939bf87c1cb6ad6c';

const fetchQuery = (QUERY_URL, searchOptions = '') => {
  return fetch(`${BASE_URL}/${QUERY_URL}?api_key=${KEY}&${searchOptions}`).then(
    response => {
      if (!response.ok) {
        throw new Error('помилка на сервері або неправильний запит');
      }
      return response.json();
    }
  );
};

export default fetchQuery;

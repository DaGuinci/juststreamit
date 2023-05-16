export async function api_request(type, category='no ctegory') {

  let url = 'http://localhost:8000/api/v1/';

  switch (type) {
    case 'highlight':
      url += 'titles/'
      url += '?page_size=1';
      url += '&sort_by=-imdb_score';
      break;

    case 'category':
      url += 'titles/'
      url += '?page_size=7';
      url += '&genre_contains=';
      url += category;
      url += '&sort_by=-imdb_score';
      break;

    default:
      url = 'http://localhost:8000/api/v1/titles/?page_size=1';
  }


  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData.results;
}
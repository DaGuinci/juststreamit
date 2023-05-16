export async function api_request(type, category='no ctegory') {

  let url = 'http://localhost:8000/api/v1/';
  let result =[];

  switch (type) {
    case 'highlight':
      // récupérer l'id du film
      const url_for_id = url + 'titles/?page_size=1&sort_by=-imdb_score';
      const response_for_id = await fetch(url_for_id);
      const jsonData_for_id = await response_for_id.json();
      const id = jsonData_for_id.results[0].id;

      // Recupérer les infos du film
      const response_for_highlight = await fetch(`${url}titles/${id}`);
      const result_for_highlight = await response_for_highlight.json();
      result.push(result_for_highlight);
      break;

    case 'category':
      // Récupérer les ids des films
      const url_for_ids = url + `titles/?page_size=7&genre_contains=${category}&sort_by=-imdb_score`;
      const response_for_ids = await fetch(url_for_ids);
      const jsonData_for_ids = await response_for_ids.json();
      const results_for_ids = jsonData_for_ids.results;

      // Récupérer les infos de chaque film
      for (let i=0 ; i<results_for_ids.length ; i++){
        const id = results_for_ids[i].id;
        const response_for_movie = await fetch(`${url}titles/${id}`);
        const result_for_movie = await response_for_movie.json();
        result.push(result_for_movie);
      }
      break;

    default:
      url = 'http://localhost:8000/api/v1/titles/?page_size=1';
  }

  return result
}
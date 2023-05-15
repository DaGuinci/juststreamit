export async function api_request(atts) {
  // const result = {
  //   "id": 9,
  //   "url": "http://localhost:8000/api/v1/titles/9",
  //   "imdb_url": "https://www.imdb.com/title/tt0000009/",
  //   "title": "Miss Jerry",
  //   "year": 1894,
  //   "imdb_score": "6.0",
  //   "votes": 154,
  //   "image_url": "https://m.media-amazon.com/images/M/MV5BNjA5Y2ZhYzctNDc1Yy00OGViLWI3NGUtOTYwZmE3NDFiYmIxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY268_CR72,0,182,268_AL_.jpg",
  //   "directors": [
  //       "Alexander Black"
  //   ],
  //   "actors": [
  //       "Blanche Bayliss",
  //       "Chauncey Depew",
  //       "William Courtenay"
  //   ],
  //   "writers": [
  //       "Alexander Black"
  //   ],
  //   "genres": [
  //       "Romance"
  //   ]
  // };

  let url = 'http://localhost:8000/api/v1/titles/?page_size=1';

  switch (atts[0]) {
    case 'highlight':

    default:
      url = 'http://localhost:8000/api/v1/titles/?page_size=1';
  }


  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData.results;
}
// Insérer une image pour le film en highlight
const highlightMovie = document.querySelector('.moviesBlock__highlight');
const movie_img = 'https://m.media-amazon.com/images/M/MV5BNWVkNjUyYjUtZGU1Yi00YTM4LTg5ZGEtYmNlNDAzNWRjODM2XkEyXkFqcGdeQXVyMzE0MjY5ODA@._V1_UY268_CR7,0,182,268_AL_.jpg'
highlightMovie.style.backgroundImage = `url('${movie_img}')`;
const images = ['https://m.media-amazon.com/images/M/MV5BOTU4NWQzMmQtMWU1Ni00NTFlLTg3MDctNTU0ZmViZDQ2NTY0XkEyXkFqcGdeQXVyODMyMTEyMzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
'https://m.media-amazon.com/images/M/MV5BMjQwMTEwMjg3Ml5BMl5BanBnXkFtZTgwMTg0NDIwMjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
'https://m.media-amazon.com/images/M/MV5BMDJkMmQ2MDQtMzRkMy00MTk4LWI0NjItZTJiZTUzYTdiN2ZmXkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_UY268_CR10,0,182,268_AL_.jpg',
'https://m.media-amazon.com/images/M/MV5BZjMxZjMyNzgtY2MxMS00Y2FkLWI3MTEtYmI2YzY4ZGM3NWE0XkEyXkFqcGdeQXVyNDEzMTI3MTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
'https://m.media-amazon.com/images/M/MV5BMzgxZjk1NjUtMTkxMS00YjQ0LTlmNzMtNDUxZDFmMTdmZmM5XkEyXkFqcGdeQXVyNjA5MTAzODY@._V1_UY268_CR6,0,182,268_AL_.jpg']

// Générer les vignettes des catégories
// const fullfillCategoryMovies = (category) => {

//     for (let i=0; i<4; i++) {
//         const img = images[i];
//         const movie_container = document.createElement('div');
//         movie_container.classList.add('movieItem');
//         movie_container.style.backgroundImage = `url('${img})`;
//         category.appendChild(movie_container);
//     }
// }

// Renseigner les cat€gories souhait€es
const categories =[
    'thrillers',
    'comedies'
]

// Cr€er categories blocks
const categories_container = document.querySelector('.moviesBlock__categoriesContainer');
// cr€er les blocks de categories
for (let j=0; j<categories.length; j++) {
    const category_container = document.createElement('div');
    category_container.classList.add('categories__category', `${categories[j]}`);
    categories_container.appendChild(category_container);

    // cr€er le carousel
    const carousel_container = document.createElement('div');
    carousel_container.classList.add('carouselContainer')
    for (let k=1; k<images.length; k++) {
        const image_container = document.createElement('div');
        image_container.classList.add(`image_${k-1}`);

    }

    // remplir les blocks avec les infos correspondantes

}
// const carouselContent = document.querySelector('.moviesBlock__categoryOne__carousel > .movies');
// fullfillCategoryMovies(carouselContent)
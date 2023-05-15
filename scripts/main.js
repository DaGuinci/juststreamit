// Insérer une image pour le film en highlight
const highlight_movie = document.querySelector('.moviesBlock__highlight');
const movie_img = 'https://m.media-amazon.com/images/M/MV5BNWVkNjUyYjUtZGU1Yi00YTM4LTg5ZGEtYmNlNDAzNWRjODM2XkEyXkFqcGdeQXVyMzE0MjY5ODA@._V1_UY268_CR7,0,182,268_AL_.jpg'
highlight_movie.style.backgroundImage = `url('${movie_img}')`;

// Cr€er un mockup d'images
const images = ['https://m.media-amazon.com/images/M/MV5BOTU4NWQzMmQtMWU1Ni00NTFlLTg3MDctNTU0ZmViZDQ2NTY0XkEyXkFqcGdeQXVyODMyMTEyMzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
'https://m.media-amazon.com/images/M/MV5BMjQwMTEwMjg3Ml5BMl5BanBnXkFtZTgwMTg0NDIwMjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
'https://m.media-amazon.com/images/M/MV5BMDJkMmQ2MDQtMzRkMy00MTk4LWI0NjItZTJiZTUzYTdiN2ZmXkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_UY268_CR10,0,182,268_AL_.jpg',
'https://m.media-amazon.com/images/M/MV5BZjMxZjMyNzgtY2MxMS00Y2FkLWI3MTEtYmI2YzY4ZGM3NWE0XkEyXkFqcGdeQXVyNDEzMTI3MTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
'https://m.media-amazon.com/images/M/MV5BZjMxZjMyNzgtY2MxMS00Y2FkLWI3MTEtYmI2YzY4ZGM3NWE0XkEyXkFqcGdeQXVyNDEzMTI3MTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
'https://m.media-amazon.com/images/M/MV5BZjMxZjMyNzgtY2MxMS00Y2FkLWI3MTEtYmI2YzY4ZGM3NWE0XkEyXkFqcGdeQXVyNDEzMTI3MTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
'https://m.media-amazon.com/images/M/MV5BMzgxZjk1NjUtMTkxMS00YjQ0LTlmNzMtNDUxZDFmMTdmZmM5XkEyXkFqcGdeQXVyNjA5MTAzODY@._V1_UY268_CR6,0,182,268_AL_.jpg']

// Renseigner les catégories souhaitées
const categories =[
    'thrillers',
    'comedies'
]

// Créer categories blocks
const categories_container = document.querySelector('.moviesBlock__categories');

// créer les blocks de categories
for (let j=0; j<categories.length; j++) {
    const category_container = document.createElement('div');
    category_container.classList.add('moviesBlock__categories__category', `${categories[j]}`);
    categories_container.appendChild(category_container);

    // Titres les categories
    const title = document.createElement('h2');
    title.classList.add('moviesBlock__categories__category__title');
    title.innerHTML = categories[j];
    category_container.appendChild(title);

    // créer le carousel
    const carousel_container = document.createElement('div');
    carousel_container.classList.add('carouselContainer');
    category_container.appendChild(carousel_container);

    const carousel_content = document.createElement('div');
    carousel_content.classList.add('carouselContent')
    carousel_container.appendChild(carousel_content);

    // Ajouter les films dans le carousel
    for (let k=1; k<images.length; k++) {
        // Créer le conteneur
        const movie_container = document.createElement('div');
        movie_container.classList.add('movie', `movie_${k-1}`);

        // Intégrer l'image du film
        const thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');
        movie_container.appendChild(thumbnail);

        // Intégrer le titre
        const title = document.createElement('h3');
        title.innerHTML = `Les hurluberlus - ${k}`;
        movie_container.appendChild(title);

        // Intégrer le conteneur dans le carousel
        carousel_content.appendChild(movie_container);
        thumbnail.style.backgroundImage = `url('${images[k]}')`;
    }

    // créer un repére de position
    let position = 0;

    // Créer les fleches
    const left_arrow = document.createElement('div');
    left_arrow.classList.add('arrow');
    left_arrow.style.maskImage = 'url(./src/arrow.svg)';
    category_container.appendChild(left_arrow);
    left_arrow.parentNode.insertBefore(left_arrow, carousel_container);

    const right_arrow = document.createElement('div');
    right_arrow.classList.add('arrow');
    right_arrow.style.maskImage = 'url(./src/arrow.svg)';
    right_arrow.style.transform = "scaleX(-1)";
    category_container.appendChild(right_arrow);

    // Rendre les flèches fonctionnelles
    left_arrow.addEventListener("click", function() {
        if (position < 0){
            position ++;
            carousel_content.style.left = `${position*250}px`;
        }
    });

        // Rendre les flèches fonctionnelles
    right_arrow.addEventListener("click", function() {
        if (position >= -3){
            position --;
            carousel_content.style.left = `${position*250}px`;
        }
      });
}
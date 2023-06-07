import { api_request } from './classes/request.js';

// Récupérer les informations sur le film en highlight
let type = 'highlight'
const request = await api_request(type);
const highlight_infos = request[0];

// Remplir le html
const highlight_movie_block = document.querySelector('.moviesBlock__highlight');
const highlight_picture = document.querySelector('.moviesBlock__highlight__image');
highlight_picture.style.backgroundImage = `url('${highlight_infos.image_url}')`;
const highlight_title_tag = document.querySelector('.movieTitle');
highlight_title_tag.innerHTML = highlight_infos.title;
const highlight_description = document.querySelector('.moviesBlock__highlight__description__synopsis');
highlight_description.innerHTML = highlight_infos.description ? highlight_infos.description : 'NC';

// Activer la modale
highlight_movie_block.addEventListener("click", function() {
    fullfill_modale(highlight_infos);
    out_of_modale.style.left = '0';
    modale.style.left = '0';
});

// Préparer le clic hors modale pour fermeture modale
const out_of_modale = document.querySelector('.outOfModale');

// Créer la fenêtre modale
const modale = document.querySelector('.modale');

// remplir la fenetre modale
function fullfill_modale(movie_infos) {
    const datas = [
        ['title', movie_infos.title ? movie_infos.title : 'NC'],
        ['categories', movie_infos.genres ? movie_infos.genres : 'NC'],
        ['date', movie_infos.date_published ? movie_infos.date_published : 'NC'],
        ['rating', movie_infos.votes ? movie_infos.votes : 'NC'],
        ['score', movie_infos.imdb_score ? movie_infos.imdb_score : 'NC'],
        ['directors', movie_infos.directors ? movie_infos.directors : 'NC'],
        ['casting', movie_infos.actors ? movie_infos.actors : 'NC'],
        ['duration', movie_infos.duration ? movie_infos.duration : 'NC'],
        ['countries', movie_infos.countries ? movie_infos.countries : 'NC'],
        ['boxOffice', movie_infos.worldwide_gross_income ? movie_infos.worldwide_gross_income : 'NC'],
        ['synopsis', movie_infos.description ? movie_infos.description : 'NC']
    ];

    const picture = modale.querySelector('.modale__content__picture');
    picture.style.backgroundImage = `url(${movie_infos.image_url})`;


    for (let i=0; i<datas.length; i++) {
        const element = modale.querySelector(`.${datas[i][0]}`);
        element.innerHTML = datas[i][1];
    }

    // Activer le bouton close
    const close = modale.querySelector('.modale__close');
    close.addEventListener("click", function() {
        out_of_modale.style.removeProperty('left');
        modale.style.removeProperty('left');
    });

    out_of_modale.addEventListener("click", function() {
        out_of_modale.style.removeProperty('left');
        modale.style.removeProperty('left');
    });
}

// Renseigner les catégories souhaitées, accompagnée de leur traduction
const categories =[
    ['Drama', 'Drames'],
    ['Comedy','Comedies'],
    ['Crime', 'Crime'],
    // ['History', 'Histoire']
]

// Créer categories blocks
const categories_container = document.querySelector('.moviesBlock__categories');

// créer les blocks de categories
for (let j=0; j<categories.length; j++) {
    // Récupérer la liste des films et leurs informations
    type = 'category';
    const category_infos = await api_request(type, categories[j][0]);

    const category_container = document.createElement('div');
    category_container.classList.add('moviesBlock__categories__category', `${categories[j]}`);
    categories_container.appendChild(category_container);

    // Titrer les categories
    const title = document.createElement('h2');
    title.classList.add('moviesBlock__categories__category__title');
    title.innerHTML = categories[j][1];
    category_container.appendChild(title);

    // créer le carousel
    const carousel_container = document.createElement('div');
    carousel_container.classList.add('carouselContainer');
    category_container.appendChild(carousel_container);
    const carousel_content = document.createElement('div');
    carousel_content.classList.add('carouselContent')
    carousel_container.appendChild(carousel_content);

    if (category_infos.length == 0) {
        carousel_container.innerHTML = 'Aucun film  ne correspond à cette catégorie.';
    } else {
        // Ajouter les films dans le carousel
        for (let k=0; k<7; k++) {
            // Créer le conteneur
            const movie_container = document.createElement('div');
            movie_container.classList.add('movie', `movie_${k+1}`);

            // Intégrer l'image du film
            const thumbnail = document.createElement('div');
            thumbnail.classList.add('thumbnail');
            movie_container.appendChild(thumbnail);

            // Intégrer le titre
            const title = document.createElement('h3');
            title.innerHTML = category_infos[k].title;
            movie_container.appendChild(title);

            // Intégrer le conteneur dans le carousel
            carousel_content.appendChild(movie_container);
            thumbnail.style.backgroundImage = `url('${category_infos[k].image_url}')`;

            // Activer la modale au clic sur un film
            movie_container.addEventListener("click", function() {
                fullfill_modale(category_infos[k]);
                out_of_modale.style.left = '0';
                modale.style.left = '0';
            });
        }
    }

    // créer un repére de position
    let position = 0;

    // Créer les fleches
    const left_arrow = document.createElement('div');
    left_arrow.classList.add('arrow');
    left_arrow.style = '-webkit-mask-image: url("./src/arrow.svg");'
    // left_arrow.style.maskImage = "url(./src/arrow.svg)";
    category_container.appendChild(left_arrow);
    left_arrow.parentNode.insertBefore(left_arrow, carousel_container);

    const right_arrow = document.createElement('div');
    right_arrow.classList.add('arrow');
    right_arrow.style = '-webkit-mask-image: url("./src/arrow.svg");'
    // right_arrow.style.maskImage = "url(./src/arrow.svg)";
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
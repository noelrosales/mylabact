// Whatever you want here...
$(document).ready(function() {
    const MOVIES_API = 'https://pelec4.herokuapp.com';

    //Selectors
    const movieList = $('#movie-list');

    fetch('https://pelec4.herokuapp.com/movies')
        .then(res => res.json())
        .then(movies => {
            console.log('MOVIES', movies);

            movies.forEach(movie => {
                let genreItems = '';

                movie.genres.forEach(genre => {
                    genreItems += `<li>${genre}</li>`
                });

                let movieItem = `<li>
                                    <img src=${movie.poster || 'https://via.placeholder.com/300'} />
                                    <a href="movie.html?id=${movie._id}"><h4>${movie.title}</h4></a>
                                    <small>${movie.plot}</small>
                                    <ul>${genreItems}</ul>
                                 </li>`;
                movieList.append(movieItem);
            });
        })
})
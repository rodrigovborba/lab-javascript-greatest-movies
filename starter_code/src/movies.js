  /* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function calculateAverageMovieRate (arrayMovies) {
    let sum = 0;
    for (let i = 0; i < arrayMovies.length; i++) {
        sum += arrayMovies[i].rate;
    }
    return sum/arrayMovies.length;
}
// Iteration 2: Drama movies - Get the average of Drama Movies

function calculateAverageDramaRate (arrayMoviesDrama) {
    let moviesDramaFiltered = arrayMoviesDrama.filter((movie) => {
        if (movie.genre.includes('Drama')) {
            return true;
        } else {
            return false;
        }
    })
        return calculateAverageMovieRate(moviesDramaFiltered);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average

  /* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function calculateAverageMovieRate (arrayMovies) {
    return arrayMovies.reduce((sum, movie) => sum + movie.rate / arrayMovies.length, 0);
}
/*  let sum = 0;
    for (let i = 0; i < arrayMovies.length; i++) {
        sum += arrayMovies[i].rate;
    }
    return sum/arrayMovies.length;
*/

// Iteration 2: Drama movies - Get the average of Drama Movies

function calculateAverageDramaRate (arrayMoviesDrama) {
    const dramaMovies = arrayMoviesDrama.filter((movie) => {
            return movie.genre.includes('Drama');
        }); 
        return calculateAverageMovieRate(dramaMovies) || 0;
    }
/*  let moviesDramaFiltered = arrayMoviesDrama.filter((movie) => {
        if (movie.genre.includes('Drama')) {
            return true;
        } else {
            return false;
        }
    })
        return calculateAverageMovieRate(moviesDramaFiltered);
}
*/

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


function orderByYear (arrayOfMovies) {
    const copyArray = [ ...arrayOfMovies ];
    return copyArray.sort((a,b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            } else if (a.title.toLowerCase() < b.title.toLowerCase()){
                return -1;
            } else {
                return 0;
            }
        }
    });
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function countSpielbergDramaMovies (movies) {
    return movies.filter(movie => {
        return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
    }).length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movies) {
    return movies.map(movie => movie.title).sort((a,b) => {
        const firstMovieTitle = a.toLowerCase();
        const secondMovieTitle = b.toLowerCase();
        if (firstMovieTitle > secondMovieTitle) {
            return 1;
        } else if (firstMovieTitle < secondMovieTitle) {
            return -1;
        } else {
            return 0;
        }
    })
    .slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    return movies.map(movie => {
        const duration = movie.duration.split(' ');
        let minutes = 0;
        for (let time of duration) {
            if (time.includes('h')) {
                minutes += parseInt(time) * 60;
            } else {
                minutes += parseInt(time);
            }
        }
        return {
            ...movie,
            duration: minutes
        };
    });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if (!movies.length) return null;
    const movieRatesByYear = movies.reduce((accumulator, movie) => {
      const { year, rate } = movie;
      if (!accumulator[year]) {
        accumulator[year] = [];
      }
      accumulator[year].push(rate);
      return accumulator;
    }, {});
    const bestYearRateCombo = Object.entries(movieRatesByYear)
      .map(item => {
        const year = item[0];
        const rateArray = item[1];
        const averageRate = rateArray.reduce((sum, value) => {
          return sum + value / rateArray.length;
        }, 0);
        return { year, averageRate };
      })
      .reduce((bestItem, item) => {
        if (typeof bestItem === 'undefined' || item.averageRate > bestItem.averageRate) {
          return item;
        } else {
          return bestItem;
        }
      });
    return `The best year was ${bestYearRateCombo.year} with an average rate of ${bestYearRateCombo.averageRate}`;
  }
  /*
  // Filipe's Solution
  function bestYearAvg(someArray) {
    if (someArray.length === 0) {
      return null;
    } else {
      const moviesByYear = orderByYear(someArray);
  
      // control variables
      let lastCheckedYear = 0;
      let biggestAverage = 0;
      let bestYear = 0;
  
      for (i = 0; i < moviesByYear.length; i++) {
        if (moviesByYear[i].year > lastCheckedYear) {
          // Filter by the year we are at
  
          const justThisYearMovies = moviesByYear.filter(value => {
            if (value.year === moviesByYear[i].year) {
              return true;
            } else {
              return false;
            }
          });
  
          // calculate average of the year and save rate and year
  
          if (calculateAverageMovieRate(justThisYearMovies) > biggestAverage) {
            biggestAverage = calculateAverageMovieRate(justThisYearMovies);
            bestYear = moviesByYear[i].year;
          }
          lastCheckedYear = moviesByYear[i].year;
        }
      }
      return `The best year was ${bestYear} with an average rate of ${biggestAverage}`;
    }
  }
  */
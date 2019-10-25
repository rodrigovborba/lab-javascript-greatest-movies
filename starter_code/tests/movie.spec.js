/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

describe('Get the average rate - calculateAverageMovieRate', () => {
  it('should define calculateAverageMovieRate', () => {
    expect(typeof calculateAverageMovieRate).toBe('function');
  });

  it('should return a number my friend! Check parseFloat method!', () => {
    expect(typeof calculateAverageMovieRate(MOVIES)).toBe('number');
  });

  it('should return the average rate of 2 movies with rate 8 each!', () => {
    expect(calculateAverageMovieRate([{ rate: 8 }, { rate: 8 }])).toBe(8);
  });

  it('should be rounded to 2 decimals digits', () => {
    expect(
      calculateAverageMovieRate([{ rate: 8 }, { rate: 9 }, { rate: 9 }, { rate: 7 }])
    ).toBeCloseTo(8.25, 2);
  });

  it('should be rounded to nearest hundredths ', () => {
    expect(calculateAverageMovieRate([{ rate: 8 }, { rate: 9 }, { rate: 9 }])).toBeCloseTo(8.67, 2);
  });
});

describe('Average rate of Drama Movies - calculateAverageDramaRate', () => {
  it('should define calculateAverageDramaRate', () => {
    expect(typeof calculateAverageDramaRate).toBe('function');
  });

  it('should return a number!', () => {
    expect(typeof calculateAverageDramaRate(MOVIES)).toBe('number');
  });

  it('should return the rate of a single element array!', () => {
    expect(calculateAverageDramaRate([{ genre: ['Drama'], rate: 8 }])).toBe(8);
  });

  it('should return average even if one of the movies does not have rate!', () => {
    expect(
      calculateAverageDramaRate([{ genre: ['Drama'], rate: 8 }, { genre: ['Drama'], rate: '' }])
    ).toBe(4);
  });

  it('should return the average of the array!', () => {
    expect(
      calculateAverageDramaRate([
        { genre: ['Drama'], rate: 8 },
        { genre: ['Drama'], rate: 9 },
        { genre: ['Drama'], rate: 7 }
      ])
    ).toBe(8);
  });

  it('should return the average of the array, float!', () => {
    expect(
      calculateAverageDramaRate([
        { genre: ['Drama'], rate: 9 },
        { genre: ['Drama'], rate: 9 },
        { genre: ['Drama'], rate: 7 }
      ])
    ).toBe((9 + 9 + 7) / 3);
  });

  it('should return the average of only drama movies', () => {
    expect(
      calculateAverageDramaRate([
        { genre: ['Drama'], rate: 8 },
        { genre: ['Romance'], rate: 9 },
        { genre: ['Drama'], rate: 7 }
      ])
    ).toBe(7.5);
  });

  it('should  return 0 if there is no Drama movie!', () => {
    expect(
      calculateAverageDramaRate([
        { genre: ['Action'], rate: 8 },
        { genre: ['Romance'], rate: 9 },
        { genre: ['Sci-Fi'], rate: 7 }
      ])
    ).toBe(0);
  });
});

describe('Order the movies by year - orderByYear', () => {
  it('should define orderByYear', () => {
    expect(typeof orderByYear).toBe('function');
  });

  it('should  return an array', () => {
    expect(typeof orderByYear(MOVIES)).toBe('object');
  });

  it('should  return the element in a single element array', () => {
    expect(orderByYear([{ year: '1982' }])).toEqual([{ year: '1982' }]);
  });

  it('should return the new array in ascending order', () => {
    expect(orderByYear([{ year: '2002' }, { year: '1982' }, { year: '1995' }])).toEqual([
      { year: '1982' },
      { year: '1995' },
      { year: '2002' }
    ]);
  });

  it('if two movies have the same year, order them alphabetically by their title', () => {
    expect(
      orderByYear([
        { title: 'abc', year: '2002' },
        { title: 'bac', year: '1982' },
        { title: 'aab', year: '1982' }
      ])
    ).toEqual([
      { title: 'aab', year: '1982' },
      { title: 'bac', year: '1982' },
      { title: 'abc', year: '2002' }
    ]);
  });
});

describe('Get how many movies - countSpielbergDramaMovies', () => {
  it('should define countSpielbergDramaMovies', () => {
    expect(typeof countSpielbergDramaMovies).toBe('function');
  });

  it('should  return a number', () => {
    expect(typeof countSpielbergDramaMovies(MOVIES)).toBe('number');
  });

  it('should  return 0 if the array is empty', () => {
    expect(countSpielbergDramaMovies([])).toBe(0);
  });

  it('should return 0 if he did not direct none of the movies in the array', () => {
    expect(
      countSpielbergDramaMovies([
        {
          director: 'James McTeigue',
          genre: ['Action', 'Drama', 'Thriller']
        }
      ])
    ).toBe(0);
  });

  it('should only return drama movies', () => {
    expect(
      countSpielbergDramaMovies([
        {
          director: 'Steven Spielberg',
          genre: ['Action', 'Drama', 'Thriller']
        },
        {
          director: 'Steven Spielberg',
          genre: ['Action']
        }
      ])
    ).toBe(1);
  });

  it('should only return Steven Spielberg movies', () => {
    expect(
      countSpielbergDramaMovies([
        {
          director: 'Steven Spielberg',
          genre: ['Action', 'Drama', 'Thriller']
        },
        {
          director: 'James McTeigue',
          genre: ['Action', 'Drama']
        },
        {
          director: 'Karl Moses',
          genre: ['Thriller', 'Drama']
        },
        {
          director: 'Steven Spielberg',
          genre: ['Drama', 'Thriller']
        }
      ])
    ).toBe(2);
  });

  it('should  return 4', () => {
    expect(countSpielbergDramaMovies(MOVIES)).toBe(4);
  });
});

describe('Order alphabetically - orderAlphabetically', () => {
  it('should define orderAlphabetically', () => {
    expect(typeof orderAlphabetically).toBe('function');
  });

  it('should return an array', () => {
    expect(typeof orderAlphabetically([])).toBe('object');
  });

  it('should only return the title of the movies (each element should be a string)', () => {
    expect(typeof orderAlphabetically([{ title: 'aab' }])[0]).toBe('string');
  });

  it('should return every movie if there are less than 20', () => {
    const moviesArr = [{ title: 'aab' }, { title: 'bab' }, { title: 'acb' }];
    expect(orderAlphabetically(moviesArr).length).toEqual(3);
  });

  it('should return only 20 movies if there are more than 20', () => {
    const moviesArr = [
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' }
    ];

    expect(orderAlphabetically(moviesArr).length).toEqual(20);
  });

  it('should order them alphabetically.', () => {
    const moviesArr = [
      { title: 'aab' },
      { title: 'aaa' },
      { title: 'abc' },
      { title: 'acb' },
      { title: 'abb' }
    ];

    expect(orderAlphabetically(moviesArr)).toEqual(['aaa', 'aab', 'abb', 'abc', 'acb']);
  });

  it('should return the top20 after ordering them alphabetically.', () => {
    const moviesArr = [
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aaa' },
      { title: 'bbb' },
      { title: 'anc' },
      { title: 'kns' },
      { title: 'zds' },
      { title: 'pow' },
      { title: 'gda' },
      { title: 'res' },
      { title: 'ter' },
      { title: 'bca' },
      { title: 'ccc' },
      { title: 'bbt' },
      { title: 'qas' },
      { title: 'kmn' },
      { title: 'frt' },
      { title: 'afb' },
      { title: 'agb' },
      { title: 'apo' },
      { title: 'poa' },
      { title: 'cdf' },
      { title: 'sea' },
      { title: 'lom' },
      { title: 'acs' },
      { title: 'qas' },
      { title: 'mns' },
      { title: 'bvc' },
      { title: 'gha' },
      { title: 'lkj' },
      { title: 'era' },
      { title: 'ert' },
      { title: 'tex' },
      { title: 'zas' },
      { title: 'pol' }
    ];

    expect(orderAlphabetically(moviesArr)).toEqual([
      'aaa',
      'aab',
      'acb',
      'acs',
      'afb',
      'agb',
      'anc',
      'apo',
      'bab',
      'bbb',
      'bbt',
      'bca',
      'bvc',
      'ccc',
      'cdf',
      'era',
      'ert',
      'frt',
      'gda',
      'gha'
    ]);
  });
});

describe('Turn duration of the movies - turnHoursToMinutes', () => {
  it('should define turnHoursToMinutes', () => {
    expect(typeof turnHoursToMinutes).toBe('function');
  });

  it('should  return an array', () => {
    expect(typeof turnHoursToMinutes(MOVIES)).toBe('object');
  });

  it('should  return a new array, not update the original one', () => {
    expect(turnHoursToMinutes(MOVIES)).not.toBe(MOVIES);
  });

  it('should return the duration of the movie as a number', () => {
    expect(typeof turnHoursToMinutes(MOVIES)[0].duration).toBe('number');
  });

  it('should return the duration of the movie as the correct number to a short movie - 31 minutes', () => {
    const movieTry = [{ duration: '0h 31min' }];

    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(31);
  });

  it('should return the duration of the movie as the correct number for really long movie - 341 minutes', () => {
    const movieTry = [{ duration: '5h 41min' }];

    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(341);
  });

  it('should return the correct number when the duration is only in hours', () => {
    const movieTry = [{ duration: '2h' }];

    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(120);
  });

  it('should return the correct number when the duration is only in minutes', () => {
    const movieTry = [{ duration: '54min' }];

    expect(turnHoursToMinutes(movieTry)[0].duration).toBe(54);
  });
});

describe('Best year average - bestYearAvg', () => {
  it('should define bestYearAvg', () => {
    expect(typeof bestYearAvg).toBe('function');
  });

  it('should  return null if the array is empty', () => {
    expect(bestYearAvg([])).toBe(null);
  });

  it('should  return the correct answer to a single element array', () => {
    expect(bestYearAvg([{ year: '2007', rate: 8 }])).toEqual(
      'The best year was 2007 with an average rate of 8'
    );
  });

  it('should  return the correct answer to a multiple elements array', () => {
    expect(bestYearAvg(MOVIES)).toEqual('The best year was 1972 with an average rate of 9.2');
  });

  it('should  return the oldest year when there is a tie', () => {
    const newMoviesArr = [
      { year: '2000', rate: 9 },
      { year: '2000', rate: 8 },
      { year: '1978', rate: 10 },
      { year: '1978', rate: 7 }
    ];

    expect(bestYearAvg(newMoviesArr)).toEqual('The best year was 1978 with an average rate of 8.5');
  });
});

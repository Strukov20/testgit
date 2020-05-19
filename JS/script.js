let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const questions1 = prompt('Один из последних просмотренных фильмов?', ''),
      questions2 = prompt('На сколько оцените его?', ''),
      questions3 = prompt('Один из последних просмотренных фильмов?', ''),
      questions4 = prompt('На сколько оцените его?', '');


personalMovieDB.movies[questions1] = questions2;
personalMovieDB.movies[questions3] = questions4;

// let answer = (` '${questions1}' : '${questions2}', '${questions3}' : '${questions4}' `);

// personalMovieDB.movies = answer;

console.log(personalMovieDB);

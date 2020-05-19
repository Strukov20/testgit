let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for(let i = 0; i < 2; i++){
    const questions1 = prompt('Один из последних просмотренных фильмов?', ''),
          questions2 = prompt('На сколько оцените его?', '');

    if(questions1 != null && questions2 != null && questions1 != '' && questions2 != '' && questions1.length < 50)
    {
        personalMovieDB.movies[questions1] = questions2;
        console.log('OK!');
    } else {
        console.log('error!');
        i--;
    }


}


if(numberOfFilms.count < 10){
    alert('Просмотрено довольно мало фильмов!');
} else if(numberOfFilms.count >= 10 && numberOfFilms.count < 30) {
    alert('Вы класный зритель!');
} else if(numberOfFilms.count >= 30){
    alert('Вы киноман!');
} else {
    alert('Error!!!');
}
console.log(personalMovieDB);

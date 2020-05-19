let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilms(){
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
}

//rememberMyFilms();



function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов!');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы класный зритель!');
    } else if(personalMovieDB.count >= 30){
        console.log('Вы киноман!');
    } else {
        console.log('Error!!!');
    }
}

//detectPersonalLevel();

function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGeneres(){
    for(let i = 1; i < 4; i++){
        const q = prompt(`Ваш любимий жанр ${i}`, '');
        personalMovieDB.genres.push(q);
    } 
}
writeYourGeneres();


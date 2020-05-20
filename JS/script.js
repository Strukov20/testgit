
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    }, rememberMyFilms: function(){
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
    }, detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов!');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы класный зритель!');
        } else if(personalMovieDB.count >= 30){
            console.log('Вы киноман!');
        } else {
            console.log('Error!!!');
        }
    }, showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    }, toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }, writeYourGeneres: function(){
        for(let i = 1; i < 4; i++){
            let genre = prompt(`Ваш любимий жанр ${i}`, '');
            if(genre === null || genre === ''){
                console.log('Error! Вы ввели некоректные дание или не ввели вообше!');
                i--;
            } else {
                //personalMovieDB.genres[i - 1] = genre; //альтернативний варіант пушу в масив.
                personalMovieDB.genres.push(genre);
                
            }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимий жанр ${i + 1} - ето ${item}`);
        });
        } 
    }
};

// console.log(Object.keys(personalMovieDB).length); // кількість елементів об'єкта
// console.log(Object.keys(personalMovieDB)); // вивод всіх елементів об'єкта



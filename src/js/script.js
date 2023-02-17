'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films do you watch?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN
            (personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films do you watch?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('One of last film what you watch?', '').trim(),
                  b = prompt('Set raiting for this film', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('few movies watched');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('a good number of movies have been watched');
        }
        else if (personalMovieDB.count >= 30 && personalMovieDB.count < 50) {
            console.log('You are cineman');
        } else {
            console.log('You are crazy');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toogleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`What your prefer genres movie ${i}`).toLowerCase();

            if (genre == '' || genre == null) {
                console.log('You write mistake information');
                i--;
            } else { personalMovieDB.genres[i - 1] = genre; }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Love genre ${i + 1} - this ${item}`);
        });
    }
};

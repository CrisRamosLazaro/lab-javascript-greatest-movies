// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    return directorsArray = moviesArray.map(movie => movie.director)
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const cleanedUpDirectorsArr = (moviesArray) => {
    const repeatedDirectors = getAllDirectors(moviesArray)
    return repeatedDirectors.filter(director, index => repeatedDirectors.indexOf(director) === index)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    else {
        const spielbergDramas = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
        return spielbergDramas.length
    }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    else {
        const result = moviesArray.reduce((acc, movie) => {

            if (!movie.score) {
                movie.score = 0
            }
            return acc + movie.score
        }, 0) / moviesArray.length
        return Number(result.toFixed(2))
    }
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'))
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedArray = [...moviesArray]
    const orderedMovies = orderedArray.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year
        } else {
            return a.title.localeCompare(b.title)
        }
    })

    return orderedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const sortedCopy = moviesArray.map(movie => movie.title)
    const top20Movies = sortedCopy.sort()

    return top20Movies.slice(0, 20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const copiedArr = JSON.parse(JSON.stringify(moviesArray))
    return copiedArr.map(movie => {

        let hours = 0
        let minutes = 0

        if (movie.duration.includes('h')) {
            hours = Number(movie.duration.slice(0, movie.duration.indexOf('h'))) * 60
            if (movie.duration.includes('min')) {
                minutes = Number(movie.duration.slice(movie.duration.indexOf('h') + 2, movie.duration.indexOf('min')))
            }
        } else {
            minutes = Number(movie.duration.slice(0, movie.duration.indexOf('min')))
        }

        movie.duration = hours + minutes
        return movie

    })
}


// BONUS - Iteration 8: Best yearly score average
function bestYearAvg(moviesArray) {

    if (moviesArray.length === 0) {
        return null
    }

    const calcArr = moviesArray.reduce((acc, currentMovie) => {

        let year = currentMovie.year
        let score = currentMovie.score

        const existingYear = acc.find(movie => movie.year === year)

        if (existingYear) {
            existingYear.count++
            existingYear.score += score
            existingYear.avg = existingYear.score / existingYear.count

        } else {
            acc.push({ year: year, count: 1, score: score, avg: score })
        }
        return acc

    }, []).sort((a, b) => b.avg - a.avg || a.year - b.year)

    return `The best year was ${calcArr[0].year} with an average score of ${calcArr[0].avg}`
}

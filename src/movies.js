// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directors = moviesArray.map((eachMovie) => {
        return eachMovie.director
    })

    /*function clearArray(directorsUnique) {
        let uniqueDirectors = Array.from(new Set(directorsUnique))
        return uniqueDirectors
    }*/


    return directors

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const spielbergDrama = moviesArray.filter((eachMovie) => {
        return eachMovie.director.includes('Spielberg') && eachMovie.genre.includes('Drama')

    })

    return spielbergDrama.length

}

console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    } else {
        const topFlickSum = moviesArray.reduce((acc, eachMovie) => {

            if (!eachMovie.score) {
                eachMovie.score = 0
            }
            return acc + eachMovie.score
        }, 0)

        const topFlickAvg = topFlickSum / moviesArray.length
        const roundedAvg = Number(topFlickAvg.toFixed(2)) //why does it become a string?!?!??!?!?!

        return roundedAvg
    }



}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaList = moviesArray.filter((eachMovie) => {
        return eachMovie.genre.includes('Drama')
    })

    if (dramaList.length === 0) {
        return 0
    } else {

        const dramaSum = dramaList.reduce((acc, eachDrama) => {
            return acc + eachDrama.score
        }, 0)

        const dramaAvg = dramaSum / dramaList.length
        const roundedDramaAvg = Number(dramaAvg.toFixed(2))

        return roundedDramaAvg


    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    const yearOrder = moviesArrayCopy.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year
        } else {
            return a.title.localeCompare(b.title)
        }

    })

    return yearOrder


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const moviesArrayAlphaCopy = JSON.parse(JSON.stringify(moviesArray))

    const alphaOrder = moviesArrayAlphaCopy.map((eachMovie) => {

        return eachMovie.title
    })

    alphaOrder.sort() //why? shouldn't it be alphaOrder.sort((a, b) => {return a.title.localeCompare(b.title)}) ???

    if (alphaOrder.length > 20) {

        return alphaOrder.slice(0, 20)
    }

    return alphaOrder
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const movieTimes = moviesArray.map((eachFilm) => {

        let hoursToMin = Number(eachFilm.duration[0])

        hoursToMin *= 60

        const minToMin = Number(eachFilm.duration[3] + eachFilm.duration[4])

        const timeInMin = hoursToMin + minToMin

        return timeInMin

    })

    let movieListUpdated = moviesArray.map((eachFilm) => {
        movieListUpdated.duration = movieTimes
    })



    return movieListUpdated // --returning the array with the times in minutes just so the code runs



    // TRYING TO REPLACE THE VALUE OF THE DURATION KEY WITH THE NEW VALUE OBTAINED IN THE ARRAY MOVIETIMES

    /* ATTEMPT WITH .MAP()
    
    const moviesWithTimeInMin = moviesArray.map((eachFilm) => {    
      return eachFilm.duration = movieTimes[i]
     })
     
     return moviesWithTimeInMin*/

    /* ATTEMPT WITH .FOREACH()
    
    const moviesWithTimeInMin = moviesArray.forEach((eachFilm, i) => {
      eachFilm.duration = movieTimes[i]
    })
    
    return moviesWithTimeInMin*/

    /* ATTEMPT WITH FOR
    
    let moviesWithTimeInMin = moviesArray
    
    for (i = 0; i < moviesWithTimeInMin.length; i++) {
      moviesWithTimeInMin.duration = movieTimes[i]
    }
   
    return moviesWithTimeInMin*/


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }

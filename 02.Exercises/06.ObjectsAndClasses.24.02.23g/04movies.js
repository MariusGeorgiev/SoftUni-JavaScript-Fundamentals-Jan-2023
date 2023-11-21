function movies(movieData) {

  for(let text of movieData) {
    let movieInfo = {};
    if(text.includes("addMovie")) {
        let movieName = text.replace("addMovie ", "")
        movieInfo.name = movieName;
        for(second of movieData) {
            if(second.includes(`${movieName} directedBy`)) {
                let director = second.replace(`${movieName} directedBy `, "")
                movieInfo.director = director;
            }
            if(second.includes(`${movieName} onDate`)) {
                let date = second.replace(`${movieName} onDate `, "");
                movieInfo.date = date;
            }
        }
        if(Object.keys(movieInfo).length === 3) {
            console.log(JSON.stringify(movieInfo));
        }
    }

  }

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])
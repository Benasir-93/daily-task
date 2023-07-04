class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
  }
}

// Creating an instance of the Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Testing the getPG method
const movies = [
  new Movie("avengers", "marvel", "PG"),
  new Movie("harry potter", "warner bros", "R"),
  new Movie("pacific rim", "mgm", "PG-13"),
  new Movie("titanic", "paramount", "PG"),
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);

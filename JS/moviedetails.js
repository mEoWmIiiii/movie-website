const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="movie-details-overlay">
      <div className="movie-details-container">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div
          className="movie-backdrop"
          style={{ backgroundImage: `url(${movie.backdropImage})` }}
        >
          <div className="content-wrapper">
            <div className="movie-info">
              <h1>{movie.title}</h1>

              <div className="movie-meta">
                <span className="genre-tags">
                  {movie.genres.map((genre) => (
                    <span key={genre} className="genre-pill">
                      {genre}
                    </span>
                  ))}
                </span>

                <div className="runtime-date">
                  <span>{movie.runtime}</span>
                  <span className="separator">|</span>
                  <span>{movie.releaseDate}</span>
                </div>
              </div>

              <p className="description">{movie.description}</p>

              <div className="rating">
                <span className="heart-icon">❤️</span>
                <span className="rating-value">{movie.rating}</span>
              </div>

              <div className="action-buttons">
                <button className="watch-trailer">Watch Trailer</button>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

const movieData = {
  'while-you-were-sleeping': {
    title: 'While You Were Sleeping',
    synopsis:
      "A transit worker pulls a commuter off the tracks seconds before the arrival of a train. While the man is in a coma, his family mistakes her for his fiancée and she doesn't correct them. Things get more complicated when she falls for his brother.",
    duration: '1h 43min',
    genre: 'Romance, Comedy, Drama',
    releaseDate: 'April 21, 1995',
    director: 'Jon Turteltaub',
    posterUrl: '/img/1.jpeg', // This should match the image path from your sample.html
    rating: '4.5',
  },
  // Add other movies here similarly
};

// Get movie ID from URL parameter
function getMovieIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// Function to load movie details
function loadMovieDetails() {
  const movieId = getMovieIdFromUrl();
  const movie = movieData[movieId];

  if (movie) {
    document.getElementById('movieTitle').textContent = movie.title;
    document.getElementById('movieSynopsis').textContent = movie.synopsis;
    document.getElementById('duration').textContent = movie.duration;
    document.getElementById('genre').textContent = movie.genre;
    document.getElementById('releaseDate').textContent = movie.releaseDate;
    document.getElementById('director').textContent = movie.director;
    document.getElementById('moviePoster').src = movie.posterUrl;
    document.getElementById('movieRating').textContent = movie.rating;
  } else {
    console.error('Movie not found');
  }
}

// Load movie details when page loads
document.addEventListener('DOMContentLoaded', loadMovieDetails);

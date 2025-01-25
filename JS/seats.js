const movies = [
  {
    id: 1,
    title: 'Inception',
    description: 'A mind-bending sci-fi thriller about dream infiltration',
    poster: 'img/inception.jpg',
    price: 12.5,
    times: ['10:00 AM', '1:30 PM', '4:45 PM', '8:00 PM'],
  },
  {
    id: 2,
    title: 'The Matrix',
    description:
      'A computer programmer discovers the hidden reality of the world',
    poster: 'img/matrix.jpg',
    price: 11.0,
    times: ['11:15 AM', '2:30 PM', '5:45 PM', '9:00 PM'],
  },
  {
    id: 3,
    title: 'Interstellar',
    description: 'A journey through space and time to save humanity',
    poster: 'img/interstellar.jpg',
    price: 13.0,
    times: ['12:00 PM', '3:30 PM', '7:00 PM'],
  },
];

function renderMovies() {
  const moviesContainer = document.getElementById('moviesContainer');
  moviesContainer.innerHTML = movies
    .map(
      (movie) => `
        <div class="movie-card">
            <img src="${movie.poster}" alt="${
        movie.title
      }" class="movie-poster">
            <div class="movie-info">
                <h2 class="movie-title">${movie.title}</h2>
                <p class="movie-description">${movie.description}</p>
                <div class="movie-showtimes">
                    ${movie.times
                      .map(
                        (time) => `
                        <button class="showtime-btn" data-movie-id="${movie.id}" data-time="${time}">
                            ${time}
                        </button>
                    `
                      )
                      .join('')}
                </div>
                <div class="movie-price">
                    <span>Price: $${movie.price.toFixed(2)}</span>
                    <button class="book-btn" data-movie-id="${
                      movie.id
                    }">Book Now</button>
                </div>
            </div>
        </div>
    `
    )
    .join('');

  // Add event listeners for booking
  document.querySelectorAll('.book-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const movieId = e.target.dataset.movieId;
      localStorage.setItem('selectedMovieId', movieId);
      window.location.href = 'seats.html';
    });
  });

  document.querySelectorAll('.showtime-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const movieId = e.target.dataset.movieId;
      const time = e.target.dataset.time;
      localStorage.setItem('selectedMovieId', movieId);
      localStorage.setItem('selectedShowtime', time);
      window.location.href = 'seats.html';
    });
  });
}

// Call render function when page loads
document.addEventListener('DOMContentLoaded', renderMovies);

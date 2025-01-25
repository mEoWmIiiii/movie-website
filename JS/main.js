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

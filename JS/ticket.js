document.addEventListener('DOMContentLoaded', () => {
  const selectedMovieId = localStorage.getItem('selectedMovieId');
  const selectedShowtime = localStorage.getItem('selectedShowtime');
  const selectedSeatsRaw = localStorage.getItem('selectedSeats');

  const movieTitleEl = document.getElementById('movieTitle');
  const showtimeEl = document.getElementById('movieShowtime');
  const seatsEl = document.getElementById('selectedSeats');
  const totalPriceEl = document.getElementById('totalPrice');
  const ticketNumberEl = document.getElementById('ticketNumber');

  // Find selected movie
  const selectedMovie = movies.find((m) => m.id == selectedMovieId);

  // Parse selected seats
  const selectedSeats = JSON.parse(selectedSeatsRaw);

  // Set ticket details
  movieTitleEl.textContent = selectedMovie.title;
  showtimeEl.textContent = selectedShowtime;
  seatsEl.textContent = selectedSeats.join(', ');

  // Calculate total price
  const totalPrice = (selectedSeats.length * selectedMovie.price).toFixed(2);
  totalPriceEl.textContent = `$${totalPrice}`;

  // Generate ticket number
  const ticketNumber = `CIN${Math.floor(Math.random() * 1000000)}`;
  ticketNumberEl.textContent = ticketNumber;

  // Print ticket functionality
  document.getElementById('printTicket').addEventListener('click', () => {
    window.print();
  });
});

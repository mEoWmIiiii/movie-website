let seats = document.querySelector('.all-seats');
for (let i = 0; i < 59; i++) {
  let randint = Math.floor(Math.random() * 2);
  let booked = randint === 1 ? 'booked' : '';

  seats.insertAdjacentHTML(
    'beforeend',
    `<input type="checkbox" name="tickets" id="s${i + 2}"/>
        <label for="s${i + 2}" class="seat ${booked}"></label>`
  );
}

let tickets = seats.querySelectorAll('input');
tickets.forEach((ticket) => {
  ticket.addEventListener('change', () => {
    let amount = document.querySelector('.amount').innerHTML;
    let count = document.querySelector('.count').innerHTML;

    amount = Number(amount);
    count = Number(count);

    if (ticket.checked) {
      count += 1;
      amount += 200;
    } else {
      count -= 1;
      amount -= 200;
    }
    document.querySelector('.amount').innerHTML = amount;
    document.querySelector('.count').innerHTML = count;
  });
});

// Add this function to your existing seats.js file
function proceedToBooking() {
  // Get selected seats
  const selectedSeats = Array.from(
    document.querySelectorAll('.seat.selected')
  ).map((seat) => seat.getAttribute('for'));

  // Get the total amount
  const totalAmount = document.querySelector('.amount').textContent;

  // Get selected date and time
  const selectedDate = document.querySelector(
    'input[name="date"]:checked + label .date'
  ).textContent;
  const selectedDay = document.querySelector(
    'input[name="date"]:checked + label .day'
  ).textContent;
  const selectedTime = document.querySelector(
    'input[name="time"]:checked + label'
  ).textContent;

  // Get movie title
  const movieTitle = document.getElementById('movieTitle').textContent;

  // Check if seats are selected
  if (selectedSeats.length === 0) {
    alert('Please select at least one seat before booking.');
    return;
  }

  // Create URL with parameters
  const ticketUrl =
    `ticket.html?` +
    `movie=${encodeURIComponent(movieTitle)}` +
    `&seats=${encodeURIComponent(selectedSeats.join(', '))}` +
    `&price=${encodeURIComponent(totalAmount)}` +
    `&date=${encodeURIComponent(selectedDay + ' ' + selectedDate)}` +
    `&time=${encodeURIComponent(selectedTime)}`;

  // Redirect to ticket page
  window.location.href = ticketUrl;
}

// Add this to your existing seat selection logic to enable/disable the book button
function updateBookButton() {
  const bookButton = document.querySelector('.book-btn');
  const selectedSeats = document.querySelectorAll('.seat.selected');

  if (selectedSeats.length > 0) {
    bookButton.removeAttribute('disabled');
    bookButton.style.opacity = '1';
    bookButton.style.cursor = 'pointer';
  } else {
    bookButton.setAttribute('disabled', 'true');
    bookButton.style.opacity = '0.5';
    bookButton.style.cursor = 'not-allowed';
  }
}

// Make sure to call updateBookButton() whenever seats are selected/deselected
// Add this to your existing seat click handler
document.querySelector('.all-seats').addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('booked')
  ) {
    e.target.classList.toggle('selected');
    // Your existing seat selection logic here
    updateBookButton();
  }
});

// Initialize button state on page load
document.addEventListener('DOMContentLoaded', updateBookButton);

// Simple retrieval of the text
document.getElementById('movieTitle').textContent =
  localStorage.getItem('selectedMovie');

// When confirming seat selection
function confirmSeats() {
  // Store the selected seats and other details
  localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
  localStorage.setItem('movieTitle', movieTitle);
  localStorage.setItem('showtime', showtime);
  localStorage.setItem('totalPrice', totalPrice);

  // Navigate to ticket page
  window.location.href = 'ticket.html';
}

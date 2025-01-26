// Get data from URL parameters
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);

  // Populate ticket details from URL parameters
  document.getElementById('movieTitle').textContent =
    urlParams.get('movie') || 'Movie Title';
  document.getElementById('movieShowtime').textContent = `${
    urlParams.get('date') || 'Date'
  } ${urlParams.get('time') || 'Time'}`;
  document.getElementById('selectedSeats').textContent =
    urlParams.get('seats') || 'Selected Seats';
  document.getElementById('totalPrice').textContent = `$${
    urlParams.get('price') || '0'
  }`;
  document.getElementById('ticketNumber').textContent = `Ticket #${Math.random()
    .toString(36)
    .substr(2, 9)}`;
});

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const formData = {
    fullName: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    // Add other ticket details as needed
  };

  // Here you can add code to send the booking data to your backend
  console.log('Booking confirmed:', formData);

  // You can redirect to a confirmation page or show a success message
  alert('Booking confirmed! Your ticket has been generated.');
}

// Handle print ticket button
document.getElementById('printTicket').addEventListener('click', () => {
  window.print();
});

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

// First let's check what's in localStorage
console.log('Raw localStorage:', localStorage.getItem('selectedMovie'));

// Try displaying the title without JSON parsing first
const movieData = localStorage.getItem('selectedMovie');
const titleElement = document.getElementById('movieTitle');

if (movieData) {
  try {
    const parsed = JSON.parse(movieData);
    console.log('Parsed data:', parsed);
    titleElement.textContent = parsed.title;
  } catch (error) {
    console.error('Error parsing movie data:', error);
    // If JSON parsing fails, try using the raw data
    titleElement.textContent = movieData;
  }
} else {
  console.log('No movie data found in localStorage');
}

localStorage.setItem(
  'selectedMovie',
  JSON.stringify({
    title: movieTitle,
    price: price,
  })
);

// Simple retrieval of the text
document.getElementById('movieTitle').textContent =
  localStorage.getItem('selectedMovie');

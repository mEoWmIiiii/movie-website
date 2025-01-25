// Update the movieData object with complete details for each movie
const movieData = {
  1: {
    title: 'While You Were Sleeping',
    duration: '1h 43min',
    genre: 'Romance, Comedy, Drama',
    director: 'Jon Turteltaub',
    starring: 'Sandra Bullock, Bill Pullman, Peter Gallagher',
    synopsis:
      "Lonely transit worker Lucy Eleanor Moderatz (Sandra Bullock) pulls her longtime crush, Peter (Peter Gallagher), from the path of an oncoming train. At the hospital, doctors report that he's in a coma, and a misplaced comment from Lucy causes Peter's family to assume that she is his fiancée. When Lucy doesn't correct them, they take her into their home and confidence. Things get even more complicated when she finds herself falling for Peter's sheepish brother, Jack (Bill Pullman).",
    posterUrl: '/img/1.jpeg',
    rating: '4.8',
  },
  2: {
    title: 'Notting Hill',
    duration: '2h 4min',
    genre: 'Romance, Comedy, Drama',
    director: 'Roger Michell',
    starring: 'Hugh Grant, Julia Roberts, Gina McKee, Rhys Ifans',
    synopsis:
      'William Thacker (Hugh Grant) is a London bookstore owner whose humdrum existence is thrown into romantic turmoil when famous American actress Anna Scott (Julia Roberts) appears in his shop. A chance encounter over spilled orange juice leads to a kiss that blossoms into a full-blown affair. As the average bloke and glamorous movie star draw closer and closer together, they struggle to reconcile their radically different lifestyles in the name of love.',
    posterUrl: '/img/2.jpg',
    rating: '4.5',
  },
  3: {
    title: 'Set It Up',
    duration: '1h 45min',
    genre: 'Romance, Comedy',
    director: 'Claire Scanlon',
    starring: 'Zoey Deutch, Glen Powell, Lucy Liu',
    synopsis:
      'Two overworked and underpaid assistants come up with a plan to get their bosses off their backs by setting them up with each other.',
    posterUrl: '/img/3.jpg', // This should match the image path from your sample.html
    rating: '4.1',
  },
  4: {
    title: 'The Parent Trap',
    duration: '2h 8min',
    genre: 'Romance, Comedy, Drama',
    director: 'Nancy Meyers',
    starring: 'Lindsay Lohan, Dennis Quaid, Natasha Richardson',
    synopsis:
      'Identical twins Annie and Hallie, separated at birth and each raised by one of their biological parents, discover each other for the first time at summer camp and make a plan to bring their wayward parents back together.',
    posterUrl: '/img/4.jpg', // This should match the image path from your sample.html
    rating: '4.8',
  },
  5: {
    title: 'The Greatest Showman',
    duration: '1h 45min',
    genre: 'Musical, Drama, Biography',
    director: 'Michael Gracey',
    starring: 'Hugh Jackman, Zac Efron, Zendaya',
    synopsis:
      "Growing up in the early 1800s, P.T. Barnum displays a natural talent for publicity and promotion, selling lottery tickets by age 12. After trying his hands at various jobs, P.T. turns to show business to indulge his limitless imagination, rising from nothing to create the Barnum & Bailey circus. Featuring catchy musical numbers, exotic performers and daring acrobatic feats, Barnum's mesmerizing spectacle soon takes the world by storm to become the greatest show on Earth.",
    posterUrl: '/img/5.jpg', // This should match the image path from your sample.html
    rating: '4.8',
  },
  6: {
    title: 'Home Alone',
    duration: '1h 43min',
    genre: 'Comedy, Family, Holiday',
    director: 'Chris Columbus',
    starring: 'Macaulay Culkin, Daniel Stern, Joe Pesci, Catherine O’Hara',
    synopsis:
      'When 8-year-old Kevin McCallister (Macaulay Culkin) acts out the night before a family trip to Paris, his mother makes him sleep in the attic. After the McCallisters mistakenly leave for the airport without Kevin, he awakens to an empty house and assumes his wish to have no family has come true. But his excitement sours when he realizes that two con men (Joe Pesci, Daniel Stern) plan to rob the McCallister residence, and that he alone must protect the family home.',
    posterUrl: '/img/6.jpg', // This should match the image path from your sample.html
    rating: '4.8',
  },
  7: {
    title: 'Home Alone 2: Lost in New York',
    duration: '2h 00min',
    genre: 'Comedy, Family, Holiday',
    director: 'Chris Columbus',
    starring: 'Macaulay Culkin, Joe Pesci, Daniel Stern',
    synopsis:
      "After snarky youth Kevin McCallister (Macaulay Culkin) loses track of his father at the airport, he mistakenly gets on a plane headed for New York City -- while the rest of the McCallisters fly to Florida. Now alone in the Big Apple, Kevin cons his way into a room at the Plaza Hotel and begins his usual antics. But when Kevin discovers that the Sticky Bandits (Joe Pesci, Daniel Stern) are on the loose, he struggles to stop them from robbing an elderly man's toy store just before Christmas.",
    posterUrl: '/img/7.jpg', // This should match the image path from your sample.html
    rating: '4.8',
  },
  8: {
    title: 'Wicked',
    duration: '2h 40min',
    genre: 'Musical, Fantasy, Romance',
    director: 'Jon M. Chu',
    starring: 'Cynthia Erivo, Ariana Grande, Jeff Goldblum',
    synopsis:
      'Misunderstood because of her green skin, a young woman named Elphaba forges an unlikely but profound friendship with Glinda, a student with an unflinching desire for popularity. Following an encounter with the Wizard of Oz, their relationship soon reaches a crossroad as their lives begin to take very different paths.',
    posterUrl: '/img/8.jpg', // This should match the image path from your sample.html
    rating: '4.0',
  },
};

document.addEventListener('DOMContentLoaded', function () {
  // Get the movie ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get('movieId');

  // Get the movie data
  const movie = movieData[movieId];

  if (movie) {
    // Update the page with movie details
    document.querySelector('.movie-poster').src = movie.posterUrl;
    document.querySelector('.movie-title').textContent = movie.title;
    localStorage.setItem('selectedMovie', movie.title);
    document.querySelector('.movie-synopsis').textContent = movie.synopsis;
    document.querySelector('.duration').textContent = movie.duration;
    document.querySelector('.genre').textContent = movie.genre;
    document.querySelector('.starring').textContent = movie.starring;
    document.querySelector('.director').textContent = movie.director;
    document.querySelector('.heart-icon').textContent = `❤️ ${movie.rating}`;

    // Update page title
    document.title = `${movie.title} - Movie Details`;
  } else {
    // Handle movie not found
    document.querySelector('.movie-container').innerHTML =
      '<h2>Movie not found</h2>';
  }
}); 


const addMovieModal = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const startAddMovieButton = document.querySelector('header button');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const movies = [];

const toggleBackdrop = () => {
   backDrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
   addMovieModal.classList.toggle('visible');
   toggleBackdrop();
};

const clearMovieInput = () => {
   for (const usrInput of userInputs) {
      usrInput.value = '';
   }
};

const cancelAddMovieHandler = () => {
   toggleMovieModal();
   clearMovieInput();
};

const addMovieHandler = () => {
   const titleValue = userInputs[0].value;
   const imageUrlValue = userInputs[1].value;
   const ratingValue = userInputs[2].value;

   if (
      titleValue.trim() === '' ||
      imageUrlValue.trim() === '' ||
      ratingValue === '' ||
      +ratingValue < 1 ||
      +rating > 5
   ) {
      alert('please enter valid rating (values between 1 to 5)');
   }

   const newMovie = {
      title: titleValue,
      image: imageUrlValue,
      rating: ratingValue,
   };

   movies.push(newMovie);
   console.log(movies);
   toggleMovieModal();
   clearMovieInput();
};

const backdropClickHandler = () => {
   toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backDrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);

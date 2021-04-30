const addMovieModal = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const startAddMovieButton = document.querySelector('header button');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const toggleBackdrop = () => {
   backDrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
   addMovieModal.classList.toggle('visible');
   toggleBackdrop();
};

const cancelAddMovie = () => {
   toggleMovieModal();
};

const backdropClickHandler = () => {
   toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backDrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);

import axios from 'axios';
import Notiflix from 'notiflix';
import { getMovieDetails } from '../API/get-from-server';
// import createCatalogMovieCard from './../catalogMovieCard';

const filmsOfLocalStorage = document.querySelector('.my-library-films');
filmsOfLocalStorage.style.cssText = ` display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 15px;
  `;

const libraryIdsArr = localStorage.getItem('my_fake_library')
  ? JSON.parse(localStorage.getItem('my_fake_library'))
  : [];
// console.log('This Without parse:', localStorage.getItem('my_fake_library'));

function addtoLocalStorage(num) {
  if (!num) return;
  const test = JSON.parse(localStorage.getItem('my_fake_library'));

  if (!test.includes(num)) {
    test.push(num);
    localStorage.setItem('my_fake_library', JSON.stringify(test));
  }
}
addtoLocalStorage(569097);

// recive item.id from btn-remove
function removeLibraryIdsArr(id) {
  if (!id) return;
  const getDatasLocalStorage = JSON.parse(
    localStorage.getItem('my_fake_library')
  );
  const index = getDatasLocalStorage.indexOf(id);
  if (index !== -1) {
    getDatasLocalStorage.splice(index, 1);
    localStorage.setItem(
      'my_fake_library',
      JSON.stringify(getDatasLocalStorage)
    );
  }
}

removeLibraryIdsArr(569094);

const libraryArr = [];

console.log('lol', libraryIdsArr);

async function getFromLocalStorage() {
  for (let i = 0; i < libraryIdsArr.length; i++) {
    const el = libraryIdsArr[i];
    console.log(el);
    try {
      const resp = await getMovieDetails(el);
      console.log(
        '🚀 ~ file: data-for-library.js:19 ~ getFromLocalStorage ~ resp:',
        resp
      );

      // createCatalogMovieCard(getMovieDetails, filmsOfLocalStorage, resp.id);

      libraryArr.push(resp.data);
    } catch (err) {
      console.error(err);
      Notiflix.Report.warning('Error', 'Not working');
    }
  }

  if (libraryArr.length == 0) {
    //Here must be Dimas function "OOOps....."
    console.log('No libraries found');
  } else {
    console.log('lol');
  }
}
getFromLocalStorage();

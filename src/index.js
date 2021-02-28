let breeds = [];

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

window.addEventListener("DOMContentLoaded", (e) => {
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((data) => renderDogs(data));

  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => renderDogBreeds(data));
});

function renderDogs(dogs) {
  const imageContainer = document.getElementById("dog-image-container");
  const dogImgList = dogs.message;
  dogImgList.forEach((dogImage) => {
    const imgTag = document.createElement("img");
    imgTag.src = dogImage;
    imageContainer.appendChild(imgTag);
  });
}

function renderDogBreeds(dogBreeds) {
  const dogBreedUL = document.getElementById("dog-breeds");
  breeds = dogBreeds.message;
  for (const key in breeds) {
    const li = document.createElement("li");
    li.innerHTML = key;
    dogBreedUL.appendChild(li);
    li.addEventListener("click", changeColor);
  }
}

function changeColor(e) {
  e.target.style.color = "indigo";
}

function filterBreeds(letter) {
  updateBreedList(breeds.filter((breed) => breed.startsWith(letter)));
}

function addBreedSelectListener() {
  const breedDropdown = document.getElementById("breed-dropdown");
  breedDropdown.addEventListener("change", function (e) {
    filterBreeds(e.target.value);
  });
}

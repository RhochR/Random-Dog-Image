// Get references to HTML elements

const newDogBtn = document.getElementById('new-dog-btn');

const dogImageContainer = document.getElementById('dog-image-container');

// Function to get a random dog image from the Dog API

async function getDogImage() {

  const response = await fetch('https://dog.ceo/api/breeds/image/random');

  const data = await response.json();

  return data.message;

}

// Function to update the dog image displayed on the page

async function updateDogImage() {

  const imageUrl = await getDogImage();

  dogImageContainer.innerHTML = `<img src="${imageUrl}" alt="Random dog image">`;

}

// Event listener for the "New Dog" button

newDogBtn.addEventListener('click', updateDogImage);

// Call the updateDogImage function when the page loads

updateDogImage();


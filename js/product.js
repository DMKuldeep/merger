

let bigImg = document.querySelector('.big-img img');
// function showImg(pic){
//     bigImg.src = pic; 


let selectedImgSrc = bigImg.src; // Keeps track of the selected image
let thumbnails = document.querySelectorAll('.small-img img');


function showImg(pic) {
  // Update the selected image source
  selectedImgSrc = pic;
  bigImg.src = pic;

  // Remove the 'selected' class from all thumbnails
  thumbnails.forEach(img => img.classList.remove('selected'));

  // Add the 'selected' class to the clicked thumbnail
  event.target.classList.add('selected');
}




const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const numberDisplay = document.getElementById('number');

let count = 0;

decreaseButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        numberDisplay.textContent = count;
    }
});

increaseButton.addEventListener('click', () => {
    if (count < 5) {
        count++;
        numberDisplay.textContent = count;
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const sizeElements = document.querySelectorAll(".psize");

  sizeElements.forEach((element) => {
    element.addEventListener("click", () => {
      // Remove 'active' class from all elements
      sizeElements.forEach((el) => el.classList.remove("active"));
      // Add 'active' class to the clicked element
      element.classList.add("active");
    });
  });
});

const videoContainers = document.querySelectorAll('.image-container');

videoContainers.forEach(container => {
  const video = container.querySelector('video');

  container.addEventListener('mouseenter', () => {
    video.style.display = 'block';
    video.play();
  });

  container.addEventListener('mouseleave', () => {
    video.pause();
    video.style.display = 'none';
  });
});








setTimeout(() => {
  const topTextElement = document.getElementById('toptext');
  topTextElement.textContent = "20% OFF on orders over ₹10,000 | Code: DIWALI10";
}, 2000); 

document.getElementById('heart-container').addEventListener('click', function () {
  const whiteHeart = document.getElementById('white-heart');
  const blackHeart = document.getElementById('black-heart');

  if (whiteHeart.style.display === 'block') {
    whiteHeart.style.display = 'none'; // Hide white heart
    blackHeart.style.display = 'block'; // Show black heart
  } else {
    whiteHeart.style.display = 'block'; // Show white heart
    blackHeart.style.display = 'none'; // Hide black heart
  }
});












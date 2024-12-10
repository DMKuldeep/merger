
let bigImg = document.querySelector('.big-img img');
let selectedImgSrc = bigImg.src; 
let thumbnails = document.querySelectorAll('.small-img img');

function showImg(pic) {
  selectedImgSrc = pic;
  bigImg.src = pic;

  thumbnails.forEach(img => img.classList.remove('selected'));

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

document.getElementById('heart-svg').addEventListener('click', function () {
    const path = this.querySelector('path'); // Get the path element
    if (path.getAttribute('fill') === 'white') {
      path.setAttribute('fill', 'black'); // Change fill to black
    } else {
      path.setAttribute('fill', 'white'); // Change fill to white
    }
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



// Function to toggle the visibility of the description pane
function togglePane(paneId) {
  var pane = document.getElementById(paneId);
  if (pane.style.display === "none" || pane.style.display === "") {
    pane.style.display = "block";
  } else {
    pane.style.display = "none";
  }
}













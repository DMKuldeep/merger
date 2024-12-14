
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


function togglePane(paneId, toggleId) {
  const pane = document.getElementById(paneId);
  const toggleIcon = document.getElementById(toggleId).querySelector("svg");

  if (pane.style.display === "none" || pane.style.display === "") {
    // Show the pane and update the SVG to a minus icon
    pane.style.display = "block";
    toggleIcon.innerHTML = `
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square-dotted" viewBox="0 0 16 16">
  <path d="M2.5 0q-.25 0-.487.048l.194.98A1.5 1.5 0 0 1 2.5 1h.458V0zm2.292 0h-.917v1h.917zm1.833 0h-.917v1h.917zm1.833 0h-.916v1h.916zm1.834 0h-.917v1h.917zm1.833 0h-.917v1h.917zM13.5 0h-.458v1h.458q.151 0 .293.029l.194-.981A2.5 2.5 0 0 0 13.5 0m2.079 1.11a2.5 2.5 0 0 0-.69-.689l-.556.831q.248.167.415.415l.83-.556zM1.11.421a2.5 2.5 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415zM16 2.5q0-.25-.048-.487l-.98.194q.027.141.028.293v.458h1zM.048 2.013A2.5 2.5 0 0 0 0 2.5v.458h1V2.5q0-.151.029-.293zM0 3.875v.917h1v-.917zm16 .917v-.917h-1v.917zM0 5.708v.917h1v-.917zm16 .917v-.917h-1v.917zM0 7.542v.916h1v-.916zm15 .916h1v-.916h-1zM0 9.375v.917h1v-.917zm16 .917v-.917h-1v.917zm-16 .916v.917h1v-.917zm16 .917v-.917h-1v.917zm-16 .917v.458q0 .25.048.487l.98-.194A1.5 1.5 0 0 1 1 13.5v-.458zm16 .458v-.458h-1v.458q0 .151-.029.293l.981.194Q16 13.75 16 13.5M.421 14.89c.183.272.417.506.69.689l.556-.831a1.5 1.5 0 0 1-.415-.415zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373Q2.25 16 2.5 16h.458v-1H2.5q-.151 0-.293-.029zM13.5 16q.25 0 .487-.048l-.194-.98A1.5 1.5 0 0 1 13.5 15h-.458v1zm-9.625 0h.917v-1h-.917zm1.833 0h.917v-1h-.917zm1.834 0h.916v-1h-.916zm1.833 0h.917v-1h-.917zm1.833 0h.917v-1h-.917zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
</svg> `;
  } else {
    // Hide the pane and revert the SVG to a plus icon
    pane.style.display = "none";
    toggleIcon.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M8.99805 0C11.483 0 13.7335 1.00754 15.362 2.63603C16.9905 4.26507 17.998 6.51452 17.998 9C17.998 11.4849 16.9905 13.7355 15.362 15.364C13.733 16.9925 11.483 18 8.99805 18C6.51257 18 4.26257 16.9925 2.63408 15.364C1.00558 13.7349 -0.00195312 11.4849 -0.00195312 9C-0.00195312 6.51452 1.00558 4.26452 2.63408 2.63603C4.26312 1.00754 6.51257 0 8.99805 0ZM4.52672 9.37996C4.294 9.37996 4.10485 9.19081 4.10485 8.95809C4.10485 8.72537 4.294 8.53621 4.52672 8.53621H8.57617V4.48676C8.57617 4.25404 8.76533 4.06489 8.99805 4.06489C9.23077 4.06489 9.41992 4.25404 9.41992 4.48676V8.53621H13.4694C13.7026 8.53621 13.8912 8.72537 13.8912 8.95809C13.8912 9.19136 13.7021 9.37996 13.4694 9.37996H9.41992V13.4294C9.41992 13.6621 9.23077 13.8513 8.99805 13.8513C8.76533 13.8513 8.57617 13.6621 8.57617 13.4294V9.37996H4.52672ZM14.7653 3.23272C13.2896 1.75699 11.2503 0.84375 8.99805 0.84375C6.74584 0.84375 4.7065 1.75699 3.23077 3.23272C1.75503 4.70846 0.841797 6.74779 0.841797 9C0.841797 11.2522 1.75503 13.2915 3.23077 14.7673C4.7065 16.243 6.74584 17.1562 8.99805 17.1562C11.2503 17.1562 13.2896 16.243 14.7653 14.7673C16.2411 13.2915 17.1543 11.2522 17.1543 9C17.1543 6.74779 16.2411 4.70846 14.7653 3.23272Z" fill="black"/>
                </svg>    `;
  }
}













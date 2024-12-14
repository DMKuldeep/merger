



function changeToStandard() {
  // Select buttons
  var standardBtn = document.querySelector('.standarddelivery');
  var expressBtn = document.querySelector('.expressdelivery');

  // Select paragraph and elements to show
  var paragraph = document.querySelector('.expressdeliveryfees');
  var shippingforu1 = document.querySelector('.shippingforu1');

  // Change text
  paragraph.textContent = 'Free';

  // Show free shipping text
  shippingforu1.style.display = 'block';

  // Change button styles
  standardBtn.style.backgroundColor = '#3d3d3d';
  standardBtn.style.color = '#fff';
  expressBtn.style.backgroundColor = '#f0f0f0';
  expressBtn.style.color = '#888';
}

function changeToExpress() {
  // Select buttons
  var standardBtn = document.querySelector('.standarddelivery');
  var expressBtn = document.querySelector('.expressdelivery');

  // Select paragraph and elements to hide
  var paragraph = document.querySelector('.expressdeliveryfees');
  var shippingforu1 = document.querySelector('.shippingforu1');

  // Change text
  paragraph.textContent = '₹75';

  // Hide free shipping text
  shippingforu1.style.display = 'none';

  // Change button styles
  standardBtn.style.backgroundColor = '#f0f0f0';
  standardBtn.style.color = '#888';
  expressBtn.style.backgroundColor = '#3d3d3d';
  expressBtn.style.color = '#fff';
}



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




function showModal() {
  document.getElementById('couponModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
  document.getElementById('couponModal').style.display = 'none';
}

// Close the modal when clicking outside it
window.onclick = function(event) {
  const modal = document.getElementById('couponModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};







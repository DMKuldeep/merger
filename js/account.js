

// setTimeout(() => {
//   const topTextElement = document.getElementById('toptext');
//   topTextElement.textContent = "20% OFF on orders over ₹10,000 | Code: DIWALI10";
// }, 2000); 

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







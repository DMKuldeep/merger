document.querySelectorAll('.position-relative').forEach(container => {
  const video = container.querySelector('.video');
  
  container.addEventListener('mouseenter', () => {
    video.play(); // Play the video on hover
  });

  container.addEventListener('mouseleave', () => {
    video.pause(); // Pause the video when not hovering
    video.currentTime = 0; // Reset video to start
  });
});




function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.classList.toggle('show');
}

// Close the dropdown when clicking outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropdown-toggle') && !event.target.matches('.dropdown-item')) {
    const dropdowns = document.getElementsByClassName('dropdown-menu');
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// Update button text based on selected item
function selectOption(event) {
  event.preventDefault(); // Prevent default link behavior
  const selectedValue = event.target.getAttribute('data-value');
  document.getElementById('dropdown-selected').textContent = selectedValue;

  // Close dropdown after selection
  const dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.classList.remove('show');
}






const icons = document.querySelectorAll('.icon');
const contents = document.querySelectorAll('.collections');

// Function to handle icon click
icons.forEach(icon => {
  icon.addEventListener('click', () => {
    const targetId = icon.getAttribute('data-target');
    
    // Remove active class from all icons and content divs
    icons.forEach(i => i.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    // Add active class to the clicked icon
    icon.classList.add('active');

    // Show the selected content div
    const targetContent = document.getElementById(targetId);
    targetContent.classList.add('active');
  });
});

// Set the first icon and content as active by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const firstIcon = icons[0]; // Get the first icon
  const firstContent = contents[0]; // Get the first content div

  // Add the active class to the first icon and content
  firstIcon.classList.add('active');
  firstContent.classList.add('active');
});



const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.classList.contains("input-min")) {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else if (e.target.classList.contains("input-max")) {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.classList.contains("range-min")) {
        rangeInput[0].value = maxVal - priceGap;
      } else if (e.target.classList.contains("range-max")) {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});



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
    document.getElementById(targetId).classList.add('active');
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
async function headerSection() {
  const navContent = await fetch("nav.html").then((res) => res.text());
  document.getElementById("nav-placeholder").innerHTML = navContent;
}

async function headerSectionDark() {
  const navContent = await fetch("nav-dark.html").then((res) => res.text());
  document.getElementById("navdark-placeholder").innerHTML = navContent;
}

async function footerSection() {
  const footerContent = await fetch("footer.html").then((res) => res.text());
  document.getElementById("footer-placeholder").innerHTML = footerContent;
}
async function footerSectionDark() {
  const footerContent = await fetch("footer.html").then((res) => res.text());
  document.getElementById("footerdark-placeholder").innerHTML = footerContent;
}
// Call the function to load nav and footer
footerSection();
headerSection();
headerSectionDark();
footerSectionDark();



const textArray = [
  { text: "Co-Ords", color: "#d9d9d9", fontWeight: "300", fontFamily: "Lato" },
  { text: "Latest Fashion", color: "#d9d9d9", fontWeight: "300", fontFamily: "Lato" },
  { text: "Shirt", color: "#d9d9d9", fontWeight: "300", fontFamily: "Lato" },
  { text: "Pant", color: "#d9d9d9", fontWeight: "300", fontFamily: "Lato" },
];

let index = 0; // To keep track of the current text index
let interval; // To store the interval ID

// Function to update the span text and style every 2 seconds
function updateText() {
  const span = document.getElementById("dynamicText"); // Get the span element
  const currentItem = textArray[index]; // Get the current text and style

  span.textContent = currentItem.text; // Update span text
  span.style.color = currentItem.color || "inherit"; // Apply color
  span.style.fontWeight = currentItem.fontWeight || "normal"; // Apply font weight
  span.style.fontFamily = currentItem.fontFamily || "inherit"; // Apply font family

  index = (index + 1) % textArray.length; // Move to the next index, looping back to 0 if at the end
}

// Start the interval when the page loads
interval = setInterval(updateText, 2000);

// Function to disable placeholder and stop text updates when input is focused
function disablePlaceholder() {
  document.getElementById("placeholder").style.display = "none"; // Hide the placeholder
  clearInterval(interval); // Stop the interval
}

// Function to enable placeholder and resume text updates when input loses focus
function enablePlaceholder() {
  const searchValue = document.getElementById("search").value; // Get the input value
  if (searchValue.trim() === "") {
    document.getElementById("placeholder").style.display = "block"; // Show the placeholder
    interval = setInterval(updateText, 2000); // Restart the interval
  }
}



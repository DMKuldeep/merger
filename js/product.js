let bigImg = document.querySelector(".big-img img");
let zoomContainer = document.querySelector(".zoom-container");
let thumbnails = document.querySelectorAll(".small-img img");

function zoomEffect(event) {
  const rect = bigImg.getBoundingClientRect();
  const x = event.clientX - rect.left; // Mouse X relative to the image
  const y = event.clientY - rect.top; // Mouse Y relative to the image
  const width = rect.width;
  const height = rect.height;

  // Set the background image of the zoom container
  zoomContainer.style.backgroundImage = `url('${bigImg.src}')`;

  // Calculate the background position based on mouse coordinates
  const bgPosX = (x / width) * 100; // Percentage X
  const bgPosY = (y / height) * 100; // Percentage Y

  // Apply background position
  zoomContainer.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
}

function resetZoom() {
  // Hide the zoom container when mouse leaves
  zoomContainer.style.display = "none";
}

function showImg(pic) {
  bigImg.src = pic;
  zoomContainer.style.backgroundImage = `url('${pic}')`;

  thumbnails.forEach((img) => img.classList.remove("selected"));
  event.target.classList.add("selected");
}

const inner = document.querySelector(".inner");
const left = document.querySelector(".left");
left.addEventListener("mousemove", handleMousemove, false);
function handleMousemove(event) {
  let { width, height } = this.getBoundingClientRect();
  let xAxis = (event.offsetX / width) * 100;
  let yAxis = (event.offsetY / height) * 100;
  inner.style.transform = `translate(-${xAxis}%, -${yAxis}%)`;
}
// Select the element
const box = document.getElementById("bigImage");
const box2 = document.getElementById("openpanelimage");

// Add event listeners for hover
box.addEventListener("mouseover", () => {
  box2.classList.add("open");
});

box.addEventListener("mouseout", () => {
  box.classList.remove("hovered");
});

const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const numberDisplay = document.getElementById("number");

let count = 0;

decreaseButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    numberDisplay.textContent = count;
  }
});

increaseButton.addEventListener("click", () => {
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

const videoContainers = document.querySelectorAll(".image-container");

videoContainers.forEach((container) => {
  const video = container.querySelector("video");

  container.addEventListener("mouseenter", () => {
    video.style.display = "block";
    video.play();
  });

  container.addEventListener("mouseleave", () => {
    video.pause();
    video.style.display = "none";
  });
});

document.querySelectorAll("#heart-svg").forEach((heartIcon) => {
  heartIcon.addEventListener("click", function () {
    const path = this.querySelector("path"); // Get the path element within the clicked heart icon
    const isDefaultPath = path.getAttribute("d").includes("M26.4501");

    if (isDefaultPath) {
      // Update the viewBox to match the new path dimensions
      this.setAttribute("viewBox", "0 0 64 64"); // Adjust viewBox for new path
      this.setAttribute("width", "43"); // Scale down width to fit
      this.setAttribute("height", "44"); // Scale down height to fit

      // Replace with the new `d` attribute and fill color
      path.setAttribute(
        "d",
        "M32 57c-.25 0-.5-.07-.72-.22C31 56.72 19.27 47.54 10.26 37.2c-6.45-6.85-6.86-18.08-.84-23.99 7.58-6.62 15.34-6.24 23.58 1.02 8.24-7.26 16-7.63 23.58-1.02 6.02 5.91 5.61 17.14-.84 23.99-9 10.34-20.73 19.52-20.98 19.58-.22.15-.47.22-.72.22Z"
      );
      path.setAttribute("fill", "#ffffff");
    } else {
      // Revert the viewBox to the original dimensions
      this.setAttribute("viewBox", "0 0 43 44");
      this.setAttribute("width", "43");
      this.setAttribute("height", "44");

      // Revert back to the original `d` attribute and fill color
      path.setAttribute(
        "d",
        "M26.4501 13.4092C29.6289 13.4092 32.2149 16.0164 32.2149 19.2214C32.2149 26.1425 23.6821 31.5082 21.5507 32.7404C19.4167 31.5093 10.888 26.1546 10.888 19.2214C10.888 16.0167 13.4743 13.4092 16.653 13.4092C18.2258 13.4092 19.6957 14.0375 20.7925 15.1784L21.528 15.9435L21.5473 15.9241L21.571 15.9482L22.3106 15.1789C23.4071 14.0377 24.8771 13.4092 26.4501 13.4092ZM26.4501 12.3604C24.532 12.3604 22.8004 13.1617 21.5632 14.4489L21.5512 14.4368L21.5395 14.4486C20.3023 13.1617 18.5709 12.3606 16.653 12.3606C12.8945 12.3604 9.84766 15.4319 9.84766 19.2214C9.84766 27.8354 21.5512 33.9387 21.5512 33.9387C21.5512 33.9387 33.2552 27.8354 33.2552 19.2214C33.2552 15.4319 30.2084 12.3604 26.4501 12.3604Z"
      );
      path.setAttribute("fill", "white");
    }
  });
});

setTimeout(() => {
  const topTextElement = document.getElementById("toptext");
  topTextElement.textContent =
    "20% OFF on orders over ₹10,000 | Code: DIWALI10";
}, 2000);

document
  .getElementById("heart-container")
  .addEventListener("click", function () {
    const whiteHeart = document.getElementById("white-heart");
    const blackHeart = document.getElementById("black-heart");

    if (whiteHeart.style.display === "block") {
      whiteHeart.style.display = "none"; // Hide white heart
      blackHeart.style.display = "block"; // Show black heart
    } else {
      whiteHeart.style.display = "block"; // Show white heart
      blackHeart.style.display = "none"; // Hide black heart
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

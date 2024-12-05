const button = document.querySelector(".resizable-button");
const leftDiv = document.querySelector(".customswiperleft");
const rightDiv = document.querySelector(".customswiperright");
const container = document.querySelector(".containercustomswiper");

let isDragging = false;

button.addEventListener("mousedown", (e) => {
  isDragging = true;
  e.preventDefault(); // Prevent text selection
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const containerRect = container.getBoundingClientRect();
  const offsetX = e.clientX - containerRect.left;

  const leftWidthPercentage = (offsetX / containerRect.width) * 100;
  const rightWidthPercentage = 100 - leftWidthPercentage;

  // Ensure both divs have a minimum width of 10%
  if (leftWidthPercentage > 10 && rightWidthPercentage > 10) {
    leftDiv.style.flex = leftWidthPercentage;
    rightDiv.style.flex = rightWidthPercentage;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

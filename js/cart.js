function toggleOffers() {
  const extraOffers = document.querySelectorAll('.extra-offer');
  const seeMoreText = document.querySelector('.see-more span');
  const arrowIcon = document.querySelector('.see-more svg path');

  extraOffers.forEach((offer) => {
    if (offer.style.display === 'none') {
      offer.style.display = 'list-item'; // Show hidden offers as list items
      seeMoreText.textContent = 'See Less'; // Change text to See Less
      arrowIcon.setAttribute('d', 'M3.50211 0C3.57376 0.0000710262 3.64246 0.0301575 3.6931 0.0836621L6.95424 3.50613C6.98079 3.53224 7.00209 3.56373 7.01686 3.59871C7.03163 3.63369 7.03958 3.67146 7.03996 3.70976C7.0406 3.74806 7.03392 3.7861 7.02033 3.82161C7.00674 3.85712 6.98651 3.88938 6.96085 3.91646C6.93519 3.94355 6.90462 3.9649 6.87097 3.97924C6.83732 3.99359 6.80127 4.00063 6.76498 3.99996C6.7287 3.99928 6.69291 3.9909 6.65976 3.97531C6.6266 3.95971 6.59676 3.93724 6.57201 3.90922L3.52013 0.692101L0.449974 3.93204C0.397308 3.96551 0.335416 3.97904 0.274486 3.97039C0.213557 3.96175 0.157249 3.93144 0.114844 3.88447C0.0724384 3.83751 0.0464829 3.77669 0.0412424 3.71206C0.0359988 3.64743 0.0517956 3.58284 0.0860183 3.52895L3.31113 0.0874591C3.33591 0.0602769 3.36554 0.0385626 3.39833 0.0235457C3.43112 0.00852875 3.46639 0.000525729 3.50211 0Z'); // Update arrow direction
    } else {
      offer.style.display = 'none'; // Hide extra offers
      seeMoreText.textContent = 'See More'; // Reset text to See More
      arrowIcon.setAttribute('d', 'M3.50211 4C3.43046 3.99993 3.36176 3.96984 3.31113 3.91634L0.086018 0.493866C0.0594651 0.467756 0.0381678 0.436269 0.0233965 0.401284C0.0086251 0.366299 0.00068232 0.328532 4.20602e-05 0.290237C-0.0005982 0.251943 0.00607711 0.213904 0.0196698 0.178391C0.0332625 0.142878 0.053494 0.110618 0.0791575 0.083535C0.104821 0.0564523 0.135391 0.035102 0.169043 0.0207576C0.202695 0.00641326 0.23874 -0.000631281 0.275028 4.43856e-05C0.311316 0.000720052 0.347104 0.00910207 0.380256 0.0246903C0.413407 0.0402785 0.443244 0.0627536 0.467986 0.0907748L3.52013 3.3079L6.59029 0.0679583C6.64295 0.0344872 6.70484 0.0209593 6.76577 0.0296068C6.82669 0.0382544 6.883 0.0685605 6.9254 0.115525C6.96781 0.162489 6.99377 0.223306 6.99901 0.287939C7.00426 0.352573 6.98847 0.417162 6.95424 0.47105L3.6931 3.91254C3.66832 3.93972 3.63869 3.96144 3.60591 3.97645C3.57312 3.99147 3.53785 3.99947 3.50211 4Z'); // Reset arrow
    }
  });
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







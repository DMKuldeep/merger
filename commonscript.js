async function loadCommonSections() {
  // Fetch and load the navigation bar
  const navContent = await fetch("nav.html").then((res) => res.text());
  document.getElementById("nav-placeholder").innerHTML = navContent;

  // Fetch and load the footer
  const footerContent = await fetch("footer.html").then((res) => res.text());
  document.getElementById("footer-placeholder").innerHTML = footerContent;
}

// Call the function to load nav and footer
loadCommonSections();

async function loadCommonDarkSections() {
  // Fetch and load the navigation bar
  const navContent = await fetch("nav-dark.html").then((res) => res.text());
  document.getElementById("navdark-placeholder").innerHTML = navContent;

  // // Fetch and load the footer
  // const footerContent = await fetch("footer.html").then((res) => res.text());
  // document.getElementById("footer-placeholder").innerHTML = footerContent;
}

// Call the function to load nav and footer
loadCommonDarkSections();


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


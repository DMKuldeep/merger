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

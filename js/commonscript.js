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




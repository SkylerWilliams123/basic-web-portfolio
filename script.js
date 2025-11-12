// Smooth scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Log a greeting in console
console.log("Welcome to Andon's Portfolio!");

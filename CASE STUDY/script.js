const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    console.log("Hamburger clicked!"); // Check if this logs
    navLinks.classList.toggle('active');
});

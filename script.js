const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    console.log("Hamburger clicked!"); 
    navLinks.classList.toggle('active');
});


document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        
        const parentHeader = this.closest('.th-header');
        parentHeader.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Add a click event to the hamburger
    hamburger.addEventListener('click', function() {
        // Toggle the 'active' class on the nav links
        navLinks.classList.toggle('active');
    });
});
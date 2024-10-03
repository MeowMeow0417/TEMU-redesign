document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active'); 
    });
});



document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        
        const parentHeader = this.closest('.th-header');
        parentHeader.classList.toggle('active');
    });
});


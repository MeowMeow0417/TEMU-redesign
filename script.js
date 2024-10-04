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

document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling; // gets the next element (the .th-header-content)
            content.classList.toggle('active'); // toggles the 'active' class

            // Optionally, add an animation for smooth transition
            if (content.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });
});

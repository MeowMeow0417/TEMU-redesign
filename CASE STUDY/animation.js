const slideDuration = 1500; // 1.5 seconds per slide

function showSlides() {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        const activeSlide = slider.querySelector('.active');
        const currentIndex = Array.from(slides).indexOf(activeSlide);
        const nextIndex = (currentIndex + 1) % slides.length;

        activeSlide.classList.remove('active');
        slides[nextIndex].classList.add('active');
    });

    // Schedule next slide change
    setTimeout(showSlides, slideDuration);
}

// Start the slideshow when the page loads
window.addEventListener('load', () => {
    showSlides();
});
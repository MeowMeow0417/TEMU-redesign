const slideDuration = 1500; 
let slideshowInterval;

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

    slideshowInterval = setTimeout(showSlides, slideDuration);
}

function stopSlideshow() {
    clearTimeout(slideshowInterval);
}

function startSlideshow() {
    stopSlideshow(); 
    showSlides();
}

document.querySelectorAll('.category').forEach(category => {
    const slides = category.querySelectorAll('.slide');
    
    category.addEventListener('mouseenter', () => {
        stopSlideshow();
        slides[0].classList.remove('active');
        slides[1].classList.add('active');
    });

    category.addEventListener('mouseleave', () => {
        slides[1].classList.remove('active');
        slides[0].classList.add('active');
        startSlideshow();
    });
});

window.addEventListener('load', () => {
    startSlideshow();
});


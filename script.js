// script.js

// Parallax Effect on Scroll
window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.transform = `translateY(${window.scrollY * 0.3}px)`;
}); 

const testimonials = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentIndex);
}

// Initialize the first testimonial
showTestimonial(currentIndex);

// Change testimonial every 5 seconds
setInterval(nextTestimonial, 5000); // Auto-change every 5 seconds

// Add event listeners to the buttons
document.getElementById('next').addEventListener('click', nextTestimonial);
document.getElementById('prev').addEventListener('click', prevTestimonial);

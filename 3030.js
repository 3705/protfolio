// script.js
// Slider functionality for mobile view

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
  
    let currentIndex = 0;
  
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    function showNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }
  
    function showPrevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    }
  
    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);
  
    // Optional: Auto-play slider every 5 seconds
    let sliderInterval = setInterval(showNextSlide, 5000);
  
    // Pause auto-play when hovering (optional)
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseover', () => clearInterval(sliderInterval));
    sliderContainer.addEventListener('mouseout', () => {
      sliderInterval = setInterval(showNextSlide, 5000);
    });
  
    // Ensure slider only applies on mobile view (<768px)
    function checkScreenSize() {
      if (window.innerWidth >= 768) {
        // On desktop, reset transform and disable slider movement
        slider.style.transform = 'none';
      } else {
        updateSlider();
      }
    }
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
  
    console.log('Portfolio website is ready with a dark theme, animated background, and responsive slider!');
  });
  
const move = document.querySelector('.slider_wrap');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slide_arr-left');
const btnRight = document.querySelector('.slide_arr-right');

const totalSlides = slides.length
const initialIndex = 2;
let activeIndex = initialIndex;

function getStep() {
    const currentWidth = slides[0].offsetWidth;
    const sliderStyle = window.getComputedStyle(move);
    const currentGap = parseInt(sliderStyle.getPropertyValue('gap'));
    return currentWidth + currentGap;
}

function updateSlider () {
    const shift = activeIndex - initialIndex;
    move.style.transform = `translateX(${-shift * getStep()}px)`;
}

btnRight.onclick = function () {
    if(activeIndex < totalSlides -1){
        activeIndex++;
        updateSlider();
    }
}

btnLeft.onclick = function () {
    if(activeIndex > 0) {
        activeIndex--;
        updateSlider();
    }
}
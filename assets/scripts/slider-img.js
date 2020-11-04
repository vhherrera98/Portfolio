
const imgBx = document.querySelector('.slider')
const slides = imgBx.getElementsByTagName('img')
const btnNext = document.getElementById('btnNext')
const btnPrev = document.getElementById('btnPrev')
var i = 0
var cont = 0;

// funcion para avanzar slider
nextSlide = () => {
    slides[i].classList.remove('active')
    i = (i + 1) % slides.length
    slides[i].classList.add('active')
    resetInterval()
}

// funcion para retroceder slider
prevSlide = () => {
    slides[i].classList.remove('active')
    i = (i - 1 + slides.length) % slides.length
    slides[i].classList.add('active')
    resetInterval()
}

// autoslider
var autoSlide = setInterval(nextSlide, 500)

// reset slider
resetInterval = () => {
    clearInterval(autoSlide)
    autoSlide = setInterval(nextSlide, 5000)
}

// buttons

btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)
// sticky
const nav = document.getElementById('nav')
const arriba = document.querySelector('.click-arriba')

// en version de escritorio el nav se vuelve sitcky
window.addEventListener('scroll', () => {
    if (this.scrollY > 50) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky')
    }

    if (this.scrollY > 500) {
        arriba.classList.add('active')
    } else {
        arriba.classList.remove('active')
    }
})


// al oprimir el boton menu se muestra el nav 
var btnMenu = document.getElementById('btnMenu')
var bodyActive = document.querySelector('body')
btnMenu.addEventListener('click', () => {
    nav.classList.toggle('active')
    btnMenu.classList.toggle('open')
    bodyActive.classList.toggle('active')
})

// al oprimir el enlace en version movil se cierra el menu de navegacion
var enlace = document.querySelectorAll('.link-nav > a')
for (i = 0; i < 5; i++) {
    enlace[i].addEventListener('click', (e) => {
        e.preventDefault()
        nav.classList.remove('active')
        btnMenu.classList.remove('open')
        bodyActive.classList.remove('active')

    })
}

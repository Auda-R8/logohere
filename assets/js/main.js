$(document).ready(function() {
    $('.intro-slider').slick({
        fade: true,
        infinite: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true
    })

    let burger = document.getElementById("burger-menu")
    burger.onclick = () => {
        document.getElementById("header-inner").classList.toggle("active")
        document.getElementById("body").classList.toggle("lock")
    }

    let searchBack = document.getElementById("search-back")
    let searchBtn = document.getElementById("search-btn")

    searchBtn.onclick = (event) => {
        event.preventDefault()
        document.getElementById("body").classList.add("lock")
        searchBack.classList.add("active")
    }

    searchBack.onclick = () => {
        document.getElementById("body").classList.remove("lock")
        searchBack.classList.remove("active")
    }
})
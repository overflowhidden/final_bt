var myCarousel = document.querySelector("#carouselExampleCaptions");
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1000,
    wrap: false,
    pause: hover,
});

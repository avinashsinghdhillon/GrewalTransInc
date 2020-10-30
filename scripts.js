let slideIndex = 0;
let clearTO;
showSlides(slideIndex);

function showSlides () {
    const slides = document.getElementsByClassName('slide');
    const slideSelector = document.getElementsByClassName("selector");

    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length - 1}

    // clear any previous timeout timers
    if(clearTO) clearTimeout(clearTO);

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (let i = 0; i < slideSelector.length; i++) {
    //     slideSelector[i].className = slideSelector[i].className.replace(" active", "");
    // }

    // slideSelector[slideIndex].className += " active";
    slides[slideIndex].style.display = "block";
    slideIndex++;
    clearTO = setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function nextSlide (){
    showSlides();
}

function previousSlide (){
    slideIndex -= 2;
    showSlides();
}
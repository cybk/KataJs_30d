function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = Array.from(document.querySelectorAll('.slide-in'));

function checkSlide (e) {
    sliderImages.forEach(sd => {
        // halsf way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sd.height / 2;

        //bottom of the image
        const imageBotton = sd.offsetTop + sd.height;
        const isHalfShown = slideInAt > sd.offsetTop;
        const isNotScrollledPast  =  window.scrollY < imageBotton;

        if (isHalfShown && isNotScrollledPast){
            sd.classList.add('active');
        }else{
            sd.classList.remove('active');
        }

    })
}

window.addEventListener('scroll', debounce(checkSlide));

  
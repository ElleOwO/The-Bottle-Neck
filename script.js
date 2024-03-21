function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
//param n: controls the css colors
let slideIndex = 1;
//call to show slide on page
showSlides(slideIndex);

// Next/previous controls
//increments the slide index
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function minusSlides(n) {

    showminusSlides(slideIndex += n);
}

// function minusSlides(n){
//     showSlides(slideIndex -= n);
// }

// Thumbnail image controls
function currentSlide(n) {
    // if (n<1){
    //     n=1;
    // }
    showSlides(slideIndex = n);
}






function showSlides(n) {
    let i;
    let element = document.body;


    //indicates the current css
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    //button clicked n state, if n greater than 1, index restarts

    //
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {


        slides[i].style.display = "none";
        element.classList.add("slide" + slideIndex);
        element.classList.remove("slide" + (n-1));
        if (n<1){
            for (i=0;i<slides.length; i++){
                element.classList.remove("slide" + (slideIndex+1));

            }
        }

    }

    if (n > slides.length) {slideIndex = 1; n=1;
    }
    slides[slideIndex-1].style.display = "block";
    // JSON.stringify(element);
    // console.info(element);
    // console.log("n: " + n);
    // console.log("i: " + i);
    // console.log("slideindex:" + slideIndex)
    }

function showminusSlides(n) {
    let i;
    let element = document.body;


    //indicates the current css
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    //button clicked n state, if n greater than 1, index restarts

    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }    for (i = 0; i < slides.length; i++) {


        slides[i].style.display = "none";
        element.classList.add("slide" + slideIndex);
        element.classList.remove("slide" + (n + 1));
    }
    slides[slideIndex-1].style.display = "block";

    // JSON.stringify(element);
    // console.info(element);
    // console.log("n: " + n);
    // console.log("i: " + i);
    // console.log("slideindex:" + slideIndex)

}


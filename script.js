function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
} //example function for night toggle


let slideIndex = 1;
//call to show slide color and numbers on page
showSlides(slideIndex);

// Next/previous controls
//increments the slide index to go to next slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//subtracts slideIndex to go to previous slide
function minusSlides(n) {

    showminusSlides(slideIndex += n);
}


// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let element = document.body;
    //default state for slide 1
    element.classList.add("slide1");

    //indicates the current css
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
        element.classList.add("slide" + slideIndex);
        element.classList.remove("slide" + (slideIndex-1));

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
    //element: holds the element changer
    //n: the on click position
    //slideIndex:the index for the current page in the slide list
    //slides: holds the list of divs used as each slide

    let i;
    let element = document.body;
    element.classList.add("slide1");

    //indicates the current css
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");


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

//event listener to show comment box when clicking continue
function contButton(event) {
    var commentBox = document.getElementById("commentBox");
    var continueButton = document.getElementById("continuecontain");
    var secPrevNext = document.getElementById("secret-prev-next");



    commentBox.style.display = commentBox.style.display === "block" ? "none" : "block";
    continueButton.style.display = continueButton.style.display="none";


    event.stopPropagation(); // Prevent click event propagation
}

// Event listener to close the comment box when clicking outside of it
document.addEventListener("click", function(event) {
    var commentBox = document.getElementById("commentBox");
    var continueButton = document.getElementById("continuecontain");
    var secPrevNext = document.getElementById("secret-prev-next");
    var restartButton = document.getElementById("restartCont");



    var target = event.target;

    // Check if the click target is outside of the commentBox
    if (!commentBox.contains(target)) {
        commentBox.style.display = "none";
        // continueButton.style.display = continueButton.style.display="block";
        secPrevNext.style.display = secPrevNext.style.display="block";
        // restartButton.style.display = restartButton.style.display="flex";
        // restartButton.style.display = "flex";
        // restartButton.style.zIndex = restartButton.style.zIndex = "999999";
        restartButton.style.opacity = restartButton.style.opacity="1";
   
    }

    // Check if the restart button is clicked
    // if (target.id === "restart-container" || target.parentElement.id === "restart-container") {
    //     // Reload the page
    //     location.reload();
    // }
});

//audio controls
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon")
function playPause() {
    let song = document.getElementById("song");
    let playButton = document.querySelector(".play");

    if (song.paused) {
        song.play();
        playButton.src = "audio-icon.png"; // Update the play button icon
    } else {
        song.pause();
        playButton.src = "no-audio-icon.png"; // Update the pause button icon
    }
}


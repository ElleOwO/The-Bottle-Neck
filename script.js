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
// function contButton(event) {
//     var commentBox = document.getElementById("commentBox");
//
//     var continueButton = document.getElementById("continuecontain");
//     var secPrevNext = document.getElementById("secret-prev-next");
//
//
//
//     commentBox.style.display = commentBox.style.display === "block" ? "none" : "block";
//     commentBox.style.display = commentBox.style.zIndex="99999";
//
//     secPrevNext.style.display = secPrevNext.style.zIndex="99999";
//
//     continueButton.style.display = continueButton.style.display="none";
//
//
//     event.stopPropagation(); // Prevent click event propagation
// }

// Event listener to close the comment box when clicking outside of it
// document.addEventListener("click", function(event) {
//     var commentBox = document.getElementById("commentBox");
//     var continueButton = document.getElementById("continuecontain");
//     var secPrevNext = document.getElementById("secret-prev-next");
//     var restartButton = document.getElementById("restartCont");
//
//
//
//     var target = event.target;
//
//     // Check if the click target is outside of the commentBox
//     if (!commentBox.contains(target)) {
//         commentBox.style.display = "none";
//         // continueButton.style.display = continueButton.style.display="block";
//         secPrevNext.style.display = secPrevNext.style.display="block";
//         secPrevNext.style.display = secPrevNext.style.zIndex="0";
//
//         restartButton.style.display = restartButton.style.display="flex";
//         showRestartButtonIfContinueButtonHidden();
//
//
//
//     }
//
//     function showRestartButtonIfContinueButtonHidden() {
//         var continueButton = document.getElementById("continuecontain");
//         var restartButton = document.getElementById("restartCont");
//
//         if (continueButton.style.display === "none") {
//             restartButton.style.display = "flex";
//             restartButton.style.opacity = "1";
//             restartButton.style.zIndex = "99999";
//
//
//         } else {
//             restartButton.style.display = "none";
//         }
//     }
//
//
// });
// //restarts page if restart button is triggered
function restartPage() {
    location.reload(); // Reload the page
    // or
    // window.location.href = window.location.href;
}

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

//img actions
// Function to toggle visibility of imgslides div
function toggleImgSlides() {
    var imgSlidesDiv = document.querySelector('.imgslides');
    if (imgSlidesDiv.style.display === 'none'|| imgSlidesDiv.style.display === '') {
        imgSlidesDiv.style.display = 'block';
    } else {
        imgSlidesDiv.style.display = 'none';
    }
}
// Add click event listener to the "click me" link
document.getElementById('toggleButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    toggleImgSlides(); // Call the toggleImgSlides function
});


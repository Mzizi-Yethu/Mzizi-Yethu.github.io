const textElement = document.getElementById('goal');
const textToType = "The overarching goal of the organisation is to nurture how communities can properly harness information in the digital space to address their community and the nation’s problems and opportunities. ";

let index = 0;

function typeText() {
    if (index < textToType.length) {
        textElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 15); // Adjust typing speed here
    }
}

typeText();

$(document).ready(function () {
    // Smooth scroll to the scrolling content
    $('.scrolling-content-link').click(function () {
        $('html, body').animate({
            scrollTop: $('.scrolling-content').offset().top
        }, 1000); // Adjust the duration as needed
    });
});

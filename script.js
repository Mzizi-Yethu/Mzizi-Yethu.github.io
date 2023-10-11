const textElement = document.getElementById('typing-text');
const textToType = " Creating a future where communities have Equitable access to quality education, innovative opportunities and knowledge resources that support sustainable development.";

let index = 0;

function typeText() {
    if (index < textToType.length) {
        textElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 15); // Adjust typing speed here
    }
}

typeText();

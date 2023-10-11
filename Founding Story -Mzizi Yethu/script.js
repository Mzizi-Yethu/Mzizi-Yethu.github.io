const textElement = document.getElementById('name-description');
const textToType = " Our name, Mzizi-Yethu (Our roots), is a Swahili name which uniquely projects our broad perspective in seeking to address challenges stalling development in Africa at grassroots levels.";

let index = 0;

function typeText() {
    if (index < textToType.length) {
        textElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 15); // Adjust typing speed here
    }
}

typeText();

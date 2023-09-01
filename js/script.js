const textToType = "Hi, my name's Márcio Barcelos"

let currentChar = 0;
let interval;

function textText () {
    const textElement = document.getElementById("title");
    const char = textToType[currentChar];
    textElement.textContent += char;
    currentChar

    if (currentChar === textToType.length) {
        
    }
}

interval = setInterval(textToType, 100);
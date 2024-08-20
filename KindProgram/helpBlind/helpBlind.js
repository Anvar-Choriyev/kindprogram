function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}

function runCode() {
    const code = document.getElementById('codeInput').value;
    try {
        const result = eval(code);
        document.getElementById('output').innerText = `Natija: ${result}`;
        speakText(`Natija: ${result}`);
    } catch (error) {
        document.getElementById('output').innerText = `Xato: ${error.message}`;
        speakText(`Xato: ${error.message}`);
    }
}

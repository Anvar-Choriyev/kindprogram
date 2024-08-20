// Example function for downloading audio lessons
function downloadAudio() {
    alert('Your audio tutorial is being downloaded.');
}

// Example function for downloading Braille lessons
function downloadBraille() {
    alert('Your Braille tutorial is being downloaded.');
}

// Form submission with accessible feedback
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});

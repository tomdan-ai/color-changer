// Get the button element by its ID
const button = document.getElementById('btn');

// Function to generate a random color

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// Event Listeners
button.addEventListener('click', function () {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
});
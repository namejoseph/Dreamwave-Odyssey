document.addEventListener('DOMContentLoaded', () => {
    const animationLayer = document.getElementById('animationLayer');

    // Debugging: Check if animationLayer exists
    if (!animationLayer) {
        console.log('Error: animationLayer not found in the DOM');
        return;
    }

    function createBox() {
        const box = document.createElement('div');
        const size = Math.random() * 30 + 5; // Random size between 5px and 35px
        box.style.position = 'absolute';
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = '#79ffff';
        box.style.top = `${Math.random() * 100}%`;
        box.style.left = `${Math.random() * 100}%`;
        box.style.opacity = 0;
        box.style.animation = 'fadeInOut 2s forwards'; // Slightly faster
        animationLayer.appendChild(box);

        // Debugging: Log when a box is created
        console.log('Box created:', box);

        // Remove the box after animation ends
        setTimeout(() => {
            box.remove();
            // Debugging: Log when a box is removed
            console.log('Box removed');
        }, 2000); // Matches animation duration
    }

    // Create more boxes by reducing interval time
    setInterval(createBox, 200); // Create boxes more frequently
    console.log('Animation script loaded and running');
});
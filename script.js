

// JavaScript for animating boxes in the animation layer
const animationLayer = document.getElementById('animationLayer');

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

    // Remove the box after animation ends
    setTimeout(() => box.remove(), 2000); // Matches animation duration
}

// Create more boxes by reducing interval time
setInterval(createBox, 200); // Create boxes more frequently
setTimeout(() => box.remove(), 2500); // Keep them on screen longer


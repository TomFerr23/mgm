document.addEventListener('DOMContentLoaded', () => {
    const wheel = document.querySelector(".wheel");
    const spinBtn = document.querySelector(".spinBtn");
    const spinSound = document.getElementById("spinSound");
    let currentRotation = 0; // Track the current end rotation of the wheel

    spinBtn.addEventListener("click", function() {
        // Reset settings for the spin
        spinSound.pause(); // Stop any currently playing spin sound
        spinSound.currentTime = 0; // Reset sound time to start
        spinSound.play(); // Play the spin sound
        spinSound.playbackRate = 1; // Use a normal playback rate

        const spinIncrement = 3600; // Define the degrees for each spin
        currentRotation += spinIncrement; // Add to the current rotation for a forward spin

        // Apply the spin with incremental rotation
        wheel.style.transition = 'transform 7s ease-out';
        wheel.style.transform = `rotate(${currentRotation}deg)`;

        // Schedule to end the spin sound and trigger the gimmick animation
        setTimeout(() => {
            // Stop the spin sound exactly when the wheel stops
            spinSound.pause();
            spinSound.currentTime = 0;
            // Dispatch the custom event to signal the wheel has stopped
    document.dispatchEvent(new CustomEvent('wheelStop'));
            
        }, 7000); // This delay should match the duration of the wheel's spin animation
    });
});

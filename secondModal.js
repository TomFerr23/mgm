document.addEventListener('DOMContentLoaded', () => {
    const secondModal = document.getElementById("secondModal");
    const secondClose = document.querySelector(".secondClose");

    // Function to show the second modal
    function showSecondModal() {
        secondModal.style.display = "block";
    }

    // Close the modal when the close button is clicked
    secondClose.onclick = function() {
        secondModal.style.display = "none";
    }

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == secondModal) {
            secondModal.style.display = "none";
        }
    }

    // Listen for the wheel stop event from app.js
    document.addEventListener('wheelStop', () => {
        setTimeout(showSecondModal, 2000); // Show the modal 2 seconds after the wheel stops
    });
});

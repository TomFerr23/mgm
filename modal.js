document.addEventListener('DOMContentLoaded', () => {
    // Get the modal
    var modal = document.getElementById("termsModal");
  
    // Get the link that opens the modal
    var termsLink = document.getElementById("terms");
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  
    // When the user clicks on the link, open the modal
    termsLink.onclick = function() {
      modal.style.display = "block";
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  
// Set the countdown time (10 minutes)
let countDownDate = new Date().getTime() + 10 * 60000;

// Update the countdown every second
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    // Time calculations for hours, minutes and seconds
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective divs
    document.getElementsByClassName('image-container')[0].innerHTML = hours + "h ";
    document.getElementsByClassName('image-container')[1].innerHTML = minutes + "m ";
    document.getElementsByClassName('image-container')[2].innerHTML = seconds + "s ";

    // If the countdown is finished, display some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName('image-container')[0].innerHTML = "EXPIRED";
        document.getElementsByClassName('image-container')[1].innerHTML = "";
        document.getElementsByClassName('image-container')[2].innerHTML = "";
    }
}, 1000);   
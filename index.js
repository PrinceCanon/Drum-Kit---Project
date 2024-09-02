// Detecting button press.
var numberOfDrumButtons = document.querySelectorAll(".drum").length; // Saving the number of drums.

// Iterating through each drum set/class to look for a button click.
for (var i=0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML; // Saving the specific button.
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

// Detecting keyboard press.
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

// Function to make sound.
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom1 = new Audio("./sounds/tom-2.mp3");
            tom1.play();
            break;

        case "s":
            var tom1 = new Audio("./sounds/tom-3.mp3");
            tom1.play();
            break;

        case "d":
            var tom1 = new Audio("./sounds/tom-4.mp3");
            tom1.play();
            break;

        case "j":
            var tom1 = new Audio("./sounds/crash.mp3");
            tom1.play();
            break;

        case "k":
            var tom1 = new Audio("./sounds/kick-bass.mp3");
            tom1.play();
            break;

        case "l":
            var tom1 = new Audio("./sounds/snare.mp3");
            tom1.play();
            break;

        default:
            break;
    }
}

// Function for button press animation.
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey); // Grabbing the active class and saving it to a variable.
    activeButton.classList.add("pressed");
    // Removing the CSS style for when the button is pressed.
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
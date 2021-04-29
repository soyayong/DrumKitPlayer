//alert("Hello bro")

//find button 1st , use addEventListenerwhen click choose after fuction
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I got clicked!");
// }

//or combine like below
//.drum is as class name
//Detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {
        //what to do when click
        // alert("I got clicked!");

        var buttonInnerHTML = this.innerHTML;

        //buttonInnerHTML can pass data to makesound for triggle
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
    });
}

//Detecting keyboard press
document.addEventListener("keypress", function(event) {

    //fuction event pass through here
    makeSound(event.key);

    buttonAnimation(event.key);
});


// sound fuction 
function makeSound(key) {

    // this will know which data need do on that loop
    switch (key) {

        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log()
            break;

    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey) //to get .data

    activeButton.classList.add("pressed")

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
// Getting length all the button with class drum
var numberOfButtons = document.querySelectorAll(".drum").length;

//iterating for every buttons to add event Listener
for (var i = 0; i < numberOfButtons; i++) {
  // Using click action and anonymous function
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
  });
}

//KeyBoard Key press
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  addAnimation(event.key);
});

//Function to play the sound
function playSound(keyPressed) {
  switch (keyPressed) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case "l":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "j":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
    case "k":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
    default :
    console.log(buttonInnerHTML);
  }
}

function addAnimation(key) {
  var button = document.querySelector("."+key);
  button.classList.add("pressed");
  setTimeout(function() {
    button.classList.remove("pressed");
  }, 100);
}







// var audio = new Audio("sounds/crash.mp3");
// audio.play();

/*
1) One way of adding event Listener
2) We are not adding parenthesis to the function call in handleClick as it will run function on loading.
3) We can use anonymous functions so as to work without function name

document.querySelectorAll("button")[2].addEventListener("click", handleClick);

function handleClick() {
  alert("Button Clicked!");
}
*/

let numberOfDrumButton = document.querySelectorAll(".drum").length; //for getting the length(or number) of elements cointaing .drum class

//for detecting button press

for(let i = 0 ; i<numberOfDrumButton ; i++){ //for adding eventListener to all the button

    document.querySelectorAll(".drum")[i].addEventListener("click", handelClick); 

}

//function which will handel clicks 
function handelClick(){
   var buttonValue = this.innerHTML;
   makeSound(buttonValue);
   buttonAnimation(buttonValue);
}

//for detecting keyboard press

//adding eventListener to the whole document for key press
document.addEventListener("keypress", function (event){ //in this instead of calling function we have made a anonymous function
    makeSound(event.key);  
    buttonAnimation(event.key);
 });


//function to handel sounds
function makeSound(key){
    switch (key) {
        case "w":
                  var tom1 = new Audio('sounds/tom-1.mp3');
                  tom1.play();
            break;
        
         case "a":
                  var tom2 = new Audio('sounds/tom-2.mp3');
                  tom2.play();
            break;
        
         case "s":
                  var tom3 = new Audio('sounds/tom-3.mp3');
                  tom3.play();
            break;
         
         case "d":
                  var tom4 = new Audio('sounds/tom-4.mp3');
                  tom4.play();
            break;  
           
         case "j":
                  var snare = new Audio('sounds/snare.mp3');
                  snare.play();
            break;
   
         case "k":
                  var crash = new Audio('sounds/crash.mp3');
                  crash.play();
            break;
    
         case "l":
                  var kick = new Audio('sounds/kick-bass.mp3');
                  kick.play();
            break;  
            
         default: console.log(buttonValue);
            break;
    }
}

//function to generate the animation corresponding to key/button pressed
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed") }, 100);

}
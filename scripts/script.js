//event listener for when a key is pressed down
const keyPress = document.addEventListener("keydown", () => {
    console.log(event.which + " down");
    keyDrumDown();
});

//event listener for when a key is released
const keyReleased = document.addEventListener("keyup", () => {
    console.log(event.which + " up");
    keyDrumUp();
});

//function to links actions to when a key is pressed down. Will controll actions associated with each keypress
const keyDrumDown = () => {
    if (event.which === 65) {
        console.log("a was pressed");
        document.getElementById("a").style.backgroundColor = "red";
    }
    if (event.which === 83) {
        console.log("s was pressed");
        document.getElementById("s").style.backgroundColor = "red";
    }
    if (event.which === 68) {
        console.log("d was pressed")
        document.getElementById("d").style.backgroundColor = "red";
    } 
    if (event.which === 70) {
        console.log("f was pressed");
        document.getElementById("f").style.backgroundColor = "red";
    }   
}

//function to links actions to when a key is pressed down. Will controll actions associated with each key relased
const keyDrumUp = () => {
    if (event.which === 65) {
        console.log("a was pressed");
        document.getElementById("a").style.backgroundColor = "white";
    }
    if (event.which === 83) {
        console.log("s was pressed");
        document.getElementById("s").style.backgroundColor = "white";
    }
    if (event.which === 68) {
        console.log("d was pressed")
        document.getElementById("d").style.backgroundColor = "white";
    } 
    if (event.which === 70) {
        console.log("f was pressed");
        document.getElementById("f").style.backgroundColor = "white";
    }   
}
    
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
        // console.log("a was pressed");
        document.getElementById("a").style.backgroundColor = "#b75d69";
    }
    if (event.which === 83) {
        // console.log("s was pressed");
        document.getElementById("s").style.backgroundColor = "#b75d69";
    }
    if (event.which === 68) {
        // console.log("d was pressed")
        document.getElementById("d").style.backgroundColor = "#b75d69";
    } 
    if (event.which === 70) {
        // console.log("f was pressed");
        document.getElementById("f").style.backgroundColor = "#b75d69";
    }   
}

//function to links actions to when a key is pressed down. Will controll actions associated with each key relased
const keyDrumUp = () => {
    if (event.which === 65) {
        console.log("a was pressed");
        document.getElementById("a").style.backgroundColor = "#eacdc2";
    }
    if (event.which === 83) {
        console.log("s was pressed");
        document.getElementById("s").style.backgroundColor = "#eacdc2";
    }
    if (event.which === 68) {
        console.log("d was pressed")
        document.getElementById("d").style.backgroundColor = "#eacdc2";
    } 
    if (event.which === 70) {
        console.log("f was pressed");
        document.getElementById("f").style.backgroundColor = "#eacdc2";
    }   
}
    
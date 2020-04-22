//event listener for when a key is pressed down
const keyPress = document.addEventListener("keydown", () => {
    // console.log(event.which + " down");
    keyDrumDown();
});

//event listener for when a key is released
const keyReleased = document.addEventListener("keyup", () => {
    // console.log(event.which + " up");
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
    //pianokey events
    if (event.which === 81) {
        document.getElementById("q").style.backgroundColor = "#b75d69";
    } 
    if (event.which === 50) {
        document.getElementById("two").style.backgroundColor = "#b75d69";
    }
    if (event.which === 87) {
        document.getElementById("w").style.backgroundColor = "#b75d69";
    }
    if (event.which === 51) {
        document.getElementById("three").style.backgroundColor = "#b75d69";
    }
    if (event.which === 69) {
        document.getElementById("e").style.backgroundColor = "#b75d69";
    }
    if (event.which === 52) {
        document.getElementById("four").style.backgroundColor = "#b75d69";
    }
    if (event.which === 82) {
        document.getElementById("r").style.backgroundColor = "#b75d69";
    }
    if (event.which === 53) {
        document.getElementById("five").style.backgroundColor = "#b75d69";
    }
    if (event.which === 84) {
        document.getElementById("t").style.backgroundColor = "#b75d69";
    }
    if (event.which === 54) {
        document.getElementById("six").style.backgroundColor = "#b75d69";
    }
    if (event.which === 89) {
        document.getElementById("y").style.backgroundColor = "#b75d69";
    }
    if (event.which === 55) {
        document.getElementById("seven").style.backgroundColor = "#b75d69";
    }
    if (event.which === 85) {
        document.getElementById("u").style.backgroundColor = "#b75d69";
    }
    if (event.which === 56) {
        document.getElementById("eight").style.backgroundColor = "#b75d69";
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
    //pianokey events
    if (event.which === 81) {
        document.getElementById("q").style.backgroundColor = "#eacdc2";
    } 
    if (event.which === 50) {
        document.getElementById("two").style.backgroundColor = "black";
    }
    if (event.which === 87) {
        document.getElementById("w").style.backgroundColor = "#eacdc2";
    }
    if (event.which === 51) {
        document.getElementById("three").style.backgroundColor = "black";
    }
    if (event.which === 69) {
        document.getElementById("e").style.backgroundColor = "#eacdc2";
    }
    if (event.which === 52) {
        document.getElementById("four").style.backgroundColor = "black";
    }
    if (event.which === 82) {
        document.getElementById("r").style.backgroundColor = "#eacdc2";
    }
    if (event.which === 53) {
        document.getElementById("five").style.backgroundColor = "black";
    }
    if (event.which === 84) {
        document.getElementById("t").style.backgroundColor = "#eacdc2";
    }
    if (event.which === 54) {
        document.getElementById("six").style.backgroundColor = "black";
    }
    if (event.which === 89) {
        document.getElementById("y").style.backgroundColor = "#eacdc2";
    }
    if (event.which === 55) {
        document.getElementById("seven").style.backgroundColor = "black";
    }
    if (event.which === 85) {
        document.getElementById("u").style.backgroundColor = "#eacdc2";
    }
    if (event.which === 56) {
        document.getElementById("eight").style.backgroundColor = "black";
    }
}
    
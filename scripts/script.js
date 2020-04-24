//event listener for when a key is pressed down
const keyPress = document.addEventListener("keydown", () => {
    console.log(event.which + " down");
    keyDrumDown();
});

//event listener for when a key is released
const keyReleased = document.addEventListener("keyup", () => {
    // console.log(event.which + " up");
    keyDrumUp();
});

//arrays that hold each drum type
const clapsPlaylist = ["audio/clap_six.wav", "audio/clap_eight.wav"];
const snarePlaylist = ["audio/snare_one.wav", "audio/snare_two.wav"];
const kickPlaylist = ["audio/kick_four.wav", "audio/kick_three.wav"];

//function to links actions to when a key is pressed down. Will controll actions associated with each keypress
const keyDrumDown = () => {
    if (event.which === 65) {
        //provides visual indicator that key has been pressed by changing background color
        document.getElementById("a").style.backgroundColor = "#b75d69";

        //Initializes Audio constructor assigns the first drum beat from claps playlist to variable
        const drumClapOne = new Audio();
        drumClapOne.src = clapsPlaylist[0];
        drumClapOne.play();
    }
    if (event.which === 83) {
        document.getElementById("s").style.backgroundColor = "#b75d69";
        //Initializes Audio constructor assigns the second drum beat from claps playlist to variable
        const drumClapTwo = new Audio();
        drumClapTwo.src = clapsPlaylist[1];
        drumClapTwo.play();
    }
    if (event.which === 68) {
        document.getElementById("d").style.backgroundColor = "#b75d69";
        //Initializes Audio constructor assigns the first drum beat from snares playlist to variable
        const drumSnareOne = new Audio();
        drumSnareOne.src = snarePlaylist[0];
        drumSnareOne.play();
    } 
    if (event.which === 70) {
        document.getElementById("f").style.backgroundColor = "#b75d69";
        //Initializes Audio constructor assigns the second drum beat from kick playlist to variable
        const drumSnareTwo = new Audio();
        drumSnareTwo.src = snarePlaylist[1];
        drumSnareTwo.play();
    } 
    if (event.which === 71) {
        document.getElementById("g").style.backgroundColor = "#b75d69";
        //Initializes Audio constructor assigns the first drum beat from kick playlist to variable
        const drumKickOne = new Audio();
        drumKickOne.src = kickPlaylist[0];
        drumKickOne.play();
    } 
    if (event.which === 72) {
        document.getElementById("h").style.backgroundColor = "#b75d69";
        //Initializes Audio constructor assigns the second drum beat from kick playlist to variable
        const drumKickTwo = new Audio();
        drumKickTwo.src = kickPlaylist[1];
        drumKickTwo.play();
    } 

/*************************************************************************************/
/********** PIANO KEY DOWN EVENTS*******/
/*************************************************************************************/
   
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
    if (event.which === 71) {
        document.getElementById("g").style.backgroundColor = "#eacdc2";
    } 
    if (event.which === 72) {
        document.getElementById("h").style.backgroundColor = "#eacdc2";
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
    
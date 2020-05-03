// *******************************PLAY BUTTON*****************************//
// **********************************************************************//
//creates an instance of the audio context
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

// grabs audio element under play button in index.html
const audioElement = document.querySelector("#play-audio")
// console.log(audioElement.src);
const source = audioElement.src;
// console.log(source);
const track = audioContext.createMediaElementSource(audioElement);

//handles output node
track.connect(audioContext.destination);

//query selector for play button in index.html
const playButton = document.querySelector("#play-button");
// console.log(audioContext.state);

//Event listener for when the play button is pressed
playButton.addEventListener('click', () => {

    // checks if context is in suspeneded state as per autoplay policy in Web Audio API
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    //play or pause track depending on state
    if (playButton.dataset.playing === 'false') {
        audioElement.play();
        playButton.dataset.playing = 'true';
    } else if (playButton.dataset.playing === 'true') {
        audioElement.pause();
        playButton.dataset.playing = 'false';
    }
}, false);

//when the audio stops playing the ended event fires
audioElement.addEventListener('ended', () => {
    playButton.dataset.playing = 'false'
}, false);

//***************************RECORD BUTTON **********************/
// *************************************************************/
const audioTrack = document.addEventListener("keydown", () => {
    console.log(event.which + ' key tracking')
    //********************************************** */
    //mappedArray is the const variable in instrument.js that holds the selected drums beats from a user.
    const songAudioTrack = [];
    const song = mappedArray;
    console.log(song + " tracking for song");
    //********************************************** */
    //switch events for when a key is pressed
    switch(event.which) {
        case 65: 
            //gets drum beat from song array
            songAudioTrack.push(song[0])
            
            //create div with class as drum-recorded
            let playInputDivA = document.createElement("DIV");
            const playTextA = document.createTextNode("A");
            playInputDivA.classList.add("drum-recorded");
            playInputDivA.setAttribute("id", "drum-a");

            //appends the atributes to audio track 
            playInputDivA.appendChild(playTextA);
            document.getElementById("recorded-beat-container").appendChild(playInputDivA);

            //sets value to element
            let valueAssignmentA = document.getElementById("drum-a");
            console.log("test for get value");
            valueAssignmentA.setAttribute("value", song[0]);
        break;

        case 83: 
        // console.log('s');
        songAudioTrack.push(song[1])

            //create div with class as drum-recorded
            const playInputDivS = document.createElement("DIV");
            const playTextS = document.createTextNode("S");
            playInputDivS.classList.add("drum-recorded");
            playInputDivS.setAttribute("id", "drum-s");

            //appends the atributes to audio track 
            playInputDivS.appendChild(playTextS);
            document.getElementById("recorded-beat-container").appendChild(playInputDivS);

             //sets value to element
             let valueAssignmentS = document.getElementById("drum-s");
             console.log("test for get value");
             valueAssignmentS.setAttribute("value", song[1]);
        break;

        case 68: 
        // console.log('d');
        songAudioTrack.push(song[2])
            console.log(songAudioTrack.length);

            //create div with class as drum-recorded
            const playInputDivD = document.createElement("DIV");
            const playTextD = document.createTextNode("D");
            playInputDivD.classList.add("drum-recorded");
            playInputDivD.setAttribute("id", "drum-d");

            //appends the atributes to audio track 
            playInputDivD.appendChild(playTextD);
            document.getElementById("recorded-beat-container").appendChild(playInputDivD);

             //sets value to element
             const valueAssignmentD = document.getElementById("drum-d");
             console.log("test for get value");
             valueAssignmentD.setAttribute("value", song[2]);
        break;
        
        case 70: 
        // console.log('f');
        songAudioTrack.push(song[3])
            console.log(songAudioTrack.length);

            //create div with class as drum-recorded
            const playInputDivF = document.createElement("DIV");
            const playTextF = document.createTextNode("F");
            playInputDivF.classList.add("drum-recorded");
            playInputDivF.setAttribute("id", "drum-f");

            //appends the atributes to audio track 
            playInputDivF.appendChild(playTextF);
            document.getElementById("recorded-beat-container").appendChild(playInputDivF);

             //sets value to element
             const valueAssignmentF = document.getElementById("drum-f");
             console.log("test for get value");
             valueAssignmentF.setAttribute("value", song[3]);
        break;
        
        case 71: 
        // console.log('g');
        songAudioTrack.push(song[4])
        console.log(songAudioTrack.length);

        //create div with class as drum-recorded
        const playInputDivG = document.createElement("DIV");
        const playTextG = document.createTextNode("G");
        playInputDivG.classList.add("drum-recorded");
        playInputDivG.setAttribute("id", "drum-g");

        //appends the atributes to audio track 
        playInputDivG.appendChild(playTextG);
        document.getElementById("recorded-beat-container").appendChild(playInputDivG);

         //sets value to element
         const valueAssignmentG = document.getElementById("drum-g");
         console.log("test for get value");
         valueAssignmentG.setAttribute("value", song[4]);
        break;
        
        case 72: 
        // console.log('h');
        songAudioTrack.push(song[4])
        console.log(songAudioTrack.length);

        //create div with class as drum-recorded
        const playInputDivH = document.createElement("DIV");
        const playTextH = document.createTextNode("H");
        playInputDivH.classList.add("drum-recorded");
        playInputDivH.setAttribute("id", "drum-h");

        //appends the atributes to audio track 
        playInputDivH.appendChild(playTextH);
        document.getElementById("recorded-beat-container").appendChild(playInputDivH);

         //sets value to element
         const valueAssignmentH = document.getElementById("drum-h");
         console.log("test for get value");
         valueAssignmentH.setAttribute("value", song[5]);
        break;
        
        case 74: 
        // console.log('j');
        songAudioTrack.push(song[5])
        console.log(songAudioTrack.length);

        //create div with class as drum-recorded
        const playInputDivJ = document.createElement("DIV");
        const playTextJ = document.createTextNode("J");
        playInputDivJ.classList.add("drum-recorded");
        playInputDivJ.setAttribute("id", "drum-j");

        //appends the atributes to audio track 
        playInputDivJ.appendChild(playTextJ);
        document.getElementById("recorded-beat-container").appendChild(playInputDivJ);

         //sets value to element
         const valueAssignmentJ = document.getElementById("drum-j");
         console.log("test for get value");
         valueAssignmentJ.setAttribute("value", song[6]);
        break;
        
        case 75: 
        // console.log('k');
        songAudioTrack.push(song[6])
        console.log(songAudioTrack.length);

        //create div with class as drum-recorded
        const playInputDivK = document.createElement("DIV");
        const playTextK = document.createTextNode("K");
        playInputDivK.classList.add("drum-recorded");
        playInputDivK.setAttribute("id", "drum-k");

        //appends the atributes to audio track 
        playInputDivK.appendChild(playTextK);
        document.getElementById("recorded-beat-container").appendChild(playInputDivK);

         //sets value to element
         const valueAssignmentK = document.getElementById("drum-k");
         console.log("test for get value");
         valueAssignmentK.setAttribute("value", song[7]);
        break;

        default:
            console.log('nothing')
    }
});

// might need to set a time interval so that when the selected beat is pressed the time slot is apparent

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
            songAudioTrack.push(song[0])
            console.log(songAudioTrack.length);
            const playInputDivA = document.createElement("DIV");
            const playTextA = document.createTextNode("beat");
            playInputDivA.appendChild(playTextA);
            document.getElementById("recorded-beat-container").appendChild(playInputDivA);
        break;

        case 83: 
        // console.log('s');
        break;

        case 68: 
        // console.log('d');
        break;
        
        case 70: 
        // console.log('f');
        break;
        
        case 71: 
        // console.log('g');
        break;
        
        case 72: 
        // console.log('h');
        break;
        
        case 74: 
        // console.log('j');
        break;
        
        case 75: 
        // console.log('k');
        break;

        default:
            console.log('nothing')
    }
});

// might need to set a time interval so that when the selected beat is pressed the time slot is apparent

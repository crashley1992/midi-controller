// *******************************PLAY BUTTON*****************************//
// **********************************************************************//
//creates an instance of the audio context
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

// grabs audio element under play button in index.html
const audioElement = document.querySelector("#play-audio")
console.log(audioElement.src);
const source = audioElement.src;
console.log(source);
const track = audioContext.createMediaElementSource(audioElement);

//handles output node
track.connect(audioContext.destination);

//query selector for play button in index.html
const playButton = document.querySelector("#play-button");
console.log(audioContext.state);


playButton.addEventListener('click', () => {

    // checks if context is in suspeneded state as per autoplay policy in Web Audio API
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    //play or pause track depending on state
    if (playButton.dataset.playing === 'false') {
        audioElement.play();
        this.dataset.playing = 'true';
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

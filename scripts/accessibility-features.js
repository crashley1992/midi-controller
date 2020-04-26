// Makes toggle for open dyslexic font to display
//initializes the variable to true
let isClicked = true;

//function is assigned to the label class="switch" element for toggling between the different fonts
const toggle = () => {
    //allows state to switch between true and false
    isClicked = !isClicked;
    console.log('is clicked bool: ' + isClicked)
    //Gerogia is currently the default font
    if(isClicked === true) {
        console.log("omg so true");
        document.body.style.fontFamily = "Georgia";
    }
    //OpenDyslexic-Regular is what I am using to help those with Dyslexia read more easily 
    if(isClicked === false ) {
        console.log('false as heck')
        document.body.style.fontFamily = "OpenDyslexic-Regular";
    }
}
     

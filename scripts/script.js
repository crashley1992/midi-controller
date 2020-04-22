    window.onload = () => {
        const drumPress = document.getElementById("a");
    drumPress.addEventListener("keydown", drum);
    }
    
    const drum = () => {
        console.log("A was pressed")
    }
     


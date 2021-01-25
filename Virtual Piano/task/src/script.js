document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'a':
        case 's':
        case 'd':
        case 'f':
        case 'g':
        case 'h':
        case 'j':
            console.log(`The \'${event.key}\' key is pressed.`);
        break;
        default:
            console.log("Not a keyboard key");
    }
})
function changeBackground (){
    console.log(document.getElementById('main').style.backgroundColor);
    (document.getElementById('main').style.backgroundColor == "white") ? document.getElementById('main').style.backgroundColor = "#D5D1D2":
    document.getElementById('main').style.backgroundColor = "white";
}



const keyCode = ['4', '5', 'g', 'h']
let keyBindCheck = [];
window.addEventListener('keydown', (event) => {
    let pressedKey = event.key;

    if (pressedKey == '4' || pressedKey == '5' || pressedKey == 'g' || pressedKey == 'h'){
        keyBindCheck.push(pressedKey);

        for(let i = 0; i < keyBindCheck.length; i++ ){
            if(keyBindCheck[i] != keyCode[i]){
                (pressedKey == "4") ? keyBindCheck = ["4"]: keyBindCheck = [];
            }
        }
        if(keyBindCheck.length == 4){
            ShowModalPopup();
        }
        console.log(keyBindCheck.length);
        return console.log(keyBindCheck);
    }
    else{
        keyBindCheck = [];
    }

    return;
})

function ShowModalPopup() {
    document.getElementsByClassName('ModalPopup')[0].style.display = "flex";
    return;
}

function CloseModalPopup() {
    document.getElementsByClassName('ModalPopup')[0].style.display = "none";
    return;
}
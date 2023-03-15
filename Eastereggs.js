function changeBackground (){
    (document.getElementById('main').style.backgroundColor === "white") ? document.getElementById('main').style.backgroundColor = "#D5D1D2":
    document.getElementById('main').style.backgroundColor = "white";

    return console.log("number");
}

const keyCode = ['4', '5', 'g', 'h']
let keyBindCheck = [];
window.addEventListener('keydown', (event) => {
    let pressedKey = event.key;4

    if (pressedKey === "4" || pressedKey === "5" || pressedKey === "g" || pressedKey === "h"){
        keyBindCheck.push(pressedKey);

        for(let i = 0; i < keyBindCheck.length; i++ ){
            if(keyBindCheck[i] != keyCode[i]){
                (pressedKey == "4") ? keyBindCheck = ["4"]: keyBindCheck = [];
            }
        }
        if(keyBindCheck.length == 4){
            HiddenModalPopup();
        }
        return console.log(keyBindCheck);
    }
    else{
        keyBindCheck = [];
    }

    return;
})


function HiddenModalPopup() {

    const container = document.createElement('div');
    container.className = "ModalPopup";

    const closeTab = document.createElement('button')
    closeTab.className = "close";

    const exit = document.createElement('i')
    exit.className = "fa-solid fa-x";

    const title = document.createElement('h1');
    title.textContent = "DID YOU KNOW?";
    title.className = "secretTitle";
    
    const text = document.createElement('p');
    text.textContent = "That it's easter soon?!?!"
    text.className = "secretText"

    //document.getElementById("banner").appendChild(container);
    //container.appendChild(closeTab);
    //closeTab.appendChild(exit);
    //document.getElementById("banner").appendChild(title);
    //document.getElementById("banner").appendChild(text);

    return container;
}
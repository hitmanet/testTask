window.onload = function () {
    let btn = document.querySelector('#btnSub');
    btn.onclick = function () {
        let cmd = document.querySelector('#command').value;
        let msg = document.querySelector('#message').value;
        let commandMessage = {
            command: cmd,
            message: msg
        };
        submitForm(commandMessage);
    };

};

function submitForm(commandMessage) {
    messageTable[commandMessage]();
}

//let messageTable
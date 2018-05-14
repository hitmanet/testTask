window.onload = function () {
    let btn = document.querySelector('#btnSub');
    btn.onclick = function () {
        let cmd = document.querySelector('#command').value;
        let msg = document.querySelector('#message').value;
        let commandMessage = {
            command: cmd,
            message: msg
        };
        console.log(commandMessage);
        submitForm(commandMessage);
    };


};



function submitForm(commandMessage) {
    let messageTable = {
        450: function () {alert('ok')},
        506: function () {alert(commandMessage.message)},
        310: function () {document.location.href = "https://www.yandex.ru/"},
        570: function () {console.log('ERROR'); alert(commandMessage.message)},
        605: function () {
            let wrapper = document.querySelector('.wrapper');
            let div = document.createElement('div');
            div.innerHTML = commandMessage.message;
            wrapper.appendChild(div);

        }


    };
    return messageTable[commandMessage.command]();
}







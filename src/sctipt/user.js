'use strict';
const userNameInput = document.getElementById('user-name')
const setName = document.getElementById('set-name');

setName.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
        return;
    }
    console.log(userName)
}
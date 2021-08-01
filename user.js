'use strict';
const userNameInput = document.getElementById('user-name')
SetName.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
        return;
    }
}

const country = [
    'America',
    'Australia',
    'France',
    'Germany',
    'Hawaii',
    'Italy',
    'Japan',
    'Korea',
    'NewZealand',
    'Singapore',
    'Spain',
    'UK'
];

/**
 * @param {string} userName ユーザーの名前
 * @return {string} 国名
 * */

let result = country[index];
result = result.replaceAll('{userName}',userName)
return result;

console.log(assessment('次郎'));
console.log(assessment('太郎'));
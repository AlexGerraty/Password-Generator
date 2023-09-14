// Created variable for retrieving the values from each criteria
var resultEl = document.getElementById('result')
var lengthEl = document.getElementById('length')
var uppercaseEl = document.getElementById('uppercase')
var lowercaseEl = document.getElementById('lowercase')
var numberEl = document.getElementById('number')
var symbolEl = document.getElementById('symbol')
var generateEl = document.getElementById('generate')
// Added Event listeners for each value
generateEl.addEventListener("click", function clicked() {
    var length = +lengthEl.value;
    var hasUpper = uppercaseEl.checked;
    var hasLower = lowercaseEl.checked;
    var hasNumber = numberEl.checked;
    var hasSymbol = symbolEl.checked;
    
    resultEl.innerText = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol)
});
// Generated Password function
function generatePassword(length, upper, lower, number, symbol) {

    let generatePassword = '';
    var typesChecked = upper + lower + number + symbol;
    //Identifying what boxes are ticked and removed the value that are not checked
    var typesCheckedArr = [{upper}, {lower}, {number}, {symbol}].filter
    (item => Object.values(item)[0]);
    
    if(typesChecked === 0) {
        return '';
    }
    // Looping the function for total length
    for(var i = 0; i < length; i += typesChecked) {
        typesCheckedArr.forEach(type => {
            var funcName = Object.keys(type)[0];
            generatePassword += randomFunc[funcName]();
        })


    }
// Returning the dinal password
    var finalPassword = generatePassword.slice(0, length);
    return finalPassword
}
// Created keys for the random function
var randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol 
};





//Functions for random generator using the in built Character code 

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
    var symbols = '!@#$%^&*(){}[]_-=\,.';
    return symbols[Math.floor(Math.random()* symbols.length)]
}
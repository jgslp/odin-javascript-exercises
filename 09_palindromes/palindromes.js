const palindromes = function (string) {
    let reducedString = string.replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    let reversedString = reducedString.split("").reverse().join("");
    return (reducedString === reversedString)
};


// Do not edit below this line
module.exports = palindromes;

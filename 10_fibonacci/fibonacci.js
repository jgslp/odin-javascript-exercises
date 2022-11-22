const fibonacci = function(digit) {
    if (digit < 0) {
        return 'OOPS';
    }
    let array = [1, 1];
    for (let i = 2; i < digit; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    return array[digit - 1];
};


// Do not edit below this line
module.exports = fibonacci;

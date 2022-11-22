const sumAll = function(x, y) {
    const array = [];
    if (typeof x !== "number" || typeof y !== "number") {
        return "ERROR";
    }
    if (x < 0 || y < 0) {
        return "ERROR";
    } 
    if (x < y) {
        for (let i = x; i <= y; i++) {
            array.push(i);
        }
    } else if (y < x) {
        for (let i = y; i <= x; i++) {
            array.push(i);
        }
    }
    return array.reduce((acc, item) => acc + item, 0)
};

// Do not edit below this line
module.exports = sumAll;

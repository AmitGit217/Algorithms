function numberAddition(str) {
    const isNum = /\d+/gi;
    const numbers = str.match(isNum) || 0;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = parseInt(numbers[i]);
        sum += numbers[i];
    }
    return sum;
}

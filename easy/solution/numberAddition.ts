function numberAddition(str: string) {
    const isNum = /\d+/gi;
    const numbers = str.match(isNum) || 0;
    let sum = 0;
    if (numbers) {
        for (let i = 0; i < numbers.length; i++) {
            const number = parseInt(numbers[i]);
            sum += number;
        }
    }

    return sum;
}

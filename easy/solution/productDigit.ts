function productDigits(num: number) {
    let firstNum = num;
    const results: number[] = [];
    while (firstNum >= 1) {
        let secondNum = num / firstNum;
        if (num % firstNum == 0) {
            results.push(
                firstNum.toString().length + secondNum.toString().length
            );
        }
        firstNum -= 1;
    }
    return Math.min(...results);
}

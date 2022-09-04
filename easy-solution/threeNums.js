function threeNumbers(str) {
    const wordsArr = str.split(" ");
    const numbersArr = wordsArr.map((word) => word.match(/\d+/gi));

    for (let numbers of numbersArr) {
        let digits = numbers.join("").split("");
        const threeAdjacent = numbers.length < 2;
        const notExactlyThreeNumbers = digits.length !== 3;
        const twoNumbersAreEqual =
            digits[0] === digits[1] ||
            digits[0] === digits[2] ||
            digits[1] == digits[2];
        if (threeAdjacent || notExactlyThreeNumbers || twoNumbersAreEqual) {
            return false;
        }
    }

    return true;
}

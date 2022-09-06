function vowelSquare(strArr) {
    const vowels = ["a", "e", "i", "o", "u"];

    for (let row = 0; row < strArr.length - 1; row++) {
        for (let column = 0; column < strArr[row].length - 1; column++) {
            const topLeft = vowels.includes(strArr[row][column]);
            const topRight = vowels.includes(strArr[row][column + 1]);
            const downLeft = vowels.includes(strArr[row + 1][column]);
            const downRight = vowels.includes(strArr[row + 1][column + 1]);
            const thereIsMatrix = topLeft && topRight && downLeft && downRight;

            if (thereIsMatrix) {
                return `${row}-${column}`;
            }
        }
    }
    return "not found";
}

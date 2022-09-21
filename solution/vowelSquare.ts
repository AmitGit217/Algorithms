function vowelSquare(strArr: string[]) {
    const vowels = new Set<string>(["a", "e", "i", "o", "u"]);

    for (let row = 0; row < strArr.length - 1; row++) {
        for (let col = 0; col < strArr[row].length - 1; col++) {
            const topLeft = vowels.has(strArr[row][col]);
            const topRight = vowels.has(strArr[row][col + 1]);
            const downLeft = vowels.has(strArr[row + 1][col]);
            const downRight = vowels.has(strArr[row + 1][col + 1]);
            const thereIsMatrix = topLeft && topRight && downLeft && downRight;

            if (thereIsMatrix) {
                return `${row}-${col}`;
            }
        }
    }
    return "not found";
}

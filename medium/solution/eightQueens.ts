function EightQueens(strArr: string[]) {
    const chessMatrix = strArr
        .map((item) => item.match(/\d/g))
        .map((item) => [parseInt(item![0]), parseInt(item![1])]);

    const results: Array<number[]> = [];

    chessMatrix.forEach((queen) => {
        chessMatrix.forEach((queenTwo) => {
            if (queen[0] !== queenTwo[0] || queen[1] !== queenTwo[1]) {
                if (queen[0] === queenTwo[0]) {
                    results.push(queen);
                }
                if (queen[1] === queenTwo[1]) {
                    results.push(queen);
                }
                if (
                    Math.abs(queen[1] - queenTwo[1]) ===
                    Math.abs(queen[0] - queenTwo[0])
                ) {
                    results.push(queen);
                }
            }
        });
    });
    return results.length ? `(${results[0].join(",")})` : true;
}

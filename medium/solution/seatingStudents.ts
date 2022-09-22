function SeatingStudents(arr: number[]) {
    const numberOfTables = arr.shift() || 0;
    const tableMatrix: Array<number[]> = [];
    const setOfCombinations = new Set<number[]>();
    const setOfTaken = new Set(arr);

    for (let i = 1; i <= numberOfTables; i += 2) {
        tableMatrix.push([i, i + 1]);
    }

    for (let row = 0; row < tableMatrix.length; row++) {
        for (let col = 0; col < tableMatrix[row].length; col++) {
            const current = tableMatrix[row][col];

            if (col < tableMatrix[row].length - 1) {
                const right = tableMatrix[row][col + 1];
                if (!setOfTaken.has(right) && !setOfTaken.has(current)) {
                    setOfCombinations.add([current, right]);
                }
            }
            if (row !== tableMatrix.length - 1) {
                const down = tableMatrix[row + 1][col];
                if (!setOfTaken.has(current) && !setOfTaken.has(down)) {
                    setOfCombinations.add([current, down]);
                }
            }
        }
    }
    return setOfCombinations.size;
}

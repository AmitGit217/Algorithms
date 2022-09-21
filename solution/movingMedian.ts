function MovingMedian(arr: number[]) {
    const results: Array<number> = [];
    const windowSize = arr.shift() || 0;

    // Create window
    for (let i = 0; i <= windowSize; i++) {
        const range = arr.slice(0, i).sort((a, b) => a - b);
        const median = range[Math.floor(range.length / 2)];
        const medianMinusOne = range[Math.floor(range.length / 2) - 1];
        if (range.length && i <= arr.length) {
            if (range.length % 2 !== 0) {
                results.push(median);
            } else {
                results.push((median + medianMinusOne) / 2);
            }
        }
    }

    // Move window
    for (let i = 1; i < arr.length; i++) {
        const range = arr.slice(i, i + windowSize).sort((a, b) => a - b);
        const median = range[Math.floor(range.length / 2)];
        const medianMinusOne = range[Math.floor(range.length / 2) - 1];
        if (range.length === windowSize) {
            if (range.length % 2 !== 0) {
                results.push(median);
            } else {
                results.push((median + medianMinusOne) / 2);
            }
        }
    }

    return results.join(",");
}

function overlappingRanges(arr) {
    const overLapSet = new Set();
    const firstArr = arr.slice(0, 2);
    const secondArr = arr.slice(2, 4);
    let counter = 0;
    for (let i = firstArr[0]; i <= firstArr[1]; i++) {
        overLapSet.add(i);
    }
    for (let i = secondArr[0]; i <= secondArr[1]; i++) {
        if (overLapSet.has(i)) {
            counter++;
        }
    }
    return counter >= arr.pop() ? true : false;
}

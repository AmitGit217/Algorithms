function Consecutive(arr: number[]) {
    const sortedArr = arr.sort((a, b) => a - b);
    const check = new Set<number>(sortedArr);

    for (let current = 1; current < sortedArr.length; current++) {
        for (
            let prev = sortedArr[current - 1];
            prev < sortedArr[current];
            prev++
        ) {
            let prev = sortedArr[current - 1];
        }
    }

    return check.size - sortedArr.length;
}

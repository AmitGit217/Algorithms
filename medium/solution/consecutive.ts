function Consecutive(arr: number[]) {
    const sortedArr = arr.sort((a, b) => a - b);
    const check = new Set<number>(sortedArr);

    for (let current = 1; current < sortedArr.length; current++) {
        let prev = sortedArr[current - 1];
        for (; prev < sortedArr[current]; prev++) {
            check.add(prev);
        }
    }

    return check.size - sortedArr.length;
}

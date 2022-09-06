function TwoSum(arr: number[]) {
    const map = new Map();
    const target = arr.shift() || 0;
    const result: Array<number[]> = [];
    arr.forEach((number, index) => map.set(number, index));
    arr.forEach((number, index) => {
        const gap = target - number;
        if (map.has(gap) && map.get(gap) != index) {
            result.push([number, gap]);
            map.delete(number);
        }
    });
    return result.length ? result.join(" ") : -1;
}

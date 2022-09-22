function binarySearch(arr: number[], target: number) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let midIndex = Math.floor((start + end) / 2);
        let midValue = arr[midIndex];

        if (midValue === target) {
            return midIndex;
        } else if (midValue < target) {
            start = midIndex + 1;
        } else if (midValue > target) {
            end = midIndex - 1;
        }
    }
    return -1;
}

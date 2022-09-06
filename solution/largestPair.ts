function largestPair(num: number) {
    const numArr = num.toString().split("");
    let largest = 0;
    for (let i = 0; i < numArr.length; i++) {
        if (parseInt(numArr[i] + numArr[i + 1]) > largest) {
            largest = parseInt(numArr[i] + numArr[i + 1]);
        }
    }
    return largest;
}

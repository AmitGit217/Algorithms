function secondGreatLow(arr) {
    let hashMap = {};
    for (let i = 0; i < arr.length; i++) {
        hashMap[arr[i]] = arr[i];
    }
    const sortedArr = Object.values(hashMap).sort((a, b) => a - b);
    if (sortedArr.length < 2) {
        return `${sortedArr[0]} ${sortedArr[0]}`;
    } else {
        return `${sortedArr[1]} ${sortedArr[sortedArr.length - 2]}`;
    }
}

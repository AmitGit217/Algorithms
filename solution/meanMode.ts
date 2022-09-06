function meanMode(arr: number[]) {
    let hashMap = {};
    const sum = arr.reduce((init, current) => init + current, 0);
    const mean = sum / arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (hashMap.hasOwnProperty(arr[i])) {
            hashMap[arr[i]]++;
        } else {
            hashMap[arr[i]] = 1;
        }
    }
    const mode = Object.keys(hashMap).reduce((a, b) =>
        hashMap[a] > hashMap[b] ? a : b
    );
    return mean == parseInt(mode) ? 1 : 0;
}

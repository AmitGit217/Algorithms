function otherProducts(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr.reduce((a, b) => a * b) / arr[i];
    }
    return result.join("-");
}

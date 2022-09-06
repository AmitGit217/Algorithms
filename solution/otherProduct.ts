function otherProducts(arr: number[]) {
    let result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr.reduce((a, b) => a * b) / arr[i];
    }
    return result.join("-");
}

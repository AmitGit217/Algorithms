function arrayMatching(strArr) {
    const result = [];
    const firstArr = strArr[0].replace(/[\][,]/g, "").split(" ");
    const secondArr = strArr[1].replace(/[\][,]/g, "").split(" ");
    const length = firstArr.concat(secondArr).length;

    for (let i = 0; i < length; i++) {
        const firstArrNumber = parseInt(firstArr[i]);
        const secondArrNumber = parseInt(secondArr[i]);
        if (firstArrNumber && secondArrNumber) {
            let sum = firstArrNumber + secondArrNumber;
            result.push(sum);
        } else if (firstArrNumber && !secondArrNumber) {
            result.push(firstArrNumber);
        } else if (!firstArrNumber && secondArrNumber) {
            result.push(secondArrNumber);
        }
    }

    return result.join("-");
}

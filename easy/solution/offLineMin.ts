function offLineMinimum(strArr: string[]) {
    const result: string[] = [];
    let relativeMin = strArr[0];
    for (let i = 0; i < strArr.length; i++) {
        let indexOfMin = strArr.indexOf(relativeMin);
        if (strArr[i] < relativeMin) {
            relativeMin = strArr[i];
        }
        if (strArr[i] == "E") {
            result.push(relativeMin);
            strArr.splice(indexOfMin, 1);
            strArr.splice(i - 1, 1);
            i = 0;
            relativeMin = strArr[0];
        }
    }
    return result.join(",");
}

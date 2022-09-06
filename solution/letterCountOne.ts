function letterCountOne(str: string) {
    let maxNum = 0;
    let biggest = -1;
    const strArr = str.split(" ");
    const words = {};
    strArr.forEach((item) => {
        words[item] = 0;
        const itemArr = item.split("");
        const wordValues = {};
        for (let i = 0; i < itemArr.length; i++) {
            if (wordValues.hasOwnProperty(itemArr[i])) {
                wordValues[itemArr[i]] += 1;
            } else {
                wordValues[itemArr[i]] = 0;
            }
        }
        const wordValuesArr: number[] = Object.values(wordValues);
        words[item] = Math.max(...wordValuesArr);
    });
    const keys = Object.keys(words);
    keys.forEach((key) => {
        const value = words[key];
        if (value > maxNum) {
            maxNum = value;
            biggest = parseInt(key);
        }
    });
    return biggest;
}

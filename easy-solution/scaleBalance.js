function ScaleBalancing(strArr) {
    const scale = strArr[0].replace(/[\][]/gi, "").split(",");
    const balance = strArr[1].replace(/[\][\s]/gi, "").split(",");
    const smallNumber = Math.min(...scale);
    const bigNumber = Math.max(...scale);
    const smallResults = {};
    const mediumResult = {};
    const bigResults = {};
    const result = [];

    for (let i = 0; i < balance.length; i++) {
        const forSmall = parseInt(balance[i]) + smallNumber;
        const forBig = parseInt(balance[i]) + bigNumber;
        smallResults[forSmall] = balance[i];
        bigResults[forBig] = balance[i];
    }
    if (smallResults.hasOwnProperty(bigNumber)) {
        return smallResults[bigNumber];
    }
    balance.forEach((number) => {
        num = parseInt(number);
        const sum = bigNumber - num;
        mediumResult[sum] = num;
    });
    Object.keys(smallResults).forEach((key) => {
        if (
            mediumResult.hasOwnProperty(key) &&
            smallResults[key] != mediumResult[key]
        ) {
            result.push(smallResults[key]);
        }
    });
    Object.keys(smallResults).forEach((key) => {
        const smallValue = smallResults[key];
        if (bigResults.hasOwnProperty(key) && result.length < 2) {
            result.push(bigResults[key]);
            result.push(smallValue);
        }
    });
    return result.length ? result.join(",") : "not possible";
}

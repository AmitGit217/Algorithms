function ThreeSum(arr) {
    const target = arr.shift();
    const hashTable = {};
    const resultsArr = [];
    const hitTarget = [];
    arr.forEach((number, index) => (hashTable[number] = index));
    arr.forEach((number, index) => {
        for (const objNumber in hashTable) {
            const objIndex = hashTable[objNumber];
            if (index != objIndex) {
                const result = number + parseInt(objNumber);
                if (result < target) {
                    resultsArr.push([number, parseInt(objNumber)]);
                }
            }
        }
    });
    arr.forEach((number) => {
        resultsArr.forEach((arr) => {
            if (number + arr[0] + arr[1] == target) {
                hitTarget.push([number, arr[0], arr[1]]);
            }
        });
    });
    return hitTarget.length ? true : false;
}

function nonRepeatingCharacter(str: string) {
    const strArr = str.replace(/ /gi, "").split("");
    const map = {};
    for (let i = 0; i < strArr.length; i++) {
        if (map.hasOwnProperty(strArr[i])) {
            map[strArr[i]]++;
        } else {
            map[strArr[i]] = 1;
        }
    }
    return Object.keys(map).find((key) => {
        return map[key] == 1;
    });
}

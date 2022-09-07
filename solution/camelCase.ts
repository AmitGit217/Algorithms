function camelCase(str: string) {
    const cleanStr = str
        .replace(/[^a-zA-Z]/gi, " ")
        .toLocaleLowerCase()
        .split(" ");
    const upperCased: string[] = [];
    for (let i = 1; i < cleanStr.length; i++) {
        upperCased.push(cleanStr[i][0].toLocaleUpperCase());
    }
    const upperCasedArr: string[] = [];
    for (let i = 1; i < cleanStr.length; i++) {
        const upperCasedLetter = upperCased[i - 1];
        let newStr = cleanStr[i].replace(cleanStr[i][0], upperCasedLetter);
        upperCasedArr.push(newStr);
    }
    return cleanStr[0].concat(upperCasedArr.join(""));
}

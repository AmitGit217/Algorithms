function letterCapitalize(str: string) {
    let strArray = str.split(" ");
    let result: string[] = [];
    for (let i = 0; i < strArray.length; i++) {
        let word = strArray[i].split("");
        let firstLetter = word[0].toUpperCase();
        word.shift();
        word.unshift(firstLetter);
        result.push(word.join(""));
    }
    return result.join(" ");
}

function letterChange(str: string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("");
    const strArray = str.split("");
    const resultArray: string[] = [];
    for (let i = 0; i < strArray.length; i++) {
        let strChar = strArray[i];
        for (let j = 0; j < alphabetArray.length; j++) {
            let alphabetChar = alphabetArray[j];
            if (alphabetChar == strChar) {
                let charToPush = alphabetArray[j + 1];
                if (
                    charToPush == "a" ||
                    charToPush == "e" ||
                    charToPush == "i" ||
                    charToPush == "o" ||
                    charToPush == "u"
                ) {
                    charToPush = charToPush.toUpperCase();
                    resultArray.push(charToPush);
                } else {
                    resultArray.push(charToPush);
                }
            }
        }
        if (!alphabetArray.includes(strArray[i])) {
            resultArray.push(strArray[i]);
        }
    }
    return resultArray.join("");
}

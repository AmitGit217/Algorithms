function simpleSymbol(str: string) {
    let state: string[] = [];
    let alphabetString = "abcdefghijklmnopqrstuvwxyz";
    let alphabet = alphabetString.split("");
    let strArr = str.split("");
    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (alphabet.includes(strArr[i])) {
                if (
                    alphabet.includes(strArr[0]) ||
                    alphabet.includes(strArr[strArr.length - 1])
                ) {
                    state.push("false");
                } else {
                    if (strArr[i - 1] == "+" && strArr[i + 1] == "+") {
                        continue;
                    } else {
                        state.push("false");
                    }
                }
            }
        }
    }
    return state.length ? false : true;
}

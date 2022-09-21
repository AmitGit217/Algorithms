function strDivision(num1: number, num2: number) {
    const result = String(num1 / num2).split(".");
    const resultArr: Array<number | string> = [];
    if (result.length < 2) {
        let numArray = String(result[0]).split("");
        if (numArray.length < 4) {
            return numArray.join("");
        } else {
            let counter = 0;
            for (let i = numArray.length - 1; i >= 0; i--) {
                counter++;
                if (counter == 3) {
                    resultArr.push(numArray[i]);
                    resultArr.push(",");
                    counter = 0;
                } else {
                    resultArr.push(numArray[i]);
                }
            }
            return resultArr.reverse().join("");
        }
    } else {
        let num = parseInt(result[0]);
        const reminder = parseInt(result[1][0]);
        reminder >= 5 ? (num += 1) : null;
        let numArray = Array.from(String(num));
        let counter = 0;
        for (let i = numArray.length - 1; i >= 0; i--) {
            counter++;
            if (counter == 3) {
                resultArr.push(numArray[i]);
                resultArr.push(",");
                counter = 0;
            } else {
                resultArr.push(numArray[i]);
            }
        }
        return resultArr.reverse().join("");
    }
}

function additivePersistence(num: number) {
    const numbersArr = num.toString().split("");
    function recurse(arr: string[], counter: number) {
        counter = counter || 0;
        if (arr.length < 2) {
            return counter;
        } else {
            const newArr = arr.reduce((a, b) => a + parseInt(b), 0);
            return recurse(newArr.toString().split(""), counter + 1);
        }
    }
    return recurse(numbersArr, 0);
}

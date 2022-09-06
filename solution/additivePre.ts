function additivePersistence(num) {
    const numbersArr = num.toString().split("");
    function recurse(arr, counter) {
        counter = counter || 0;
        if (arr.length < 2) {
            return counter;
        } else {
            arr = arr.reduce((a, b) => parseInt(a) + parseInt(b), 0);
            return recurse(arr.toString().split(""), counter + 1);
        }
    }
    return recurse(numbersArr);
}

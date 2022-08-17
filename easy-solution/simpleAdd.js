function simpleAdd(num) {
    let counter = 1;
    let result = 1;
    while (counter < num) {
        counter++;
        result += counter;
    }
    return result;
}

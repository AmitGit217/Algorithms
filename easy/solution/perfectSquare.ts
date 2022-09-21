function perfectSquare(num: number) {
    let counter = 1;
    while (counter < num) {
        counter *= 2;
    }
    return counter == num ? true : false;
}

function factorial(num: number) {
    if (num <= 1) {
        return 1;
    } else {
        return factorial(num - 1) * num;
    }
}

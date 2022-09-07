function binaryReversal(str: string) {
    let number = parseInt(str);
    let unicode: number[] = [];

    function toBinaryRecursion(n: number): number[] {
        if (n < 1) {
            return unicode;
        }
        n % 2 == 0 ? unicode.unshift(0) : unicode.unshift(1);
        n = n / 2;
        return toBinaryRecursion(Math.floor(n));
    }
    toBinaryRecursion(number);

    while (unicode.length % 8 != 0) {
        unicode.unshift(0);
    }

    let result = 0;
    for (let i = unicode.length - 1; i >= 0; i--) {
        if (unicode[i] == 1) {
            result += Math.pow(2, i);
        }
    }
    return result;
}

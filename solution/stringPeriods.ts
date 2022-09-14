function StringPeriods(str: string) {
    if (str.length < 2) return -1;
    const results: string[] = [];

    const recurse = (str: string, i = 0) => {
        if (i >= str.length) return;
        const subStr = str.slice(0, i + 1);
        const newStr = str.slice(i + 1);
        const check = newStr.slice(0, i + 1);
        if (check == subStr) {
            results.push(check);
        }
        return recurse(str, i + 1);
    };
    recurse(str);

    return results.length ? results[results.length - 1] : -1;
}

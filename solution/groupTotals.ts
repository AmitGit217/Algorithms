function GroupTotals(strArr: string[]) {
    const pairs = {};
    for (let i = 0; i < strArr.length; i++) {
        const key = strArr[i].match(/[a-zA-Z0-9]+(?=:)/gi)!.toString();
        const value = parseInt(strArr[i].match(/(?<=:)-?\d+/g)!.join(""));
        if (pairs.hasOwnProperty(key)) {
            pairs[key] += value;
        } else {
            pairs[key] = value;
        }
    }

    const results: string[] = [];
    Object.keys(pairs)
        .sort()
        .forEach((key) => {
            const value = pairs[key];
            if (value !== 0) {
                results.push(`${key}:${value}`);
            }
        });
    return results.join(",");
}

function CommandLine(str: string) {
    const tokenArr = str
        .match(/[a-zA-Z+]{0,}=/gi)!
        .map((token) => token.replace("=", ""));

    const valueArr = str
        .replace(/[a-zA-Z+]{0,}=/gi, "=")
        .split("=")
        .filter((item) => item)
        .map((item) => item.replace(/(\s+$)/, ""));

    const results: Array<number[] | string[]> = [];

    for (let i = 0; i < tokenArr.length; i++) {
        const tokenLength = tokenArr[i].length || 0;
        const valueLength = valueArr[i]?.length || 0;

        results.push([`${tokenLength}=${valueLength}`]);
    }

    return results.join(" ");
}

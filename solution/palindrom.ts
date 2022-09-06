function palindrome(str: string) {
    const strReverse = str.replace(/\s+/g, "").split("").reverse().join("");
    return strReverse == str.replace(/\s+/g, "") ? true : false;
}

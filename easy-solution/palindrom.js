function palindrome(str) {
    const strReverse = str.replace(/\s+/g, "").split("").reverse(true).join("");
    return strReverse == str.replace(/\s+/g, "") ? true : false;
}

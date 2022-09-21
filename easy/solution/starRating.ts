function StarRating(str: string) {
    const num = parseFloat((Math.round(parseFloat(str) * 2) / 2).toFixed(1));
    const stars: string[] = [];

    for (let i = 0; i <= num; i += 0.5) {
        if (i >= 1 && i % 1 === 0) {
            stars.push("full");
        }
        if (i >= num && i % 1 === 0.5) {
            stars.push("half");
        }
    }
    while (stars.length < 5) {
        stars.push("empty");
    }
    return stars.join(" ");
}

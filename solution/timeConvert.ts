function timeConvert(num) {
    let hours = 0;
    let minutes = 0;
    for (let i = 0; i < num; i++) {
        minutes++;
        if (minutes >= 60) {
            hours++;
            minutes = 0;
        }
    }
    return `${hours}:${minutes}`;
}

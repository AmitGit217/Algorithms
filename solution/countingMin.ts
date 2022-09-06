function countingMin(str: string) {
    let timeArr = str.split("-");
    let start = timeArr[0].split(":");
    let end = timeArr[1].split(":");

    let hashMap = {
        start: {
            hours: parseInt(start[0]),
            minutes: parseInt(start[1].slice(0, 2)),
            dayTime: start[1].slice(2),
        },
        end: {
            hours: parseInt(end[0]),
            minutes: parseInt(end[1].slice(0, 2)),
            dayTime: end[1].slice(2),
        },
        gap: {
            hours: 0,
            minutes: 0,
        },
    };
    //Convert to 24 model
    if (hashMap.start.dayTime == "pm" && hashMap.start.hours < 12) {
        hashMap.start.hours += 12;
    }
    if (hashMap.end.dayTime == "pm" && hashMap.end.hours < 12) {
        hashMap.end.hours += 12;
    }
    if (hashMap.start.dayTime == "am" && hashMap.start.hours >= 12) {
        hashMap.start.hours -= 12;
    }
    if (hashMap.end.dayTime == "am" && hashMap.end.hours >= 12) {
        hashMap.end.hours -= 12;
    }
    //Convert to 24 model

    let counter = hashMap.start.hours * 60 + hashMap.start.minutes;
    while (counter != hashMap.end.hours * 60 + hashMap.end.minutes) {
        counter++;
        if (counter == 1440) {
            counter = 0;
        }
        hashMap.gap.minutes++;
        if (hashMap.gap.minutes >= 60) {
            hashMap.gap.minutes = 0;
            hashMap.gap.hours++;
        }
    }

    return hashMap.gap.hours * 60 + hashMap.gap.minutes;
}

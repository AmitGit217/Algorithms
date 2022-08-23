function rectangleArea(strArr) {
    const points = [];
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].replace(/\-/gi, "");
        points.push([parseInt(strArr[i][1]), parseInt(strArr[i][3])]);
    }
    let height = 0;
    let width = 0;
    let firstPoint = points.shift();
    for (let i = 0; i < points.length; i++) {
        let pointX = points[i][0];
        let pointY = points[i][1];
        if (pointX == firstPoint[0]) {
            height = pointY - firstPoint[1];
        }
        if (pointY == firstPoint[1]) {
            width = pointX - firstPoint[0];
        }
    }
    return Math.abs(height * width);
}

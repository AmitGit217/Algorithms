function closestEnemyII(arr) {
    let player = [];
    let enemies = [];
    const rowSize = arr[0].length;
    const colSize = arr.length;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] == 1 ? (player = [i, j]) : null;
            arr[i][j] == 2 ? enemies.push([i, j]) : null;
        }
    }

    let paths = [];
    for (let i = 0; i < enemies.length; i++) {
        const enemy = enemies[i];
        const inRowDiff = Math.abs(player[1] - enemy[1]);
        const rowDiff = Math.abs(player[0] - enemy[0]);

        const normalPath = inRowDiff + rowDiff;
        const wrapLeft = player[1] + rowDiff + Math.abs(enemy[1] - rowSize);
        const wrapRight = enemy[1] + rowDiff + Math.abs(player[1] - rowSize);
        const wrapUp = player[0] + inRowDiff + Math.abs(enemy[0] - colSize);
        const wrapDown = enemy[0] + inRowDiff + Math.abs(player[0] - colSize);
        paths.push(normalPath);
        paths.push(wrapLeft);
        paths.push(wrapRight);
        paths.push(wrapUp);
        paths.push(wrapDown);
    }
    return enemies.length ? Math.min(...paths) : 0;
}

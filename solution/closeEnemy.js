function closestEnemy(arr) {
    let me = arr[0];
    const enemyMap = {};
    const results = [];
    arr.forEach((number, index) => {
        if (number == 1) {
            me = index;
        }
        if (number == 2) {
            enemyMap[index] = "enemy";
        }
    });

    Object.keys(enemyMap).forEach((key) => {
        results.push(Math.abs(me - key));
    });
    return results.length ? Math.min(...results) : 0;
}

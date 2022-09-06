function closestEnemy(arr: number[]) {
    let me = arr[0];
    const enemyMap = {};
    const results: number[] = [];
    arr.forEach((number, index) => {
        if (number == 1) {
            me = index;
        }
        if (number == 2) {
            enemyMap[index] = "enemy";
        }
    });

    Object.keys(enemyMap).forEach((key: any) => {
        results.push(Math.abs(me - key));
    });
    return results.length ? Math.min(...results) : 0;
}

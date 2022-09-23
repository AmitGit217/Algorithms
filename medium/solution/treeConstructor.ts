function TreeConstructor(strArr: string[]) {
    const numArr = strArr
        .map((item) => item.match(/\d+/g))
        .map((item) => [parseInt(item![0]), parseInt(item![1])]);
    const parents = {};
    const children = {};
    const root = new Set();

    numArr.forEach((couple) => {
        const parent = couple[1];
        const child = couple[0];

        if (parents[parent]) {
            parents[parent].push(child);
        } else {
            parents[parent] = [couple[0]];
        }
        if (children[child]) {
            children[child].push(parent);
        } else {
            children[child] = [parent];
        }
    });
    numArr.forEach((item) =>
        !children.hasOwnProperty(item[1]) ? root.add(item[1]) : null
    );
    const findFalseChildren = Object.keys(children).find(
        (item) => children[item].length > 1
    );
    const findFalseParents = Object.keys(parents).find(
        (item) => parents[item].length > 2
    );
    const findFalseRoots = root.size !== 1;

    return findFalseParents || findFalseChildren || findFalseRoots
        ? false
        : true;
}

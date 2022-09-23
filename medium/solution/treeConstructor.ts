function TreeConstructorTwo(strArr: string[]) {
    if (!strArr.length) return true;
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
            parents[parent] = [child];
        }
        if (children[child]) {
            children[child].push(parent);
        } else {
            children[child] = [parent];
        }
    });
    const loopGetter = new Set<number>();
    let loop = false;
    function recurse(item: any, i: number) {
        if (i >= numArr.length) {
            return;
        } else if (loopGetter.has(item)) {
            loop = true;
            return;
        } else {
            if (parents[item] !== undefined) {
                loopGetter.add(item);
                return recurse(parents[item].toString(), i + 1);
            }
        }
    }
    recurse(parents[numArr[0][1]].toString(), 0);
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

    return findFalseParents || findFalseChildren || findFalseRoots || loop
        ? false
        : true;
}

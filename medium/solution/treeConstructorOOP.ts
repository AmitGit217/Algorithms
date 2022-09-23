class BinaryTree {
    private strArr: string[];
    private roots: Set<number>;
    private nodes: Array<number[]>;
    private loopGetter: Set<number>;
    private parents: {};
    private children: {};
    private state: boolean;

    constructor(strArr: string[]) {
        this.strArr = strArr;
        this.nodes = [];
        this.parents = {};
        this.children = {};
        this.loopGetter = new Set();
        this.roots = new Set();
        this.state = true;
    }

    private getValues() {
        this.nodes = this.strArr
            .map((item) => item.match(/\d+/g))
            .map((item) => [parseInt(item![0]), parseInt(item![1])]);
    }

    private createRelations() {
        this.nodes.forEach((couple) => {
            const parent = couple[1];
            const child = couple[0];
            if (this.parents[parent]) {
                this.parents[parent].push(child);
                if (this.parents[parent].length > 2) {
                    this.state = false;
                }
            } else {
                this.parents[parent] = [child];
            }
            if (this.children[child]) {
                this.state = false;
            } else {
                this.children[child] = [parent];
            }
        });
    }
    private findDoubleRoot() {
        this.nodes.forEach((item) => {
            if (!this.children.hasOwnProperty(item[1])) {
                this.roots.add(item[1]);
            }
        });
        if (this.roots.size > 1) {
            this.state = false;
            return;
        }
    }

    private checkLoop(item: any, i: number) {
        if (i > this.nodes.length) {
            return;
        } else if (this.loopGetter.has(item)) {
            this.state = false;
        } else {
            if (this.parents[item] !== undefined) {
                this.loopGetter.add(item);
                return this.checkLoop(this.parents[item].toString(), i + 1);
            }
        }
    }

    public runValidation() {
        if (this.strArr.length < 1) return true;
        this.getValues();
        this.createRelations();
        this.checkLoop(this.parents[this.nodes[0][1]].toString(), 0);
        this.findDoubleRoot();
        return this.state;
    }
}

function TreeConstructor(strArr: string[]) {
    const tree = new BinaryTree(strArr);
    return tree.runValidation();
}

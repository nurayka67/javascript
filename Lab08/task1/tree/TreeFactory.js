// TreeFactory.js - Manages shared flyweight instances

import { FlyweightTree } from "./FlyweightTree.js";

class TreeFactory {
    constructor() {
        this.trees = new Map();
        this.totalRequests = 0;
    }

    getTree(type, species, foliageColor, trunkColor, height, width) {
        const key = `${type}-${species}-${foliageColor}-${trunkColor}-${height}-${width}`;
        this.totalRequests++;

        if (!this.trees.has(key)) {
            const tree = new FlyweightTree(type, species, foliageColor, trunkColor, height, width);
            this.trees.set(key, tree);
            console.log(`[Factory] Created new flyweight: ${type}`);
        } else {
            console.log(`[Factory] Reusing existing flyweight: ${type}`);
        }

        return this.trees.get(key);
    }

    getStats() {
        const saved = ((this.totalRequests - this.trees.size) / this.totalRequests * 100).toFixed(1);
        return {
            uniqueTreeTypes: this.trees.size,
            totalRequests: this.totalRequests,
            memorySaved: `${saved}%`
        };
    }
}

export const treeFactory = new TreeFactory();
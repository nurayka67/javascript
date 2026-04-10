// ForestRenderer.js - Uses flyweights to render forest efficiently

import { treeFactory } from "../tree/TreeFactory.js";

export class ForestRenderer {
    constructor(canvasElement) {
        this.canvas = canvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.trees = [];
        this.setupCanvas();
    }

    setupCanvas() {
        // Set actual pixel dimensions
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }

    addTree(x, y, type, species, foliageColor, trunkColor, height, width, scale, rotation) {
        const flyweight = treeFactory.getTree(type, species, foliageColor, trunkColor, height, width);
        this.trees.push({ flyweight, x, y, scale, rotation });
    }

    generateForest(count = 10000) {
        const types = ["pine", "oak", "birch", "maple"];
        const speciesMap = {
            pine: { name: "Pine", foliage: "#228B22", trunk: "#8B4513", h: 80, w: 30 },
            oak: { name: "Oak", foliage: "#006400", trunk: "#654321", h: 60, w: 40 },
            birch: { name: "Birch", foliage: "#90EE90", trunk: "#F5F5DC", h: 70, w: 20 },
            maple: { name: "Maple", foliage: "#FF8C00", trunk: "#A0522D", h: 65, w: 35 }
        };

        this.trees = [];
        
        for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            const config = speciesMap[type];
            
            this.addTree(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height,
                type,
                config.name,
                config.foliage,
                config.trunk,
                config.h,
                config.w,
                0.5 + Math.random() * 1,
                Math.random() * Math.PI * 2
            );
        }
        
        console.log(`Generated ${count} trees`);
        return this.trees.length;
    }

    render() {
        if (!this.ctx) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw sky and ground
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, "#87CEEB");
        gradient.addColorStop(0.6, "#98FB98");
        gradient.addColorStop(1, "#228B22");
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (const tree of this.trees) {
            tree.flyweight.render(this.ctx, tree.x, tree.y, tree.scale, tree.rotation);
        }
        
        console.log(`Rendered ${this.trees.length} trees`);
    }

    getStats() {
        return treeFactory.getStats();
    }
    
    clear() {
        this.trees = [];
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
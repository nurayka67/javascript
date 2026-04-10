// FlyweightTree.js - Intrinsic state (shared across all trees of same type)

export class FlyweightTree {
    constructor(type, species, foliageColor, trunkColor, height, width) {
        this.type = type;
        this.species = species;
        this.foliageColor = foliageColor;
        this.trunkColor = trunkColor;
        this.height = height;
        this.width = width;
    }

    render(ctx, x, y, scale, rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.scale(scale, scale);

        // Draw trunk
        ctx.fillStyle = this.trunkColor;
        ctx.fillRect(-this.width / 4, 0, this.width / 2, this.height / 3);

        // Draw foliage (triangle)
        ctx.fillStyle = this.foliageColor;
        ctx.beginPath();
        ctx.moveTo(0, -this.height);
        ctx.lineTo(-this.width, this.height / 3);
        ctx.lineTo(this.width, this.height / 3);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }

    getInfo() {
        return `${this.species} (${this.type})`;
    }
}
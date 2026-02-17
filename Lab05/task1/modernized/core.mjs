import { TAX_RATE } from "./config.mjs";

export class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export class Cart {
    #items = [];

    addItem(product, quantity) {
        this.#items.push({ product, quantity});
    }

    getSubtotal() {
        return this.#items.reduce((sum, {product, quantity}) => sum + (product.price * quantity), 0);
    }
    getTax() {
        return this.getSubtotal() * TAX_RATE;
    }

    getTotal() {
        return this.getSubtotal() + this.getTax();
    }
}
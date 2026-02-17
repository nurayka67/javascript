import { Product, Cart } from './core.mjs';
import { formatPrice } from './utils.mjs';
import { TAX_RATE, CURRENCY } from './config.mjs';

const cart = new Cart();
const product1 = new Product(1, "Widget", 10.99);
cart.addItem(product1, 2);

console.log('=== Shopping Cart ===');
console.log(`Subtotal: ${formatPrice(cart.getSubtotal())}`);
console.log(`Tax (${TAX_RATE*100}%): ${formatPrice(cart.getTax())}`);
console.log(`Total: ${formatPrice(cart.getTotal())}`);
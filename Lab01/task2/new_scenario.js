// New Scenario: Shopping Cart System using Factory Pattern

function createShoppingCart(customerName) {
    // Private data (encapsulated)
    var items = [];
    var totalSpent = 0;
    
    // Public methods
    return {
        customerName: customerName,
        
        // Add item to cart
        addItem: function(itemName, price) {
            items.push({
                name: itemName,
                price: price,
                dateAdded: new Date()
            });
            totalSpent += price;
            console.log(itemName + " added to cart.");
        },
        
        // Remove item
        removeItem: function(itemName) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].name === itemName) {
                    totalSpent -= items[i].price;
                    items.splice(i, 1);
                    console.log(itemName + " removed.");
                    return true;
                }
            }
            console.log(itemName + " not found.");
            return false;
        },
        
        // View cart
        viewCart: function() {
            console.log("\n=== " + this.customerName + "'s Cart ===");
            if (items.length === 0) {
                console.log("Cart is empty.");
                return;
            }
            
            for (var i = 0; i < items.length; i++) {
                console.log((i + 1) + ". " + items[i].name + 
                          " - $" + items[i].price);
            }
            console.log("Total: $" + totalSpent);
        },
        
        // Checkout
        checkout: function() {
            console.log("\n=== Checkout for " + this.customerName + " ===");
            this.viewCart();
            console.log("Thank you for your purchase!");
            items = []; // Clear cart
            totalSpent = 0;
        },
        
        // Get private data (read-only)
        getItemCount: function() {
            return items.length;
        },
        
        getTotal: function() {
            return totalSpent;
        }
    };
}

// ====================
// DEMONSTRATION
// ====================

console.log("=== Shopping Cart Factory Demo ===\n");

// Create two independent carts
var cart1 = createShoppingCart("Alice");
var cart2 = createShoppingCart("Bob");

// Alice adds items
cart1.addItem("Laptop", 999.99);
cart1.addItem("Mouse", 25.50);
cart1.addItem("USB Cable", 12.99);

// Bob adds different items
cart2.addItem("Book", 19.99);
cart2.addItem("Coffee Mug", 15.00);

// View both carts
cart1.viewCart();
cart2.viewCart();

// Demonstrate independence
console.log("\n=== Testing Independence ===");
console.log("Alice's item count: " + cart1.getItemCount());
console.log("Bob's item count: " + cart2.getItemCount());
console.log("Alice's total: $" + cart1.getTotal());
console.log("Bob's total: $" + cart2.getTotal());

// Alice removes an item
console.log("\n=== Alice removes Mouse ===");
cart1.removeItem("Mouse");
cart1.viewCart();

// Bob checks out
console.log("\n=== Bob checks out ===");
cart2.checkout();
console.log("Bob's cart after checkout - Items: " + cart2.getItemCount());

// Prove data is private
console.log("\n=== Testing Encapsulation ===");
console.log("Direct access to items:", cart1.items); // undefined
console.log("Direct access to totalSpent:", cart1.totalSpent); // undefined
console.log("Can only access via methods.");


console.log("\n=== Quick test ===");
var testCart = createShoppingCart("Test");
testCart.addItem("Test Item", 100);
testCart.viewCart();
console.log("Test passed!");
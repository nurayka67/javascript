MyApp.Modules.Store = (function () {

    let cart = [];
    let user = null;

    function setUser(name, email) {
        if (!MyApp.Utils.Helpers.validateEmail(email)) {
            console.log("Invalid email");
            return;
        }

        user = { name, email };
    }

    function addToCart(productName, price, quantity) {
        cart.push({ productName, price, quantity });
    }

    function calculateSubtotal() {
        return cart.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    function calculateTotal() {
        const subtotal = calculateSubtotal();
        const tax = subtotal * MyApp.Config.Settings.getTaxRate();
        const shipping = MyApp.Config.Settings.getShippingCost();

        return subtotal + tax + shipping;
    }

    function processOrder() {
        if (!user) {
            console.log("User not set");
            return;
        }

        const total = calculateTotal();

        console.log("Order processed:");
        console.log("User:", user.name);
        console.log("Total:", MyApp.Utils.Helpers.formatPrice(total));

        cart = [];
    }

    return {
        setUser,
        addToCart,
        processOrder
    };

})();

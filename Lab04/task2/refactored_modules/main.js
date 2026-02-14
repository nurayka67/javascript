require("./namespace.js");
require("./module3.js");
require("./module2.js");
require("./module1.js");

(function () {
    MyApp.Modules.Store.setUser("John Doe", "john@example.com");

    MyApp.Modules.Store.addToCart("Laptop", 1000, 1);
    MyApp.Modules.Store.addToCart("Mouse", 50, 2);

    MyApp.Modules.Store.processOrder();
})();

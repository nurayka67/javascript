MyApp.Config.Settings = (function () {

    const taxRate = 0.08;
    const shippingCost = 5;
    const currency = "USD";

    return {
        getTaxRate: () => taxRate,
        getShippingCost: () => shippingCost,
        getCurrency: () => currency
    };

})();

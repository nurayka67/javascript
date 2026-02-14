MyApp.Utils.Helpers = (function () {

    function validateEmail(email) {
        return email && email.includes("@") && email.includes(".");
    }

    function formatPrice(price) {
        const currency = MyApp.Config.Settings.getCurrency();
        return `${currency} ${price.toFixed(2)}`;
    }

    function getCurrentDate() {
        return new Date().toISOString();
    }

    return {
        validateEmail,
        formatPrice,
        getCurrentDate
    };

})();

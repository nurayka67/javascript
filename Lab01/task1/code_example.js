// Code examples from analysis

// 1. Object Literal Pattern
var userManager = {
    users: [],
    addUser: function(name, email) {
        var user = {id: this.users.length + 1, name: name, email: email};
        this.users.push(user);
        return user;
    }
}

// 2.Factory Function Pattern
function createUserManager() {
    var users = []; //Private variable

    return {
        add: function(name, email) {
            var user = {id: users.length + 1, name: name, email: email};
            users.push(user);
            return user ;
        }
    }
}

// 3. Singleton/Module Pattern
var UserManager = (function() {
    var instance;
    var users = [];
    
    function init() {
        return {
            addUser: function(name, email) {
                var user = {id: users.length + 1, name: name, email: email};
                users.push(user);
                return user;
            }
        }
    }
    return {
        getInstance: function() {
            if (!instance) instance = init();
            return instance;
        }
    }
})();
// Factory Function Pattern Example

function createUser(role = "user") {
    // Private data
    var loginCount = 0;

    // Public methods
    return {
        username: "",

        setUsername: function(name) {
            this.username = name;
            console.log("Username set to:", name);
        },
        login: function() {
            loginCount++;
            console.log(this.username + " logged in. Total logins: " + loginCount);
            return truel
        },

        getStats: function() {
            return{
                username: this.username,
                role: role,
                logins: loginCount
            }
        }
    }
}

// Usage
console.log("=== Factory Pattern Demo ===");

var admin = createUser("admin");
admin.setUsername("SuperAdmin");
admin.login();
admin.login();

var user = createUser("user");
user.setUsername("RegularUser");
user.login();

console.log("\nAdmin stats:", admin.getStats());
console.log("User stats:", user.getStats());

// Private data is inaccessible
console.log("\nTrying to access private loginCount:");
console.log("admin.loginCount:", admin.loginCount); // undefined


// Test the factory pattern
console.log("\n=== Testing the pattern ===");

var testUser1 = createUser("moderator");
testUser1.setUsername("TestUser1");
testUser1.login();

var testUser2 = createUser("guest");
testUser2.setUsername("TestUser2");
testUser2.login();
testUser2.login();

console.log("\nUser1 stats:", testUser1.getStats());
console.log("User2 stats:", testUser2.getStats());

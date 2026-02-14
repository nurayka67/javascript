// ANTI-PATTERN: Global namespace pollution
var userName = "";

// ANTI-PATTERN: Tight coupling
function setUserName(name) {
    userName = name;
}

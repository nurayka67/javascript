(function() {
    'use strict';
    
    if (typeof MyApp === 'undefined') {
        throw new Error('Load core.js first');
    }
    
    MyApp.namespace('plugins');
    MyApp.namespace('plugins.storage');
    MyApp.namespace('plugins.validation');
    MyApp.namespace('plugins.router');
    
    MyApp.plugins = MyApp.plugins || {};
    MyApp.plugins.storage = MyApp.plugins.storage || {};
    MyApp.plugins.validation = MyApp.plugins.validation || {};
    MyApp.plugins.router = MyApp.plugins.router || {};
    
    // Storage Plugin
    MyApp.plugins.storage = {
        set: function(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
            return this;
        },
        get: function(key) {
            var data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        },
        remove: function(key) {
            localStorage.removeItem(key);
            return this;
        },
        clear: function() {
            localStorage.clear();
            return this;
        }
    };
    
    // Validation Plugin
    MyApp.plugins.validation = {
        validate: function(data, rules) {
            var errors = [];
            
            for (var field in rules) {
                var value = data[field];
                var rule = rules[field];
                
                if (rule.required && !value) {
                    errors.push({ field: field, message: field + ' is required' });
                }
                if (rule.minLength && value && value.length < rule.minLength) {
                    errors.push({ field: field, message: field + ' min length ' + rule.minLength });
                }
                if (rule.maxLength && value && value.length > rule.maxLength) {
                    errors.push({ field: field, message: field + ' max length ' + rule.maxLength });
                }
                if (rule.pattern && value && !rule.pattern.test(value)) {
                    errors.push({ field: field, message: rule.message || field + ' is invalid' });
                }
            }
            
            return { valid: errors.length === 0, errors: errors };
        },
        
        isEmail: function(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
    };
    
    // Router Plugin with Namespace Injection
    MyApp.plugins.router = (function() {
        var routes = [];
        var current = '';
        
        function addRoute(path, handler) {
            var paramNames = [];
            var regexPath = path.replace(/:(\w+)/g, function(match, name) {
                paramNames.push(name);
                return '([^/]+)';
            });
            routes.push({
                regex: new RegExp('^' + regexPath + '$'),
                params: paramNames,
                handler: handler
            });
        }
        
        function navigate(path) {
            for (var i = 0; i < routes.length; i++) {
                var route = routes[i];
                var match = path.match(route.regex);
                if (match) {
                    var params = {};
                    for (var j = 0; j < route.params.length; j++) {
                        params[route.params[j]] = match[j + 1];
                    }
                    current = path;
                    route.handler(params);
                    return true;
                }
            }
            return false;
        }
        
        function getCurrent() {
            return current;
        }
        
        return {
            addRoute: addRoute,
            navigate: navigate,
            getCurrent: getCurrent
        };
    })();
    
    // Plugin registration helper (Namespace Injection)
    MyApp.plugins.register = function(namespace, plugin) {
        var parts = namespace.split('.');
        var current = MyApp;
        
        for (var i = 0; i < parts.length; i++) {
            if (!current[parts[i]]) {
                current[parts[i]] = {};
            }
            current = current[parts[i]];
        }
        
        for (var key in plugin) {
            if (plugin.hasOwnProperty(key)) {
                current[key] = plugin[key];
            }
        }
    };
    
})();
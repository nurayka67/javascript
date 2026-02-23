/**
 * SCENARIO 01: App Config - SINGLETON
 */

class AppConfig {
    constructor() {
        if (AppConfig.instance) {
            return AppConfig.instance;
        }
        
        this.settings = {
            apiUrl: 'https://api.example.com',
            locale: 'kk-KZ',
            features: { darkMode: true }
        };
        
        AppConfig.instance = this;
        console.log('New AppConfig instance created');
    }

    get(key) { 
        return this.settings[key]; 
    }
    
    set(key, value) { 
        this.settings[key] = value;
        console.log(` Updated ${key} = ${value}`);
    }

    static getInstance() {
        return AppConfig.instance || new AppConfig();
    }
}

// DEMO
console.log('=== SINGLETON PATTERN DEMO ===\n');

const c1 = AppConfig.getInstance();
console.log(' Got first instance');

const c2 = new AppConfig();
console.log(' Got second instance');

console.log('\n Testing same instance:');
console.log('c1 === c2?', c1 === c2);

console.log('\n Initial values:');
console.log('apiUrl:', c1.get('apiUrl'));
console.log('locale:', c1.get('locale'));

console.log('\n Updating locale...');
c1.set('locale', 'en-US');

console.log('Reading from c2:');
console.log('locale from c2:', c2.get('locale'));

console.log('\n Singleton works! Both instances are the same object');
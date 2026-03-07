import ConfigManager from "./singleton.js";
import configModule from "./config.js";

const instance1 = ConfigManager.getInstance();
const instance2 = new ConfigManager();
const instance3 = ConfigManager.getInstance();

console.log('Singleton test:');
console.log('instance1 === instance2:', instance1 === instance2);
console.log('instance1 === instance3:', instance1 === instance3);

instance1.set('appName', 'MyApp');
console.log('instance2.get("appName"):', instance2.get('appName'));

console.log('\nModule Singleton test:');
const mod1 = configModule;
const mod2 = configModule;
console.log('mod1 === mod2:', mod1 === mod2);

mod1.set('theme', 'dark');
console.log('mod2.get("theme"):', mod2.get('theme'));
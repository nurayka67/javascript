export class HomeMediator {
    constructor() {
        this.devices = new Map();
        this.rules = [];
    }
    registerDevice(device) {
        this.devices.set(device.name, device);
        device.setMediator(this);
        console.log('[Mediator] Registered: ' + device.name);
    }
    notify(sender, changedProperty) {
        console.log('[Mediator] ' + sender.name + ' changed');
        this.checkRules(sender, changedProperty);
    }
    addRule(condition, action) {
        this.rules.push({ condition: condition, action: action });
    }
    checkRules(sender, state) {
        for (let i = 0; i < this.rules.length; i++) {
            if (this.rules[i].condition(sender, state)) {
                this.rules[i].action(this);
            }
        }
    }
    getDevice(name) {
        return this.devices.get(name);
    }
    getAllDevices() {
        return Array.from(this.devices.values());
    }
}

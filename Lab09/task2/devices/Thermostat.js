import { Device } from './Device.js';
export class Thermostat extends Device {
    constructor(name, location) {
        super(name, 'thermostat');
        this.location = location;
    }
    getDefaultState() {
        return { power: false, temperature: 22 };
    }
    turnOn() {
        this.updateState({ power: true });
        console.log('[Thermostat] ' + this.name + ' ON');
    }
    turnOff() {
        this.updateState({ power: false });
        console.log('[Thermostat] ' + this.name + ' OFF');
    }
    setTemperature(temp) {
        this.updateState({ temperature: temp });
        console.log('[Thermostat] ' + this.name + ' set to ' + temp + 'C');
    }
}

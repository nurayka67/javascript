import { Command } from './Command.js';
export class TurnOnLightCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }
    execute() {
        this.light.turnOn();
    }
    undo() {
        this.light.turnOff();
    }
}
export class TurnOffLightCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }
    execute() {
        this.light.turnOff();
    }
    undo() {
        this.light.turnOn();
    }
}
export class SetBrightnessCommand extends Command {
    constructor(light, brightness) {
        super();
        this.light = light;
        this.brightness = brightness;
        this.oldBrightness = 100;
    }
    execute() {
        this.oldBrightness = this.light.getState().brightness;
        this.light.setBrightness(this.brightness);
    }
    undo() {
        this.light.setBrightness(this.oldBrightness);
    }
}

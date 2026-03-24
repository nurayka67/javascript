import { Device } from './Device.js';
export class SecuritySystem extends Device {
    constructor(name) {
        super(name, 'security');
    }
    getDefaultState() {
        return { armed: false, motion: false };
    }
    arm() {
        this.updateState({ armed: true });
        console.log('[Security] ' + this.name + ' ARMED');
    }
    disarm() {
        this.updateState({ armed: false });
        console.log('[Security] ' + this.name + ' DISARMED');
    }
    detectMotion() {
        if (this.state.armed) {
            console.log('[Security] WARNING MOTION DETECTED');
            this.notifyChange({ motion: true });
        }
    }
}

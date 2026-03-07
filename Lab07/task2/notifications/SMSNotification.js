export class SMSNotification {
    constructor(to) {
        this.to = to;
        this.type = 'sms';
    }
    send(message) {
        const msg = message.length > 160 ? message.slice(0, 160) + '...' : message;
        console.log(`[SMS] To: ${this.to}`);
        console.log(`Message: ${msg}`);
        return {success: true, type: this};
    }
}
export class EmailNotification {
    constructor(to, subject) {
        this.to = to;
        this.subject = subject;
        this.type = 'email';
    }

    send(message) {
        console.log(`[Email] To: ${this.to}, Subject: ${this.subject}`);
        console.log(`Message: ${message}`);
        return {success: true, type: this};
    }
}
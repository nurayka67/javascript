export class EventBus {
    constructor() {
        this.events = new Map();
    }

    subscribe(event, callback) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        this.events.get(event).push(callback);
        
        return () => {
            const subs = this.events.get(event);
            const index = subs.indexOf(callback);
            if (index > -1) subs.splice(index, 1);
        };
    }

    publish(event, data) {
        if (this.events.has(event)) {
            this.events.get(event).forEach(cb => {
                try {
                    cb(data);
                } catch (e) {
                    console.error(e);
                }
            });
        }
    }
}

export const eventBus = new EventBus();
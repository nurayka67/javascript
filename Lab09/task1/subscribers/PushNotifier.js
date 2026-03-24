import { eventBus } from '../pubsub/EventBus.js';

export class PushNotifier {
    constructor(deviceId) {
        this.deviceId = deviceId;
        this.subscriptions = [];
        this.notificationCount = 0;
    }

    subscribe(categories) {
        categories.forEach(category => {
            const unsubscribe = eventBus.subscribe(`news:${category}`, (article) => {
                this.sendPush(article);
            });
            this.subscriptions.push(unsubscribe);
        });
        console.log(`[Push] Subscribed to: ${categories.join(", ")}`);
    }

    sendPush(article) {
        this.notificationCount++;
        console.log(`[Push -> ${this.deviceId}] 🔔 ${article.headline}`);
    }

    unsubscribe() {
        this.subscriptions.forEach(unsub => unsub());
        this.subscriptions = [];
        console.log(`[Push] Unsubscribed`);
    }

    getStats() {
        return { notifications: this.notificationCount, subscriptions: this.subscriptions.length };
    }
}
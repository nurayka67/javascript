import { eventBus } from '../pubsub/EventBus.js';

export class DashboardWidget {
    constructor(widgetId) {
        this.widgetId = widgetId;
        this.subscriptions = [];
        this.articles = [];
    }

    subscribe(categories = null) {
        const topics = categories ? categories.map(c => `news:${c}`) : ['news:all'];
        
        topics.forEach(topic => {
            const unsubscribe = eventBus.subscribe(topic, (article) => {
                this.update(article);
            });
            this.subscriptions.push(unsubscribe);
        });
        console.log(`[Dashboard] Subscribed`);
    }

    update(article) {
        this.articles.unshift(article);
        if (this.articles.length > 10) this.articles.pop();
        console.log(`[Dashboard] ${article.headline} (${this.articles.length} total)`);
    }

    unsubscribe() {
        this.subscriptions.forEach(unsub => unsub());
        this.subscriptions = [];
        console.log(`[Dashboard] Unsubscribed`);
    }

    getArticles() {
        return [...this.articles];
    }
}
export class ViewModel {
    constructor() {
        this._bindings = new Map();
        this._subscribers = new Map();
    }

    defineProperty(name, initialValue) {
        let value = initialValue;

        Object.defineProperty(this, name, {
            get() {
                return value;
            },
            set(newValue) {
                const oldValue = value;
                if (newValue !== oldValue) {
                    value = newValue;
                    this._notify(name, newValue, oldValue);
                }
            },
            enumerable: true,
            configurable: true
        });

        this._bindings.set(name, {value: initialValue});
        this._subscribers.set(name, new Set());
    }

    watch(name, callback) {
        const subscribers = this._subscribers.get(name);
        if (subscribers) {
            subscribers.add(callback);
        }
    }

    unwatch(name, callback) {
        const subscribers = this._subscribers.get(name);
        if (subscribers) {
            subscribers.delete(callback);
        }
    }

    _notify(name, newValue, oldValue) {
        const subscribers = this._subscribers.get(name);
        if (subscribers) {
            subscribers.forEach(callback => {
                try {
                    callback(newValue, oldValue);
                } catch (error) {
                    console.error(`Error in subscriber for ${name}:`, error);
                }
            });
        }
    }

    data() {
        const data = {};
        this._bindings.forEach((binding, name) => {
            data[name] = this[name];
        });
        return data;
    }
}
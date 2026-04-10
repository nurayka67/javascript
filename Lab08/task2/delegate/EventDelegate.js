// EventDelegate.js - Centralized event handling using delegation

export class EventDelegate {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.handlers = new Map();
        
        if (!this.container) {
            throw new Error(`Container not found: ${containerSelector}`);
        }
        
        // Single event listeners on parent
        this.container.addEventListener("click", this.handleClick.bind(this));
        this.container.addEventListener("dblclick", this.handleDoubleClick.bind(this));
        this.container.addEventListener("change", this.handleChange.bind(this));
    }

    handleClick(event) {
        const target = event.target;
        const action = target.dataset.action;
        
        if (!action) return;
        
        const itemElement = target.closest("[data-id]");
        const itemId = itemElement?.dataset.id;
        
        switch (action) {
            case "delete":
                this.emit("delete", { id: itemId });
                break;
            case "edit":
                this.emit("edit", { id: itemId });
                break;
            case "priority":
                const priority = target.dataset.priority;
                this.emit("priority", { id: itemId, priority });
                break;
        }
    }

    handleDoubleClick(event) {
        const itemElement = event.target.closest("[data-id]");
        if (itemElement) {
            this.emit("edit-start", { id: itemElement.dataset.id });
        }
    }

    handleChange(event) {
        const target = event.target;
        if (target.type === "checkbox") {
            const itemElement = target.closest("[data-id]");
            if (itemElement) {
                this.emit("toggle", { 
                    id: itemElement.dataset.id, 
                    completed: target.checked 
                });
            }
        }
    }

    on(event, handler) {
        if (!this.handlers.has(event)) {
            this.handlers.set(event, []);
        }
        this.handlers.get(event).push(handler);
    }

    emit(event, data) {
        const handlers = this.handlers.get(event);
        if (handlers) {
            handlers.forEach(handler => handler(data));
        }
    }

    getEventCount() {
        return this.handlers.size;
    }
}
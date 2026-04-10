// TodoList.js - Todo list with event delegation

import { EventDelegate } from "../delegate/EventDelegate.js";

export class TodoList {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.items = new Map();
        this.idCounter = 0;
        this.delegate = new EventDelegate(`#${containerId}`);
        this.setupEventHandlers();
    }

    setupEventHandlers() {
        this.delegate.on("toggle", ({ id, completed }) => {
            this.toggleItem(id, completed);
        });

        this.delegate.on("delete", ({ id }) => {
            this.deleteItem(id);
        });

        this.delegate.on("edit", ({ id }) => {
            this.startEditing(id);
        });

        this.delegate.on("priority", ({ id, priority }) => {
            this.setPriority(id, priority);
        });

        this.delegate.on("edit-start", ({ id }) => {
            this.startEditing(id);
        });
    }

    addItem(text, priority = "normal") {
        const id = `todo-${++this.idCounter}`;
        const item = {
            id,
            text,
            completed: false,
            priority,
            createdAt: new Date()
        };
        this.items.set(id, item);
        this.renderItem(item);
        return id;
    }

    addMultipleItems(count) {
        const priorities = ["low", "normal", "high"];
        const texts = [
            "Complete project report", "Review pull requests", "Update documentation",
            "Fix browser compatibility", "Optimize performance", "Write unit tests",
            "Deploy to production", "Schedule team meeting", "Update dependencies",
            "Refactor old code"
        ];
        
        for (let i = 0; i < count; i++) {
            const text = texts[i % texts.length] + ` #${i + 1}`;
            const priority = priorities[i % priorities.length];
            this.addItem(text, priority);
        }
    }

    renderItem(item) {
        const div = document.createElement("div");
        div.className = `todo-item ${item.completed ? "completed" : ""} priority-${item.priority}`;
        div.dataset.id = item.id;
        
        div.innerHTML = `
            <div class="todo-checkbox">
                <input type="checkbox" data-action="toggle" ${item.completed ? "checked" : ""}>
            </div>
            <span class="todo-text">${this.escapeHtml(item.text)}</span>
            <div class="todo-actions">
                <button data-action="priority" data-priority="high" class="priority-btn high">🔴 High</button>
                <button data-action="priority" data-priority="normal" class="priority-btn normal">🟡 Normal</button>
                <button data-action="priority" data-priority="low" class="priority-btn low">🟢 Low</button>
                <button data-action="edit" class="edit-btn">✏️ Edit</button>
                <button data-action="delete" class="delete-btn">🗑️ Delete</button>
            </div>
        `;
        
        this.container.appendChild(div);
    }

    escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }

    toggleItem(id, completed) {
        const item = this.items.get(id);
        if (item) {
            item.completed = completed;
            const element = this.container.querySelector(`[data-id="${id}"]`);
            if (element) {
                element.classList.toggle("completed", completed);
                const checkbox = element.querySelector('input[type="checkbox"]');
                if (checkbox) checkbox.checked = completed;
            }
        }
    }

    deleteItem(id) {
        this.items.delete(id);
        const element = this.container.querySelector(`[data-id="${id}"]`);
        if (element) {
            element.remove();
        }
    }

    setPriority(id, priority) {
        const item = this.items.get(id);
        if (item) {
            item.priority = priority;
            const element = this.container.querySelector(`[data-id="${id}"]`);
            if (element) {
                element.className = `todo-item ${item.completed ? "completed" : ""} priority-${priority}`;
            }
        }
    }

    startEditing(id) {
        const item = this.items.get(id);
        if (!item) return;
        
        const element = this.container.querySelector(`[data-id="${id}"]`);
        const textSpan = element.querySelector(".todo-text");
        
        const input = document.createElement("input");
        input.type = "text";
        input.value = item.text;
        input.className = "edit-input";
        
        input.addEventListener("blur", () => {
            item.text = input.value;
            textSpan.textContent = this.escapeHtml(item.text);
            input.replaceWith(textSpan);
        });
        
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") input.blur();
            if (e.key === "Escape") {
                input.value = item.text;
                input.blur();
            }
        });
        
        textSpan.replaceWith(input);
        input.focus();
    }

    getStats() {
        return {
            totalItems: this.items.size,
            completedItems: Array.from(this.items.values()).filter(i => i.completed).length,
            eventListeners: this.delegate.getEventCount()
        };
    }

    clearAll() {
        this.items.clear();
        this.container.innerHTML = "";
        this.idCounter = 0;
    }
}
export class TodoModel {
    constructor() {
        this.todos = [];
        this.observers = [];
        console.log('Model created');
    }

    subscribe(observer) {
        this.observers.push(observer);
        console.log('Observer added, total:', this.observers.length);
    }

    notify() {
        console.log('Notifying', this.observers.length, 'observers');
        this.observers.forEach(observer => observer(this.todos));
    }

    addTodo(text) {
        if (!text.trim()) return;
        
        const todo = {
            id: Date.now(),
            text: text.trim(),
            completed: false
        };
        
        this.todos.push(todo);
        console.log('Added todo:', todo);
        this.notify(); 
        return todo;
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            console.log('Toggled todo:', id);
            this.notify();
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        console.log('Deleted todo:', id);
        this.notify();
    }

    updateTodo(id, text) {
        const todo = this.todos.find(t => t.id === id);
        if (todo && text.trim()) {
            todo.text = text.trim();
            console.log('Updated todo:', id);
            this.notify();
        }
    }

    getTodos() {
        return [...this.todos];
    }
}
export class TodoView {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.onAddTodo = null;
        this.onToggleTodo = null;
        this.onDeleteTodo = null;
        
        console.log('View created, container:', containerId);
        this.render([]);
        this.attachEventListeners();
    }

    render(todos) {
        console.log('View rendering', todos.length, 'todos');
        
        const completedCount = todos.filter(t => t.completed).length;
        const pendingCount = todos.length - completedCount;
        
        this.container.innerHTML = `
            <div class="todo-app">
                <h1> Todo List (MVC)</h1>
                <div class="todo-form">
                    <input type="text" id="todoInput" placeholder="What needs to be done?" autocomplete="off">
                    <button id="addButton">Add Task</button>
                </div>
                <div class="todo-stats">
                    <span> Total: ${todos.length}</span>
                    <span> Completed: ${completedCount}</span>
                    <span> Pending: ${pendingCount}</span>
                </div>
                <ul class="todo-list">
                    ${todos.length === 0 ? 
                        '<div class="empty-message"> No tasks yet. Add one above!</div>' : 
                        todos.map(todo => `
                            <li class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
                                <input type="checkbox" class="todo-checkbox" data-action="toggle" ${todo.completed ? 'checked' : ''}>
                                <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                                <button class="todo-delete" data-action="delete">Delete</button>
                            </li>
                        `).join('')
                    }
                </ul>
            </div>
        `;
        
        
        this.attachEventListeners();
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    attachEventListeners() {
        const addButton = this.container.querySelector('#addButton');
        const todoInput = this.container.querySelector('#todoInput');
        
        console.log('Attaching listeners, onAddTodo exists:', !!this.onAddTodo);
        
        if (addButton) {
            
            const newButton = addButton.cloneNode(true);
            addButton.parentNode.replaceChild(newButton, addButton);
            
            newButton.addEventListener('click', () => {
                console.log('Button clicked!');
                const text = todoInput.value.trim();
                console.log('Text:', text);
                console.log('onAddTodo exists:', !!this.onAddTodo);
                
                if (text && this.onAddTodo) {
                    console.log('Calling onAddTodo...');
                    this.onAddTodo(text);
                    todoInput.value = '';
                } else {
                    console.log('Cannot add: text empty or no handler');
                }
            });
        }

        if (todoInput) {
            todoInput.removeEventListener('keypress', this.handleKeyPress);
            this.handleKeyPress = (e) => {
                if (e.key === 'Enter') {
                    console.log('Enter pressed');
                    const text = todoInput.value.trim();
                    if (text && this.onAddTodo) {
                        this.onAddTodo(text);
                        todoInput.value = '';
                    }
                }
            };
            todoInput.addEventListener('keypress', this.handleKeyPress);
        }

        const list = this.container.querySelector('.todo-list');
        if (list) {
            list.addEventListener('click', (e) => {
                const item = e.target.closest('.todo-item');
                if (!item) return;
                
                const id = parseInt(item.dataset.id);
                const action = e.target.dataset.action;
                
                if (action === 'toggle' && this.onToggleTodo) {
                    console.log('Toggle todo:', id);
                    this.onToggleTodo(id);
                } else if (action === 'delete' && this.onDeleteTodo) {
                    console.log('Delete todo:', id);
                    this.onDeleteTodo(id);
                }
            });
        }
    }
}
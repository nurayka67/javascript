import { TodoModel } from '../model/TodoModel.js';
import { TodoView } from '../view/TodoView.js';

export class TodoController {
    constructor(containerId) {
        console.log('Controller starting...');
        
        this.model = new TodoModel();
        this.view = new TodoView(containerId);
        
        
        this.view.onAddTodo = (text) => {
            console.log('onAddTodo called with:', text);
            this.addTodo(text);
        };
        
        this.view.onToggleTodo = (id) => {
            console.log('onToggleTodo called with:', id);
            this.toggleTodo(id);
        };
        
        this.view.onDeleteTodo = (id) => {
            console.log('onDeleteTodo called with:', id);
            this.deleteTodo(id);
        };
        
        
        this.model.subscribe((todos) => {
            console.log('Model changed, updating view with', todos.length, 'todos');
            this.view.render(todos);
        });
        
        
        this.view.render(this.model.getTodos());
        
        console.log('Controller ready');
    }
    
    addTodo(text) {
        console.log('Controller.addTodo:', text);
        if (text && text.trim()) {
            this.model.addTodo(text);
        }
    }
    
    toggleTodo(id) {
        console.log('Controller.toggleTodo:', id);
        this.model.toggleTodo(id);
    }
    
    deleteTodo(id) {
        console.log('Controller.deleteTodo:', id);
        this.model.deleteTodo(id);
    }
}
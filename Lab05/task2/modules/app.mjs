import { Todo } from "./core.mjs";
import { saveTodos, loadTodos } from "./utils.mjs";

let todos = loadTodos();
let statsLoaded = false;

function renderTodos() {
    const list = document.getElementById("todoList");
    
    if (todos.length === 0) {
        list.innerHTML = '<div style="text-align:center; color:#999; padding:20px;">No todos yet. Add one above!</div>';
        return;
    }
    
    let html = '';
    todos.forEach(todo => {
        html += `
            <div style="display:flex; align-items:center; gap:10px; padding:10px; background:#f9f9f9; border:1px solid #ddd; margin-bottom:5px; border-radius:4px;" data-id="${todo.id}">
                <input type="checkbox" ${todo.completed ? 'checked' : ''}>
                <span style="flex:1; ${todo.completed ? 'text-decoration:line-through; color:#999;' : ''}">${todo.title}</span>
                <button style="padding:5px 10px; background:#dc3545; color:white; border:none; border-radius:3px; cursor:pointer;">Delete</button>
            </div>
        `;
    });
    list.innerHTML = html;
    
    document.querySelectorAll('[data-id]').forEach(item => {
        const id = Number(item.dataset.id);
        const todo = todos.find(t => t.id === id);
        
        const cb = item.querySelector('input[type="checkbox"]');
        cb.onchange = () => {
            todo.toggle();
            saveTodos(todos);
            renderTodos();
        };
        
        const btn = item.querySelector('button');
        btn.onclick = () => {
            todos = todos.filter(t => t.id !== id);
            saveTodos(todos);
            renderTodos();
        };
    });
}


document.getElementById("addBtn").onclick = function() {
    console.log("Clicked!"); 
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    
    if (text) {
        todos.push(new Todo(text));
        saveTodos(todos);
        renderTodos();
        input.value = "";
    } else {
        alert("Enter something!");
    }
};


document.getElementById("todoInput").onkeypress = function(e) {
    if (e.key === "Enter") {
        document.getElementById("addBtn").click();
    }
};

document.getElementById("exportBtn").onclick = async () => {
    try {
        const module = await import("./advanced.mjs");
        module.exportTodos(todos);
    } catch(e) {
        alert("Error loading module");
    }
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsLoaded) {
            import("./stats.mjs").then(module => {
                module.showStats(todos);
                statsLoaded = true;
            });
        }
    });
});

observer.observe(document.getElementById("lazySection"));

renderTodos();
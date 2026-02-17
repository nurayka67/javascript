export function exportTodos(todos) {
    const data = JSON.stringify(todos);
    const blob = new Blob([data], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "todos.json";
    a.click();
    alert("Exported " + todos.length + " todos");
}
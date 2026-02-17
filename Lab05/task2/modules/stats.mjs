export function showStats(todos) {
    const total = todos.length;
    const active = todos.filter(t => !t.completed).length;
    const completed = todos.filter(t => t.completed).length;
    
    document.getElementById("stats").innerHTML = `
        <div style="display:flex; gap:10px; margin-top:10px;">
            <div style="flex:1; background:white; padding:10px; border-radius:4px; text-align:center;">
                <div>Total</div>
                <div><strong>${total}</strong></div>
            </div>
            <div style="flex:1; background:white; padding:10px; border-radius:4px; text-align:center;">
                <div>Active</div>
                <div><strong>${active}</strong></div>
            </div>
            <div style="flex:1; background:white; padding:10px; border-radius:4px; text-align:center;">
                <div>Done</div>
                <div><strong>${completed}</strong></div>
            </div>
        </div>
    `;
}
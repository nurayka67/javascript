export const showStats = (todos) => {
    const statsDiv = document.getElementById("stats");
    const total = todos.length;
    const active = todos.filter(t => !t.completed).length;
    const completed = todos.filter(t => t.completed).length;
    
    statsDiv.innerHTML = `
        <div class="stats">
            <div class="stat-box">
                <h2>${total}</h2>
                <p>Total</p>
            </div>
            <div class="stat-box">
                <h2>${active}</h2>
                <p>Active</p>
            </div>
            <div class="stat-box">
                <h2>${completed}</h2>
                <p>Completed</p>
            </div>
        </div>
    `;
};

export default { showStats };
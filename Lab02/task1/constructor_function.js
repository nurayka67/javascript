// task1/constructor_function.js
/**
 * Task Manager - Implementation 2: Constructor Function Pattern
 * Using constructor functions to create multiple task manager instances.
 */
/**
 * TaskManager constructor function
 * @constructor
 */

function TaskManager() {
    // Each instance gets its own tasks array
    this.tasks = [];
}
/**
 * Add task to the manager
 * @param {string} task - The task description
 */

TaskManager.prototype.addTask = function(task) {
    this.tasks.push(task);
    console.log(`✓ Task added: "${task}"`);
}
/**
 * Remove task from the manager
 * @param {string} task - The task to remove
 */

TaskManager.prototype.removeTask = function(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
        this.tasks.splice(index, 1);
        console.log(`✗ Task removed: "${task}"`);
    } else {
        console.log(`⚠ Task not found: "${task}"`);
    }
}

TaskManager.prototype.listTasks = function() {
    console.log('\n📋 Current Tasks:');
    if (this.tasks.length === 0) {
        console.log('No tasks available.');
    } else{
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        })
    }
    console.log('')
}

console.log('=== Constructor Function Task Manager ===');
const workTasks = new TaskManager();
const personalTasks = new TaskManager();

workTasks.addTask('Finish project documentation');
workTasks.addTask('Team meeting at 3 PM');
personalTasks.addTask('Buy groceries');
personalTasks.addTask('Call family');

console.log('\nWork Tasks:');
workTasks.listTasks();

console.log('\nPersonal Tasks:');
personalTasks.listTasks();

workTasks.removeTask('Team meeting at 3 PM');
console.log('After removing meeting:');
workTasks.listTasks();

if (typeof module !== 'underfined' && module.exports) {
    module.exports = TaskManager;
}
// task1/module_pattern.js
/**
 * Task Manager - Implementation 3: Module Pattern
 * Using Immediately Invoked Function Expression for true privacy.
 */
const taskManagerModule = (function() {
    // Private variable - inaccessible from outside
    let tasks = [];
    // Private helper function
    function logAction(action, task) {
        const timestamp = new Date().toLocaleTimeString();
        console.log(`[${timestamp}] ${action}: "${task}"`);
    }
    // Public API
    return {
        /**
         * Add a new task 
         * @param {string} task - The task description
         */
        addTask(task) {
            tasks.push(task);
            logAction('ADDED', task);
        },

        /**
         * Remove a task
         * @param {string} task - Task to remove
         */
        removeTask(task) {
            const index = tasks.indexOf(task);
            if (index !== -1) {
                tasks.splice(index, 1);
                logAction('REMOVED', task);
            } else {
                console.log(`⚠ Task not found: "${task}"`);

            }
        }

        /**
         * List all tasks
         */
        listTasks() {
            console.log('\n📋 Task List:');
            if (tasks.length === 0) {
                console.log('No tasks available.');
            } else {
                tasks.forEach((task, index) => {
                    console.log(`${index + 1}. ${task}`);
                })
            }
            console.log(`Total: ${tasks.length} task(s).\n`);
        }

        /**
         * Get task count (public getter)
         * @returns {number} - Number of tasks
         */

        getTaskCount() {
            return tasks.length;
        }
        /**
         * Clear all tasks
         */

        clearAll() {
            const count = tasks.length;
            tasks = [];
            console.log(`🗑 Cleared all (${count} task(s)`);
        }
};
})();

// Demo usage
console.log('=== Module Pattern Task Manager ===');
taskManagerModule.addTask('Study module patterns');
taskManagerModule.addTask('Implement IIFE example');
taskManagerModule.addTask('Test private scope');
taskManagerModule.listTasks();

console.log(`Task count via getter: ${taskManagerModule.getTaskCount()}`);
taskManagerModule.removeTask('Test private scope');
taskManagerModule.listTasks();

// Note: tasks array is not accessible directly!
//
console.log(taskManagerModule.tasks); // undefined

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = taskManagerModule;
}
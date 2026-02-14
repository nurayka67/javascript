const taskManagerLiteral = {
  // Private tasks array (encapsulated within object)
  tasks: [],

  /**
   * Add a new task to the list
   * @param {string} task - The task description
   */
  addTask(task) {
    this.tasks.push(task);
    console.log(`✓ Task added: "${task}"`);
  },

  /**
   * Remove a task from the list
   * @param {string} task - The task to remove
   */
  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      console.log(`✗ Task removed: "${task}"`);
    } else {
      console.log(`⚠ Task not found: "${task}"`);
    }
  },

  /**
   * Display all current tasks
   */
  listTasks() {
    console.log('\n📋 Current Tasks:');
    if (this.tasks.length === 0) {
      console.log('No tasks available.');
    } else {
      this.tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    }
    console.log('');
  },
};

// Demo usage
console.log('=== Object Literal Task Manager ===');
taskManagerLiteral.addTask('Learn JavaScript Design Patterns');
taskManagerLiteral.addTask('Complete Lab 02');
taskManagerLiteral.addTask('Read Chapter 2');
taskManagerLiteral.listTasks();
taskManagerLiteral.removeTask('Complete Lab 02');
taskManagerLiteral.listTasks();

// Export for potential testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = taskManagerLiteral;
}
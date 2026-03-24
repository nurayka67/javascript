export class CommandManager {
    constructor() {
        this.history = [];
        this.redoStack = [];
    }
    execute(command) {
        command.execute();
        this.history.push(command);
        this.redoStack = [];
        console.log('[Command] Executed');
    }
    undo() {
        let command = this.history.pop();
        if (command) {
            command.undo();
            this.redoStack.push(command);
            console.log('[Command] Undo');
        } else {
            console.log('[Command] Nothing to undo');
        }
    }
    redo() {
        let command = this.redoStack.pop();
        if (command) {
            command.execute();
            this.history.push(command);
            console.log('[Command] Redo');
        } else {
            console.log('[Command] Nothing to redo');
        }
    }
}

# Lab 5.2 - Modular Architecture with Static & Dynamic Imports

## Overview
Todo application demonstrating ES6 modules with static and dynamic imports.

## Features
- Add/delete todos
- Toggle completion
- LocalStrage persistence
- Static imports (core modules)
- Dynamic import on interaction (export features)
- Dynamic import on visibility (stats with IntersectionObserver)

## How to Run
1. Open `index.html` in a modern browser
2. No build  tools needed - uses native ES modules

## Import Patterns Demonstrated 
- **Named imports**: `import { Todo } from './core.mjs'`
- **Default impports**: `import constants from './constants.mjs'`
- **Namespace imports**: `import * as Utils from './utils.mjs'`
- **Dynamic imports**: `import('./module.mjs').then()`

## Dynamic Import Examples
1. **Click "Export Todos"** - loads advanced_feature.mjs
2. **Scroll to bottom** - loads lazy_component.mjs via

## Error Handling
- try/catch blocks for failed dynamic imports
- User-friendly error messages


## How to Run (for the examiner)

### Method 1 - Using HTTP Server (recommended)
```bash
# Open terminal in task2 folder
cd C:\Users\Asus\Downloads\jsadv\javascript\Lab05\task2

# Start a simple HTTP server
npx http-server

# OR if you have Python:
python -m http.server 8000

# OR if you have Node.js:
npx serve
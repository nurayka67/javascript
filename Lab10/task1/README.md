# MVC Todo Application

**Student Name:** Nuray Koshan   
**Date:** 2026-03-24

## Overview
Vanilla JavaScript implementation of Model-View-Controller (MVC) pattern for a Todo list application.

## Architecture

### Components
- **Model (TodoModel.js)**: Manages todo data, CRUD operations, Observer pattern
- **View (TodoView.js)**: Renders UI, handles user input, event delegation
- **Controller (TodoController.js)**: Orchestrates Model and View, connects callbacks

### MVC Flow
1. User interacts with View → 2. View notifies Controller → 3. Controller updates Model → 4. Model notifies observers → 5. View re-renders

## Features
-  Add todos (button or Enter key)
-  Toggle completion status
-  Delete todos
-  Edit todos (double-click)
-  Real-time statistics (Total/Completed/Pending)
-  Observer pattern for reactive updates

## How to Run
Open `index.html` in any modern browser.

## File Structure
task1/
├── index.html
├── mvc/
│ ├── model/TodoModel.js
│ ├── view/TodoView.js
│ └── controller/TodoController.js
└── README.md
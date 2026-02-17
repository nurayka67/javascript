# Implementation Notes

## Static Imports:
- Loaded immediately when app starts
- Used for core functionality (Todo class, utils)

## Dynamic Imports:

### 1. Import on Interaction (Button Click)

- **File**: advanced_feature.mjs
- **Trigger**: Click "Export Todos" button
- **Purpose**: Export todos as JSON file
- **Error handling**: try/catch with user feedback

### 2. Import on Visibility (Scroll)
- **File**: lazy_component.mjs
- **Trigger**: When stats section becomes visible (IntersectionObserver)
- **Purpose**: Show todo statistics
- **Prevention**: Loads only once (lazyLoaded flag)

## Benefits:
- Faster initial load
- Code splite into smaller chunks
- Features load only when needed
# AI Usage Report - Lab 08: Structural Patterns II

Student Name: Nuray Koshan
Date: March 8, 2026
Course: JavaScript Design Patterns
Lab: Lab 08 - Flyweight Pattern and Event Delegation

---

AI Tool Information

Tool Used: ChatGPT (OpenAI)
Version: GPT-4
Purpose: Consultant for conceptual understanding and code review

---

How AI Was Used

I used AI only as a consultant. All code was written by me. AI helped me understand the concepts and review my implementation.

1. Conceptual Clarification

I asked AI to explain the difference between intrinsic and extrinsic state in the Flyweight pattern. I also asked about event bubbling mechanics for Event Delegation. AI provided examples that helped me understand these concepts before writing my own code.

2. Code Review

After writing my FlyweightTree, TreeFactory, ForestRenderer, EventDelegate, and TodoList classes, I asked AI to review the separation of intrinsic and extrinsic state. AI confirmed my approach was correct and suggested using string keys for the factory cache, which I implemented.

3. Debugging Assistance

I encountered an issue where the canvas would not render trees after generation. I described the problem to AI. AI suggested checking canvas dimensions and using setTimeout to prevent UI freeze. I fixed the issue by setting canvas.width and canvas.height explicitly and adding async rendering.

4. Documentation Help

I asked AI to help me phrase the pattern explanations in my README files. I wrote the content myself but used AI to check grammar and clarity.

---

Code Written By Me

Component: FlyweightTree.js
Written By: Myself
AI Role: Reviewed intrinsic/extrinsic separation

Component: TreeFactory.js
Written By: Myself
AI Role: Explained caching concept, suggested key format

Component: ForestRenderer.js
Written By: Myself
AI Role: Helped debug canvas rendering issue

Component: EventDelegate.js
Written By: Myself
AI Role: Explained event bubbling and target identification

Component: TodoList.js
Written By: Myself
AI Role: Reviewed event handler registration

Component: index.html (both tasks)
Written By: Myself
AI Role: No involvement

Component: README files
Written By: Myself
AI Role: Grammar and clarity check only

---

Verification Steps I Took

Step 1: Read Chapter 7 of Learning JavaScript Design Patterns by Addy Osmani

Step 2: Understood both patterns before writing any code

Step 3: Wrote all code manually in VS Code without copying from AI

Step 4: Tested incrementally - first 100 trees, then 1000, then 10000

Step 5: Used Chrome DevTools Memory Profiler to verify memory savings

Step 6: Compared flyweight implementation with non-flyweight version

Step 7: Verified event delegation by counting active event listeners in DevTools

---

What I Learned

From the textbook:
- Flyweight pattern shares immutable data across many objects
- Event delegation uses event bubbling to reduce listener count
- Factory pattern manages creation and caching of shared objects

From my own implementation:
- 10,000 trees with flyweight use approximately 10,004 objects in memory
- Without flyweight, 10,000 trees would create 80,000 data points
- Memory savings achieved: approximately 87 percent
- Event delegation reduced listeners from 1000+ to only 3

From AI consultant:
- Proper structure for factory caching using Map with string keys
- Canvas dimension handling for consistent rendering
- Using element.closest() method for reliable event target identification

---

Honesty Statement

I confirm that I wrote all the code in this lab submission. AI was used only as a consultant for understanding concepts, reviewing my code, and helping with debugging. No code was directly copied from AI. I verified every suggestion against the textbook and my own testing before implementing.


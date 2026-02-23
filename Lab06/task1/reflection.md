 # Reflection: Why Categorization Matters

 > *"A design pattern names, abstracts, and identifies the key aspects of a common design structure"* - Gamma et al. (1995)

 Pattern categories are my mental search filter. When debugging, I now ask: **"Is this a creation, structure, or communication problem?"**

 If components are tightly coupled -> **Behavioral** (Observer/Mediator)
 If object creation is messy -> **Creational** (Factory/Singleton)
 If interfaces don't fit -> **Structure** (Adapter/Facade)

 This categorical thinking saved me from implementing a Facade (structural) when I actually needed Observer (behavioral) for a notification system. Wrong category = wrong solution.
# Pattern Classification

| Snippet | Family | Pattern | Evidence | Reasoning |
|---------|--------|---------|----------|-----------|
| **01** | Creational | Singleton | `if (DatabaseConnection._instance) return _instance` | Constructor prevents multiple instances |
| **02** | Behavioral | Mediator | `EventBus` with `subscribe/publish` | Central communication hub |
| **03** | Structural | Facade | `login()` hides auth + repo + logger | Single unified interface |
| **04** | Creational | Factory | `createNotifier(type)` returns different classes | Object creation based on type |
| **05** | Structural | Decorator | `TimestampLogger` wraps and adds timestamp | Dynamic behavior addition |
| **06** | Creational | Prototype | `Object.create(prototype)` | Cloning from template |
| **07** | Behavioral | Chain of Resp | `this.next.handle(ticket)` | Request passes through chain |
| **08** | Behavioral | Command | `execute()/undo()` methods | Actions as objects |
| **09** | Structural | Flyweight | Shared `ParticleType` + unique positions | Intrinsic/extrinsic state separation |
| **10** | Behavioral | Mediator | `ChatRoom` routes messages | Indirect comminication |

** Reference:** Ch. 6 - "Categories of Design Patterns" (Osmani, 2023)
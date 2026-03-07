# Lab 7.2: Factory Pattern

Student: Nuray Koshan
Date: 06.03.2026

# Problem Solved
Factory creates objects without specifying exact class.
Object type determined at runtime based on input.

## When to Use
- Object type unknown untill runtime
- Creation logic is complex
- Want to centralize object creation

## Factory vs Constructor
Constructor: new EmailNotification(to, subject) - caller knows exact type
Factory: NotificationFactory.create('email', options) - type determined by parameter.
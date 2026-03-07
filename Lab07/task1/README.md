# Lab 7.1: Singleton Pattern

Student: Nuray Koshan
Date: 06.03.2026

## Problem Solved
Singleton ensures only one instance of a class exists. Used for configuration managers, database connections, loggers where multiple instances would cause inconsistencies.

## When to Use
- Exactly one instance needed
- Global access point required
- Shared state across application

## Drawbacks
- Global state complicates testing
- Hidden dependencies.
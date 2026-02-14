# Lab 4.2 – Refactoring Plan

Identified Anti-Patterns:
- Global namespace pollution
- Tight coupling
- Code duplication
- Scattered configuration

Refactoring Strategy:
1. Apply Module Pattern (Ch.7) to encapsulate functionality.
2. Apply Namespace Pattern (Ch.11) to prevent global pollution.
3. Centralize configuration into a Config module.
4. Move validation and formatting into Utils module.
5. Expose only public APIs.

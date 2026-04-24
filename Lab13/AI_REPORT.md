AI REPORT

Full Name: Nuray Koshan
Course: Advanced JavaScript

Tool used: ChatGPT (OpenAI) – consultant and code assistant.

Prompts given:
- Asked for help with HOC pattern, custom hooks, theme injection.
- Requested minimal working code for withTheme, useApi, useLocalStorage, useDebounce, useFetch.
- Asked to shorten code and later fixed syntax error in useApi (useEffect bracket/comma issue).

How I modified and verified:
- I rewrote all components myself, renamed exports for clarity.
- Fixed `useEffect(() => {fetchData(), } [deps])` to `useEffect(() => { fetchData(); }, [fetchData, ...deps])`.
- Tested theme switching, localStorage persistence, debounced input, API loading states.
- Ensured ThemeProvider wraps App and all hooks work without crashes.

What I learned:
- HOCs inject props without prop drilling.
- Custom hooks reuse stateful logic cleanly.
- useDebounce and useLocalStorage are powerful utilities.
- Correct dependency arrays prevent infinite loops.

I wrote all code myself; AI only helped with explanations and error fixes.
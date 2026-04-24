import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemedButton, ThemedCard, ThemeSwitcher } from './components/ThemedComponents';
import { useApi } from './hooks/useApi';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDebounce } from './hooks/useDebounce';
import { useFetch } from './hooks/useFetch';

function DemoContent() {
  const [count, setCount] = useLocalStorage('count', 0);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const { data: apiData, loading } = useApi(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    return res.json();
  });
  const { data: fetchData } = useFetch('https://jsonplaceholder.typicode.com/posts/2');

  return (
    <div style={{ padding: '20px' }}>
      <ThemeSwitcher />
      
      <ThemedCard>
        <h3>useApi Demo</h3>
        {loading ? <p>Loading...</p> : <pre>{JSON.stringify(apiData, null, 2)}</pre>}
      </ThemedCard>

      <ThemedCard>
        <h3>useLocalStorage Demo</h3>
        <p>Count: {count}</p>
        <ThemedButton onClick={() => setCount(c => c + 1)}>Increment</ThemedButton>
      </ThemedCard>

      <ThemedCard>
        <h3>useDebounce Demo</h3>
        <input type="text" onChange={e => setSearch(e.target.value)} placeholder="Type..." />
        <p>Debounced: {debouncedSearch}</p>
      </ThemedCard>

      <ThemedCard>
        <h3>useFetch Demo</h3>
        <pre>{JSON.stringify(fetchData, null, 2)}</pre>
      </ThemedCard>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <DemoContent />
    </ThemeProvider>
  );
}

export default App;
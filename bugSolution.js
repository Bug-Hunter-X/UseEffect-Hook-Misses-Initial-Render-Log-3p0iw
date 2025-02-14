```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Runs once on mount and whenever count changes.
    console.log('Component rendered with count:', count);
  }, [count]); //Empty dependency array [] to run on mount

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
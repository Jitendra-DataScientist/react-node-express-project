import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/api/hello')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not OK');
        return res.json();
      })
      .then(data => {
        // adjust depending on your API response
        setMsg(data.msg || data.message || JSON.stringify(data));
      })
      .catch(err => setMsg('Error: ' + err.message));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Message from backend:</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;

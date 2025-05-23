import { useState } from 'react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  async function submit(e) {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const res = await fetch('/api/save-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        setStatus('Thanks for signing up!');
        setEmail('');
      } else {
        setStatus('Something went wrong.');
      }
    } catch (err) {
      setStatus('Error submitting.');
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Echoes of Dawn</h1>
      <h2>Coming Soon</h2>
      <p>Sign up below for early access.</p>
      <form onSubmit={submit}>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit">Notify Me</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

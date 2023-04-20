import React, { useState } from 'react';

const BASE_URL = 'http://localhost:8000';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/auth/token/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await response.json();
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      setError('');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

const Logout = () => {
  const handleLogout = async () => {
    const access_token = localStorage.getItem('access_token');
    await fetch(`${BASE_URL}/auth/token/logout/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({ token: access_token }),
    });
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

const Profile = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const access_token = localStorage.getItem('access_token');
    try {
      const response = await fetch(`${BASE_URL}/auth/users/me/`, {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Welcome, {user.username}!</p>
      <Logout />
    </div>
  );
};

const App = () => {
  const access_token = localStorage.getItem('access_token');
  return access_token ? <Profile /> : <Login />;
};

export default App;



// src/App.js
import './App.css';
import React, { useState } from 'react';
import Auth from './components/Auth';
import Dashboard from './components/Landing';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <div className="App">
      {user ? <Dashboard user={user} /> : <Auth setUser={setUser} />}
    </div>
  );
}

export default App;

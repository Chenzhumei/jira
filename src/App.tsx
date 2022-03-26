import React from 'react';
import './App.css';
import { AuthenticatedApp } from './authenticatedApp';
import { useAuth } from './context/auth-context';
import UnauthenticatedApp from './unauthenticated-app';

function App() {
  const {user} = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp/>}
    </div>
  );
}

export default App;

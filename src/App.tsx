import React from 'react';
import './App.css';
import { AuthenticatedApp } from './authenticatedApp';
import { ErrorBoundary } from './components/error-boundary';
import { FullPageErrorFallback } from './components/lib';
import { useAuth } from './context/auth-context';
import UnauthenticatedApp from './unauthenticated-app';

function App() {
  const {user} = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp/>}
      </ErrorBoundary>
    </div>
  );
}

export default App;

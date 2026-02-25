'use client';

import { useState, useEffect } from 'react';

const LandingPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me', {
          credentials: 'include'
        });

        if (response.status === 401) {
          return;
        }

        if (response.ok) {
          setIsAuthenticated(true);
        }

      } catch (err) {
        console.error("Auth check failed:", err);
      }
    };

    checkAuth();
  }, []);

  const handleSignInClick = () => {
    window.location.href = '/api/sign-in';
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Welcome to the Landing Page!</h1>
      {isAuthenticated ? (
        <p>You are logged in!</p>
      ) : (
        <button
          onClick={handleSignInClick}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default LandingPage;
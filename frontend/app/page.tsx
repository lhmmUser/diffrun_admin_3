'use client';  // Add this line to mark the component as a Client Component

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';  // Use `next/navigation` in Server Components

const LandingPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated by making a request to the backend
    const checkAuth = async () => {
      const response = await fetch('https://420c-14-142-182-243.ngrok-free.app/auth/me', {
        credentials: 'include'
      });

      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const handleSignInClick = () => {
    // Redirect to the backend sign-in route
    router.push('https://420c-14-142-182-243.ngrok-free.app/sign-in');
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

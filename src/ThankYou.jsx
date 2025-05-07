import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/#contact');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>✅ Thank you!</h2>
      <p>Your message has been submitted successfully.</p>
      <p>Redirecting you back...</p>
    </div>
  );
};

export default ThankYou;

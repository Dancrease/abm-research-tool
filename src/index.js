import React from 'react';
import { createRoot } from 'react-dom/client'; // New import for React 19
import App from './App';
import './App.css';


// Log the API key to verify it's loaded correctly
console.log('API Key:', process.env.REACT_APP_HUNTER_API_KEY);

// Create a root for rendering
const root = createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
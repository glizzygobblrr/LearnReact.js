import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the App component
import './index.css'; // Import any global styles (if needed)

// Get the root element from the HTML
const container = document.getElementById('root');

// Create a root and render the App component
const root = ReactDOM.createRoot(container);
root.render(<App />);

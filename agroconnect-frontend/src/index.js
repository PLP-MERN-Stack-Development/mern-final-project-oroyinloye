// agroconnect-frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LogRocket from 'logrocket';

import App from './App';

LogRocket.init('your-org/your-app'); // Optional: replace with your LogRocket app id

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

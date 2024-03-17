import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './ui';
import '@/shared/ui/base.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Layout></Layout>
    </React.StrictMode>
);
reportWebVitals();

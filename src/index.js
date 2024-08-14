import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SearchProvider } from './context';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SearchProvider>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#94a3b8',
          
        },
      }}
    >
      <App />
    </ConfigProvider>
  </SearchProvider>
);
reportWebVitals();

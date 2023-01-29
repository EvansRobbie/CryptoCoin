import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './context/ThemeContext'
import GlobalContextProvider from './context/GlobalContext';
import AuthContextProvider from './context/AuthContext';
import { Toaster } from 'react-hot-toast';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthContextProvider>
        <GlobalContextProvider>
        <Toaster position="top-center" reverseOrder={false}/>
            <Router>
              <App />
            </Router>
            </GlobalContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
    
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { AuthContextProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

     <AuthContextProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
     </AuthContextProvider>
 
)

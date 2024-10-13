import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/*
  Según Victor Robles para los primeros pasos quitamos el archivo "reportWebVitals"
  import reportWebVitals from './reportWebVitals';
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // Quitamos el modo estricto de React tamnbién segun Victor Robles
  //<React.StrictMode>
    
    <App />
  
    //</React.StrictMode>
);


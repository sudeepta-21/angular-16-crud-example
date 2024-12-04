import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import App from './App'; 
// Log the start of the application 
console.log('Starting React application...'); 
try { 
  // Create a root and render the App component into the root div 
  const root = ReactDOM.createRoot(document.getElementById('root')); 
  root.render( 
    <React.StrictMode> 
      <App /> 
    </React.StrictMode> 
  ); 
  console.log('React application started successfully.'); 
} catch (error) { 
  // Log any errors that occur during rendering 
  console.error('Error starting React application:', error.message, error.stack); 
}
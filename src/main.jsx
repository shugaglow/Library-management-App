import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './contextApi/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
      <BrowserRouter>
    <App />
  </BrowserRouter>,
  </ContextProvider>
)

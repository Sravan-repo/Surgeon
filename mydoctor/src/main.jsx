import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx' 
import store from './store.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContextProvider>
   <Provider store={store}>
    <App/>
   </Provider>
  </AppContextProvider>
  </BrowserRouter>

)

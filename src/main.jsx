import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      <Toaster/>
    </Provider>
  </React.StrictMode>,
)
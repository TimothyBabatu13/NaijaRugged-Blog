import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import {App} from "./App.jsx"
import App from './App'
import './index.css'
const MyApp = App.App;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp/>
  </React.StrictMode>,
)

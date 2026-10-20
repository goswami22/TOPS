import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './FrontEnd/Assets/css/font-awesome.min.css'
import './FrontEnd/Assets/css/elegant-icons.css'
import './FrontEnd/Assets/css/jquery-ui.min.css'
import './FrontEnd/Assets/css/magnific-popup.css'
import './FrontEnd/Assets/css/owl.carousel.min.css'
import './FrontEnd/Assets/css/slicknav.min.css'
import './FrontEnd/Assets/css/style.css'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

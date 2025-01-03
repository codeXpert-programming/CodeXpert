import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

function Index() {
    return(
    <Router> 
        <App/>
    </Router> 
    )
}

createRoot(document.getElementById('root')).render(<Index/>)

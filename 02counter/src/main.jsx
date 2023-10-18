import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/*
To render a React element, first pass the DOM element to ReactDOM.createRoot(), 
then pass the React element to root.render():
*/
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

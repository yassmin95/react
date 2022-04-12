import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function AppWithCallbackAfterRender() {
    useEffect(() => {
        console.log('rendered');
    });

    return <App tab="home" />
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<AppWithCallbackAfterRender />);

reportWebVitals();

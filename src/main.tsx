/**
 * @file main.tsx
 */

// Components
import {StrictMode} from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App.tsx';

// Vendors
import ReactDOM from 'react-dom/client';

// Style
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>
);

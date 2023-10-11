// Components
import {StrictMode} from 'react';
import {RouterProvider} from 'react-router-dom';

// Statics
import router from './router.tsx';

// Vendors
import ReactDOM from 'react-dom/client';

// Style
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);

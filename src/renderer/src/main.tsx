// Components
import {StrictMode} from 'react';
import {RouterProvider} from 'react-router-dom';

// Statics
import router from './router';

// Vendors
import {createRoot} from 'react-dom/client';
import {Global} from '@emotion/react';

// Style
import style from './style';

createRoot(document.getElementById('container')!).render(
    <StrictMode>
        <Global styles={style}/>
        <RouterProvider router={router}/>
    </StrictMode>
);

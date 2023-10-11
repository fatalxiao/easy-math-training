// Components
import Root from './modules/Root/Root.tsx';
import App from './modules/App/App.tsx';

// Vendors
import {createBrowserRouter} from 'react-router-dom';

const route = createBrowserRouter([{
    path: '/',
    element: <Root/>,
    children: [{
        path: 'app',
        element: <App/>
    }]
}]);

export default route;

// Components
import Root from './modules/Root/Root.tsx';
import App from './modules/App/App.tsx';

// Vendors
import {createHashRouter} from 'react-router-dom';

const route = createHashRouter([{
    path: '/',
    element: <Root/>,
    children: [{
        index: true,
        // path: 'app',
        element: <App/>
    }]
}]);

export default route;

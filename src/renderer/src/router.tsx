// Components
import Root from './modules/Root/Root';
import App from './modules/App/App';
import RandomNumber from './modules/RandomNumber/RandomNumber';

// Vendors
import {createHashRouter} from 'react-router-dom';

const route = createHashRouter([{
    path: '/',
    element: <Root/>,
    children: [{
        path: 'app',
        element: <App/>,
        children: [{
            path: 'random-number',
            element: <RandomNumber/>
        }]
    }]
}]);

export default route;

// Components
import Root from './modules/Root/Root';
import App from './modules/App/App';
import RandomNumber from './modules/RandomNumber/RandomNumber';
import MultiplicationOrally from './modules/MultiplicationOrally/MultiplicationOrally';

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
        },{
            path: 'multiplication-orally',
            element: <MultiplicationOrally/>
        }]
    }]
}]);

export default route;

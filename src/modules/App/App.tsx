// Components
import {Outlet} from 'react-router-dom';
import Nav from './nav/AppNav';

const App = () => (
    <div className="app">
        <Nav/>
        <Outlet/>
    </div>
);

export default App;

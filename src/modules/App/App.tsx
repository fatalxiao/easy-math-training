// Components
import {Outlet, Navigate} from 'react-router-dom';
import Nav from './nav/AppNav';

// Styles
import style from './style';

const App = () => (
    <div className="app"
         css={style}>
        <Nav/>
        <div className="app-content">
            <Outlet/>
        </div>
        <Navigate to="/app/random-number"/>
    </div>
);

export default App;

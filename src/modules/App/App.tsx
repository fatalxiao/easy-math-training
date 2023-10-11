// Hooks
import {useLocation} from 'react-router-dom';

// Components
import {Outlet, Navigate} from 'react-router-dom';
import Nav from './nav/AppNav';

// Styles
import style from './style';

const App = () => {

    const location = useLocation();

    return (
        <div className="app"
             css={style}>
            <Nav/>
            <Outlet/>
            {location.pathname === '/app' && (
                <Navigate to="/app/random-number"/>
            )}
        </div>
    );

};

export default App;

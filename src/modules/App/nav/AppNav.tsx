// Components
import Menu from './menu/AppNavMenu.tsx';

// Styles
import style from './style.ts';

const AppNav = () => (
    <div className="app-nav"
         css={style}>
        <Menu/>
    </div>
);

export default AppNav;

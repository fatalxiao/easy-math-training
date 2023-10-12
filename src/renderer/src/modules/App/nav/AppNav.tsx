// Components
import Menu from './menu/AppNavMenu';
import Theme from './theme/AppNavTheme';

// Styles
import style from './style';

// Types
import {ReactNode} from 'react';

const AppNav = (): ReactNode => (
    <div className="app-nav"
         css={style}>
        <Menu/>
        <Theme/>
    </div>
);

export default AppNav;

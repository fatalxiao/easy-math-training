// Hooks
import {useContext} from 'react';

// Contexts
import ThemeContext from 'modules/Root/ThemeContext';

// Components
import {Button} from 'antd';

// Ioncs
import Sun from 'icons/Sun';
import Moon from 'icons/Moon';

// Styles
import style from './style';

// Types
import {Theme} from 'modules/Root/ThemeContext';
import {ReactNode} from 'react';

const AppNavTheme = (): ReactNode => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <Button className="app-nav-theme"
                css={style}
                type="text"
                size="large"
                icon={
                    theme === Theme.DARK ?
                        <Moon/>
                        :
                        <Sun/>
                }
                onClick={toggleTheme}/>
    );

};

export default AppNavTheme;
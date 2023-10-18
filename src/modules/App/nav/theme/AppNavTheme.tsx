// Hooks
import {useContext} from 'react';

// Contexts
import ThemeContext from 'src/contexts/ThemeContext.ts';

// Components
import {Button} from 'antd';

// Ioncs
import Sun from 'icons/Sun';
import Moon from 'icons/Moon';

// Styles
import style from './style.ts';

// Types
import {Theme} from 'src/contexts/ThemeContext.ts';

const AppNavTheme = () => {

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

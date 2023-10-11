// Hooks
import {useState, useCallback} from 'react';

// Contexts
import ThemeContext from './ThemeContext.ts';

// Components
import {ConfigProvider} from 'antd';
import {Outlet} from 'react-router-dom';

// Statics
import {theme as antdTheme} from 'antd';

// Vendors
import classNames from 'classnames';

// Styles
import style from './style.ts';

// Types
import {Theme} from './ThemeContext.ts';

const Root = () => {

    const [theme, setTheme] = useState(Theme.LIGHT);

    /**
     * 切换主题
     */
    const toggleTheme = useCallback(() => {
        setTheme(currentTheme =>
            currentTheme === Theme.DARK ?
                Theme.LIGHT
                :
                Theme.DARK
        );
    }, []);

    return (
        <ThemeContext.Provider value={{
            theme, setTheme, toggleTheme
        }}>
            <ConfigProvider theme={{
                algorithm: theme === Theme.DARK ?
                    antdTheme.darkAlgorithm
                    :
                    antdTheme.defaultAlgorithm
            }}>
                <div className={classNames('root', `theme-${theme}`)}
                     css={style}>
                    <Outlet/>
                </div>
            </ConfigProvider>
        </ThemeContext.Provider>
    );

};

export default Root;

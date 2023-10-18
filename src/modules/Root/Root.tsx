// Hooks
import {useState, useCallback, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

// Contexts
import ThemeContext from '../../contexts/ThemeContext.ts';

// Components
import {ConfigProvider} from 'antd';
import {Outlet, Navigate} from 'react-router-dom';

// Statics
import {theme as antdTheme} from 'antd';

// Vendors
import classNames from 'classnames';

// Styles
import style from './style.ts';

// Types
import {Theme} from '../../contexts/ThemeContext.ts';

const Root = () => {

    const location = useLocation();
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

    /**
     * 处理系统 theme 变更
     */
    const handleThemeChange = useCallback((e: MediaQueryListEvent) => {
        setTheme(e.matches ? Theme.DARK : Theme.LIGHT);
    }, []);

    /**
     * 监听是否暗黑模式
     */
    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);
        return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
    }, [
        handleThemeChange
    ]);

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
                    {location.pathname === '/' && (
                        <Navigate to="/app"/>
                    )}
                </div>
            </ConfigProvider>
        </ThemeContext.Provider>
    );

};

export default Root;

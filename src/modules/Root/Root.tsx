// Hooks
import {useState, useCallback} from 'react';

// Contexts
import ThemeContext from './ThemeContext.ts';

// Components
import {ConfigProvider} from 'antd';
import {Outlet} from 'react-router-dom';

// Statics
import {theme as antdTheme} from 'antd';

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
                <div className="root">
                    <Outlet/>
                </div>
            </ConfigProvider>
        </ThemeContext.Provider>
    );

};

export default Root;

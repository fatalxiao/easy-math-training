// Hooks
import {useState} from 'react';

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

    return (
        <ThemeContext.Provider value={{
            theme, setTheme
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

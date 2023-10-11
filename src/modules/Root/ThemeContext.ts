import {createContext} from 'react';
import {Dispatch, SetStateAction} from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface ThemeContextType {

    /**
     * 主题
     */
    theme: Theme;

    setTheme?: Dispatch<SetStateAction<Theme>>;

}

export default createContext<ThemeContextType>({

    /**
     * 当前的主题
     */
    theme: Theme.LIGHT

});

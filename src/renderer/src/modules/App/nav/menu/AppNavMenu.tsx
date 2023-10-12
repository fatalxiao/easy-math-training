// Components
import {Button} from 'antd';

// Icons
import {MenuOutlined} from '@ant-design/icons';

// Styles
import style from './style';

import {ReactNode} from 'react';

const AppNavMenu = (): ReactNode => (
    <Button className="app-nav-menu"
            css={style}
            type="text"
            icon={<MenuOutlined/>}/>
);

export default AppNavMenu;

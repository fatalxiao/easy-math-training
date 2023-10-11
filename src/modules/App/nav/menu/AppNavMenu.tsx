// Components
import {Button} from 'antd';

// Icons
import {MenuOutlined} from '@ant-design/icons';

// Styles
import style from './style.ts';

const AppNavMenu = () => (
    <Button className="app-nav-menu"
            css={style}
            type="text"
            size="large"
            icon={<MenuOutlined/>}/>
);

export default AppNavMenu;

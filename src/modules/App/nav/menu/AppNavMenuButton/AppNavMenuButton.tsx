// Components
import {Button} from 'antd';

// Icons
import {MenuOutlined} from '@ant-design/icons';

// Vendors
import classNames from 'classnames';

// Styles
import style from './style.ts';

// Types
import {ButtonProps} from 'antd';

export type AppNavMenuButtonProps = ButtonProps;

const AppNavMenuButton = (props: AppNavMenuButtonProps) => (
    <Button {...props}
            className={classNames('app-nav-menu-button', props?.className)}
            css={style}
            type="text"
            icon={<MenuOutlined/>}/>
);

export default AppNavMenuButton;

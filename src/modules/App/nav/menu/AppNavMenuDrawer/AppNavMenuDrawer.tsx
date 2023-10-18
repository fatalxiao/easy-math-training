// Hooks
import {useMemo} from 'react';
import {useLocation, useNavigate} from 'react-router';

// Components
import {Drawer, Menu} from 'antd';

// Vendors
import classNames from 'classnames';

// Styles
import style from './style.ts';

// Types
import {DrawerProps, MenuProps} from 'antd';

export type AppNavMenuDrawerProps = DrawerProps;

interface Menu {
    key: string;
    label: string;
    route: string;
}

const menu: Menu[] = [{
    key: 'randomNumber',
    label: 'Random Number',
    route: '/app/random-number'
}, {
    key: 'multiplicationOrally',
    label: 'Multiplication Orally',
    route: '/app/multiplication-orally'
}];

const AppNavMenuDrawer = ({
    className, width = window.innerWidth, placement = 'left',
    onClose,
    ...restProps
}: AppNavMenuDrawerProps) => {

    const location = useLocation();
    const navigate = useNavigate();

    const items = useMemo<MenuProps['items']>(() => {
        return menu.map(item => ({
            key: item.key,
            label: item.label,
            onClick: ({domEvent}) => {
                navigate(item.route);
                onClose?.(domEvent);
            }
        }));
    }, [
        navigate, onClose
    ]);

    return (
        <Drawer {...restProps}
                className={classNames('app-nav-menu-drawer', className)}
                css={style}
                width={width}
                placement={placement}
                onClose={onClose}>
            <Menu mode="inline"
                  items={items}
                  defaultSelectedKeys={[
                      menu.find(item => item.route === location.pathname)?.key || ''
                  ]}/>
        </Drawer>
    );

};

export default AppNavMenuDrawer;

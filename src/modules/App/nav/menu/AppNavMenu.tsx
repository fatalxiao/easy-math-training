// Hooks
import {useBoolean} from 'ahooks';

// Components
import AppNavMenuButton from './AppNavMenuButton';
import AppNavMenuDrawer from './AppNavMenuDrawer';

const AppNavMenu = () => {

    const [open, {setTrue: show, setFalse: hide}] = useBoolean(false);

    return (
        <>
            <AppNavMenuButton onClick={show}/>
            <AppNavMenuDrawer open={open}
                              onClose={hide}/>
        </>
    );

};

export default AppNavMenu;

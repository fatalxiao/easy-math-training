// Hooks
import {useState, useCallback} from 'react';

// Components
import {Button, Input} from 'antd';

// Vendors
import random from 'lodash/random';

// Styles
import style from './style.ts';

const RandomNumber = () => {

    const getRandomNumber = useCallback(() => {
        return random(10000, 99999);
    }, []);

    const [
        number, setNumber
    ] = useState<number>(getRandomNumber());

    const refresh = useCallback(() => {
        setNumber(getRandomNumber());
    }, [
        getRandomNumber
    ]);

    return (
        <div className="random-number"
             css={style}>
            <Input className="random-number-input"
                   value={number}
                   bordered={false}
                   readOnly
                   size="large"/>
            <Button className="random-number-refresh-button"
                    type="primary"
                    size="large"
                    onClick={refresh}>
                Refresh
            </Button>
        </div>
    );

};

export default RandomNumber;

// Hooks
import {useState, useCallback} from 'react';

// Components
import {Button, Input, Segmented} from 'antd';

// Vendors
import random from 'lodash/random';

// Styles
import style from './style';

// Types
import {ReactNode} from 'react';

const RandomNumber = (): ReactNode => {

    const [
        digit, setDigit
    ] = useState<number>(5);

    const getRandomNumber = useCallback((digit = 5) => {
        return random(10 ** (digit - 1), 10 ** digit - 1);
    }, []);

    const [
        number, setNumber
    ] = useState<number>(getRandomNumber(digit));

    const handleDigitChange = useCallback((nextDigit: any) => {
        setDigit(nextDigit);
        setNumber(getRandomNumber(nextDigit));
    }, [
        getRandomNumber
    ]);

    const refresh = useCallback(() => {
        setNumber(getRandomNumber(digit));
    }, [
        digit,
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
            <Segmented className="random-number-digit"
                       options={[4, 5, 6]}
                       size="large"
                       value={digit}
                       onChange={handleDigitChange}/>
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

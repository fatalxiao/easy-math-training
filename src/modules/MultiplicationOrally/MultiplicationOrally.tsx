// Hooks
import {useState, useCallback} from 'react';

// Components
import {Button, Input} from 'antd';

// Vendors
import random from 'lodash/random';

// Styles
import style from './style.ts';
import {useEffect} from 'react';

const A = [2, 4, 5, 8, 10];
const B = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MultiplicationOrally = () => {

    const [
        numberA, setNumberA
    ] = useState<number>();

    const [
        numberB, setNumberB
    ] = useState<number>();

    const refresh = useCallback(() => {
        setNumberA(A[random(0, A.length - 1)]);
        setNumberB(B[random(0, B.length - 1)]);
    }, []);

    useEffect(() => {
        refresh();
    }, [
        refresh
    ]);

    return (
        <div className="multiplication-orally"
             css={style}>
            <div className="numbers">
                <Input className="random-number-input"
                       value={numberA}
                       bordered={false}
                       readOnly
                       size="large"/>
                <Input className="times-input"
                       value="×"
                       bordered={false}
                       readOnly/>
                <Input className="random-number-input"
                       value={numberB}
                       bordered={false}
                       readOnly
                       size="large"/>
            </div>
            <Button className="random-number-refresh-button"
                    type="primary"
                    size="large"
                    onClick={refresh}>
                Refresh
            </Button>
        </div>
    );

};

export default MultiplicationOrally;

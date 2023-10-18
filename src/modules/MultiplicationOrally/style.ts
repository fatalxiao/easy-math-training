// Vendors
import {css} from '@emotion/react';

export default css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12vh;

    .numbers {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 25%;

        .times-input {
            padding: 0;
            line-height: 0;
            text-align: center;
            font-size: 12vw;
        }

        .random-number-input {
            padding: 0;
            line-height: 0;
            text-align: center;
            font-size: 16vw;
        }
    }

    .random-number-refresh-button {
        width: 50%;
        height: 12vw;
        line-height: 12vw;
        font-size: 6vw;
        border-radius: 6vw;
        padding: 0;
    }
`;

// Vendors
import {css} from '@emotion/react';

export default css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12vh;

    .random-number-input {
        padding: 0;
        line-height: 0;
        text-align: center;
        font-size: 20vw;
    }

    .random-number-digit .ant-segmented-item-label {
        width: 16vw;
        height: 12vw;
        min-height: 0;
        line-height: 12vw;
        padding: 0;
        font-size: 4vw;
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

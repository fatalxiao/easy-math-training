// Vendors
import {css} from '@emotion/react';

export default css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16vh;

    .random-number-input {
        text-align: center;
        font-size: 20vw;
    }

    .random-number-digit {

        .ant-segmented-item-label {
            width: 16vw;
            height: 12vw;
            min-height: 0;
            line-height: 12vw;
            padding: 0;
            font-size: 4vw;
        }
    }

    .random-number-refresh-button {
        width: 60%;
        height: 16vw;
        line-height: 16vw;
        font-size: 8vw;
        border-radius: 8vw;
        padding: 0;
    }
`;

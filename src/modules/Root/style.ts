// Vendors
import {css} from '@emotion/react';

export default css`
    height: ${window.innerHeight}px;
    transition: all 0.2s ease;

    &.theme-light {
        background: #fff;
    }

    &.theme-dark {
        background: #262626;
    }
`;

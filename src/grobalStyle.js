import { createGlobalStyle } from 'styled-components';
import  MainFont  from './font/BMJUA_ttf.ttf'

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;

    }
    @font-face {
        font-family: 'MainFont';
        src: url(${MainFont});
        font-weight: 600;
        font-style: normal;
    }
`;
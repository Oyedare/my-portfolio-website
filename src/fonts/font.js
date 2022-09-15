import { createGlobalStyle } from 'styled-components';


import boldWoff from '../fonts/poppins-bold-webfont.woff'
import boldWoff2 from '../fonts/poppins-bold-webfont.woff2'
import mediumWoff from '../fonts/poppins-medium-webfont.woff'
import mediumWoff2 from '../fonts/poppins-medium-webfont.woff2'
import regularWoff from '../fonts/poppins-regular-webfont.woff'
import regularWoff2 from '../fonts/poppins-regular-webfont.woff2'
import semiBoldWoff from '../fonts/poppins-semibold-webfont.woff'
import semiBoldWoff2 from '../fonts/poppins-semibold-webfont.woff2'

export const GlobalFont =  createGlobalStyle`
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url(${mediumWoff2}) format('woff2'),
            url(${mediumWoff}) format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url(${regularWoff2}) format('woff2'),
            url(${regularWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url(${semiBoldWoff2}) format('woff2'),
            url(${semiBoldWoff}) format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Poppins', sans-serif;
        src: url(${boldWoff2}) format('woff2'),
            url(${boldWoff}) format('woff');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
`
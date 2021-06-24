import { createGlobalStyle, css } from 'styled-components'

const MEDIA_WIDTHS = {
  upToSmall: 640,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  accumulator[size] = (...args) => css`
    @media (max-width: ${MEDIA_WIDTHS[size]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

const white = '#FFFFFF'
const black = '#000000'

export const theme = darkMode => ({
  white,
  black,
  textColor: darkMode ? '#efeae7' : '#50251c',
  invertedTextColor: darkMode ? '#50251c' : '#efeae7',
  greyText: darkMode ? '#efeae7' : '#ce6509',

  buttonBorder: darkMode ? '1px solid rgb(226, 214, 207)' : '1px solid rgb(226, 214, 207)',
  buttonText : darkMode ? '#50251c' : '#50251c',
  buttonBackground : darkMode? '#efeae7' : '#efeae7',

  heroBG: darkMode
    ? 'radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%)'
    : 'radial-gradient(76.02% 75.41% at 1.84% 0%, #FF3696 0%, #FFD8EB 100%);',
  gradientBG: darkMode
    ? 'linear-gradient(180deg, #000711 100%, #101518 31.19%, rgba(0, 0, 0, 0) 0%)'
    : 'linear-gradient(180deg, #fff8ee 100%, #efeae7 31.19%, rgba(0, 0, 0, 0) 0%)',
  newPill: darkMode
    ? 'radial-gradient(76.02% 75.41% at 1.84% 0%,#ffffff 0%,#a29b91 100%)'
    : 'radial-gradient(76.02% 75.41% at 1.84% 0%,#000 0%,#efeae7 100%)',
  invertImage: darkMode ? 'filter: invert(0);' : 'filter: invert(1);',

  // for setting css on <html>
  backgroundColor: darkMode ? '#000711' : '#fff8ee',

  modalBackground: darkMode ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.5)',
  cardBG: darkMode ? 'rgba(16, 21, 24, 100%)' : 'rgba(239, 234, 231, 100%)',
  menuBG: darkMode ? '#101518' : '#efeae7',
  marqueeBG: darkMode ? '#010101' : '#010101',

  inputBackground: darkMode ? '#a29b91' : '#fff8ee',
  placeholderGray: darkMode ? '#5F5F5F' : '#E1E1E1',
  shadowColor: darkMode ? '#000' : '#2F80ED',

  // grays
  concreteGray: darkMode ? '#292C2F' : '#FAFAFA',
  mercuryGray: darkMode ? '#333333' : '#E1E1E1',
  silverGray: darkMode ? '#737373' : '#C4C4C4',
  chaliceGray: darkMode ? '#7B7B7B' : '#AEAEAE',
  doveGray: darkMode ? '#C4C4C4' : '#737373',

  colors: {
    blue1: darkMode ? '#3b80ff' : '#D4E4FA',
    blue2: darkMode ? '#1966D2' : '#A9C8F5',
    blue3: darkMode ? '#165BBB' : '#7DACF0',
    blue4: darkMode ? '#2D47A6' : '#5190EB',
    blue5: darkMode ? '#C4D9F8' : '#2172E5',
    blue6: darkMode ? '#C4D9F8' : '#1A5BB6',
    blue7: darkMode ? '#C4D9F8' : '#144489',
    blue8: darkMode ? '#C4D9F8' : '#0E2F5E',
    blue9: darkMode ? '#C4D9F8' : '#191B1F',

    // grey1: darkMode ? '#191B1F' : '#F7F8FA',
    // grey2: darkMode ? '#2C2F36' : '#EDEEF2',
    // grey3: darkMode ? '#40444F' : '#CED0D9',
    // grey4: darkMode ? '#565A69' : '#888D9B',
    // grey5: darkMode ? '#6C7284' : '#6C7284',
    grey6: darkMode ? '#888D9B' : '#565A69',
    grey7: darkMode ? '#ce6509' : '#ce6509',
    grey8: darkMode ? '#EDEEF2' : '#2C2F36',
    grey9: darkMode ? '#efeae7' : '#50251c',

    grey1: darkMode ? '#50251c' : '#efeae7',
    grey2: darkMode ? '#2C2F36' : '#F7F8FA',
    grey3: darkMode ? '#40444F' : '#EDEEF2',
    grey4: darkMode ? '#565A69' : '#CED0D9',
    grey5: darkMode ? '#ce6509' : '#ce6509',

    white: '#FFFFFF',
    black: '#000000',

    green1: '#E6F3EC',
    green2: '#27AE60',

    pink1: darkMode ? '#2F80ED' : '#FF007A',
    pink2: '#FF8EC4',
    pink3: '#FFD7EA',

    yellow1: darkMode ? '#F3BE1E' : '#F3BE1E',
    yellow2: darkMode ? '#ffe490' : '#ffe490',

    red1: '#FF6871',

    link: darkMode ? '#efeae7' : '#efeae7',
    invertedLink: darkMode ? '#efeae7' : '#efeae7'
  },

  shadows: {
    small: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    large: '0px 6px 10px rgba(0, 0, 0, 0.15)',
    huge:
      ' 0px 0px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 16px 24px rgba(0, 0, 0, 0.02), 0px 24px 32px rgba(0, 0, 0, 0.02)'
  },

  // media queries
  mediaWidth: mediaWidthTemplates,
  // css snippets
  flexColumnNoWrap: css`
    display: flex;
    flex-flow: column nowrap;
  `,
  flexRowNoWrap: css`
    display: flex;
    flex-flow: row nowrap;
  `
})

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  
  
    html {
    font-size: 16px;
    font-variant: none;
    background-color: ${({ theme }) => theme.backgroundColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    overflow-y: scroll;
    width: 100%;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: "Poppins,sans-serif";

    line-height: 1.55;
    /* max-width: 1440px; */
    width: 100%;
    margin: 0px auto;
    font-weight: 400 !important;
    color: ${({ theme }) => theme.textColor};

    
    @media (min-width: 1441px) {
        overflow-x: visible;
    }
  }

  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }

  .title{
    letter-spacing: -0.05em;
    font-family: "Poppins,sans-serif";
    font-size: 72px;
  }

  h1 {
    font-family: "Poppins,sans-serif";
    margin-top: 1.75rem ;
    font-size: 1.875rem;
    font-weight: 500;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    font-family: "Poppins,sans-serif";  }

  h3 {
    font-weight: 400;
    font-family: "Poppins,sans-serif";  }



  #gatsby-focus-wrapper{
    min-height: 100vh;
    width: 100%;
    position: relative;
  }
  a{
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
  }
  button{
    color: ${({ theme }) => theme.textColor};
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

  strong{
    font-weight: bold;
    color: ${({ theme }) => theme.colors.grey9};
  }

 .ds-dropdown-menu {
    width: 100px;
    max-height: 600px;
    overflow: auto;

    @media screen and (max-width: 1080px) {
      min-width: 300px !important;
    }
  }
`

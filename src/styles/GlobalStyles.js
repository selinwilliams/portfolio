import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    scroll-padding-top: 100px;
    &.no-scroll {
      overflow: hidden;
    }
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.5;
    overflow-x: hidden;
    transition: background-color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Enhanced Smooth Scrolling */
  * {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }

  /* Smooth Scrolling for Mouse Wheel */
  html, body {
    scroll-behavior: smooth;
    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary}80;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background: ${props => props.theme.colors.primary};
    }
  }

  /* Smooth transitions for all interactive elements */
  a, button {
    transition: all 0.3s ease;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.heading};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Utility Classes */
  .section-padding {
    padding: 5rem 5%;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    .section-padding {
      padding: 3rem 5%;
    }
  }
`

export default GlobalStyles 
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    font-family: Inter, 'Noto Sans KR', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --shadow-sm: 0 1px 1px rgba(16,24,40,0.04), 0 1px 2px rgba(16,24,40,0.08);
    --shadow-md: 0 2px 4px rgba(16,24,40,0.06), 0 4px 8px rgba(16,24,40,0.08);
  }

  a { color: inherit; text-decoration: none; }
  ul { margin: 0; padding: 0; list-style: none; }

  /* width alignment helper for header/content */
  .container {
    width: 100%;
    max-width: ${({ theme }) => theme.layout.contentMaxWidth}px;
    margin: 0 auto;
    padding: 0 8px;
  }
`



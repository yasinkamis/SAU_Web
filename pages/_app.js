import Container from 'layout/Container';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
  }
  * {
    padding: 0;
    margin: 0;
  }
  a{
    color: #000;
    text-decoration: none;
    &:hover{
      color: #000;
    }
  }
  .control-arrow {
    &:hover {
      background-color: rgba(0, 58, 106, 0.3) !important;
    }
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{ fontFamily: 'Helvetica sans-serif' }}>
      <GlobalStyle />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;

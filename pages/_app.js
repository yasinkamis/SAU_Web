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
  .contact-form-wrapper {
    padding: 100px 0;
  }
  
  .contact-form {
    padding: 30px 40px;
    background-color: #ffffff;
    border-radius: 12px;
    max-width: 400px;
  }
  
  .contact-form textarea {
    resize: none;
  }
  
  .contact-form .form-input,
  .form-text-area {
    background-color: #f0f4f5;
    height: 50px;
    padding-left: 16px;
  }
  
  .contact-form .form-text-area {
    background-color: #f0f4f5;
    height: auto;
    padding-left: 16px;
  }
  
  .contact-form .form-control::placeholder {
    color: #aeb4b9;
    font-weight: 500;
    opacity: 1;
  }
  
  .contact-form .form-control:-ms-input-placeholder {
    color: #aeb4b9;
    font-weight: 500;
  }
  
  .contact-form .form-control::-ms-input-placeholder {
    color: #aeb4b9;
    font-weight: 500;
  }
  
  .contact-form .form-control:focus {
    border-color: #003a6a;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.07), 0 0 8px #003a6a;
  }
  
  .contact-form .title {
    text-align: center;
    font-size: 24px;
    font-weight: 500;
  }
  
  .contact-form .description {
    color: #aeb4b9;
    font-size: 14px;
    text-align: center;
  }
  
  .contact-form .submit-button-wrapper {
    text-align: center;
  }
  
  .contact-form .submit-button-wrapper input {
    border: none;
    border-radius: 4px;
    background-color: #003a6a;
    color: white;
    text-transform: uppercase;
    padding: 10px 60px;
    font-weight: 500;
    letter-spacing: 2px;
  }
  
  .contact-form .submit-button-wrapper input:hover {
    background-color: #4883b3;
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

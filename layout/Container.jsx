import Navbar from './Navbar';
import styled from 'styled-components';

const Container = ({ children }) => {
  return (
    <Wrapper className="d-flex flex-column align-items-center">
      <Navbar />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Container;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #efefef;
`;

const Content = styled.section`
  position: relative;
  width: 1080px;
  margin-top: 16px;
`;

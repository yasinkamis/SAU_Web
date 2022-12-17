import { NavLogo } from 'components';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper className="d-flex justify-content-center">
      <Content className="d-flex justify-content-between align-items-center">
        <Wrapper>
          <p>© Sakarya Üniversitesi Bilgisayar Araştırma ve Uygulama Merkezi</p>
        </Wrapper>
        <NavLogo footer />
      </Content>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  height: 140px;
  background-color: #003a6a;
  color: white;
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 1080px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
`;

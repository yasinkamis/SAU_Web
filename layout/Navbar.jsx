import { NavLogo, Search } from 'components';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav className="d-flex justify-content-center">
      <Content className="d-flex justify-content-between align-items-center">
        <NavLogo />
        <Wrapper>
          <Search />
          <LanguageButton className="px-2">TR</LanguageButton>
        </Wrapper>
      </Content>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  height: 140px;
  background-color: #003a6a;
  color: white;
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  width: 1080px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  height: 30px;
`;

const LanguageButton = styled.button`
  position: relative;
  background-color: #004884;
  color: #fff;
  border-radius: 0.375rem;
  height: 30px;
  border: none;
  font-size: 12px;
  &:hover {
    background-color: #4883b3;
    border-color: #004884;
  }
`;

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Pivot as Hamburger } from 'hamburger-react';
import { NavLogo, Search } from 'components';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <Nav className="d-flex justify-content-center">
        <Content className="d-flex justify-content-between align-items-center">
          <NavLogo />
          <Wrapper>
            <Search />
            <LanguageButton className="px-2">TR</LanguageButton>
          </Wrapper>
        </Content>
      </Nav>
      <Menu
        className="d-flex justify-content-center align-items-center flex-column"
        isOpen={isOpen}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} size={16} color="#fff" />
        <Link href="/">
          <p>Anasayfa</p>
        </Link>
        <Link href="notice">
          <p>Duyurular</p>
        </Link>
        <Link href="contact">
          <p>İletişim</p>
        </Link>
      </Menu>
    </>
  );
};

export default Navbar;

const Menu = styled.div`
  width: 100%;
  transition: all 0.5s ease;
  background-color: ${p => (p.isOpen ? '#4883b3' : '#003a6a')};
  color: #fff !important;
  border-top: 1px solid #fff;
  overflow: hidden;
  a {
    transition: all 0.5s ease;
    color: #fff;
    line-height: 50px;
    height: ${p => (p.isOpen ? '50px' : '0px')};
    &:hover {
      color: #003a6a;
    }
  }
`;

const Nav = styled.nav`
  width: 100%;
  height: 140px;
  background-color: #003a6a;
  color: #fff;
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

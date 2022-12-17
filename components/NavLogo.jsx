import Image from 'next/image';
import styled from 'styled-components';
import WhiteLogo from 'public/assets/white_logo.png';

const NavLogo = ({ footer }) => {
  return (
    <Logo footer={footer} className="d-flex align-items-center">
      <Image src={WhiteLogo} />
      <div
        className={`${
          footer ? 'd-flex align-items-end flex-column mx-3' : 'mx-3'
        }`}
      >
        <h3>YASİN ÜNİVERSİTESİ</h3>
        <h5>Bilgisayar ve Bilişim Bilimleri Fakültesi</h5>
      </div>
    </Logo>
  );
};

export default NavLogo;

const Logo = styled.div`
  width: ${p => (p.footer ? 'auto' : '100%')};
  justify-content: ${p => p.footer && 'flex-end'};
  flex-direction: ${p => p.footer && 'row-reverse'};
  height: 100%;
  font-family: 'times new roman', sans-serif;
  h3 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }
  h5 {
    font-size: 18px;
    margin: 0;
  }
`;
